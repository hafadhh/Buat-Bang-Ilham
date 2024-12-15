import React, { useState, useEffect } from "react"; 
import { Button, Image } from "@nextui-org/react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import './ListHistoryOrderCSS.css'; 

const Request = () => { 
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({ name: "", phone: "" });

  const jasa = { 
    title: "Sedot WC", 
    price: "Rp 3.000.000.000", 
    description: "Layanan sedot WC untuk menjaga kebersihan dan kenyamanan lingkungan. Layanan ini mencakup pembersihan secara menyeluruh.", 
    image: "https://via.placeholder.com/150", 
  };

  const [address, setAddress] = useState(""); 
  const [jobDetail, setJobDetail] = useState(""); 
  const [isRequesting, setIsRequesting] = useState(false); 

  useEffect(() => {
    const fetchCustomerData = async () => {
      const response = await axios.get("http://localhost:2000/profile/1");
      setCustomerData({ name: response.data.name, phone: response.data.phoneNumber });
    };
    fetchCustomerData();
  }, []);

  const handleOrder = async () => { 
    setIsRequesting(true);
    const orderData = {
      id: Date.now().toString(),
      title: jasa.title,
      price: jasa.price,
      address: address,
      jobDetail: jobDetail,
      name: customerData.name, // Menggunakan nama yang diperbarui
      phone: customerData.phone, // Menggunakan nomor telepon yang diperbarui
      status: "Mencari pekerja",
      date: new Date().toISOString() // Tambahkan tanggal pesanan
    };
  
    try {
      await axios.post("http://localhost:2000/orders", orderData);
      console.log(`ini isi posy: ${orderData.title} | ${orderData.address} | ${orderData.name}`)
      navigate("/profile-page"); // Redirect to ProfileCustomer page
    } catch (error) {
      console.error("Error sending order:", error);
    } finally {
      setIsRequesting(false);
    }
  };

  return ( 
    <div className="h-screen from-blue-400 to-blue-600 p-6 flex items-center justify-center"> 
      <div className=" order-card flex flex-col md:flex-row items-center justify-start w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 outline outline-blue-500">
        {/* Gambar Jasa (Sebelah Kiri) */}
        <div className="md:w-1/3 flex justify-center items-center">
          <Image
            alt={jasa.title}
            src={jasa.image}
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Detail Jasa (Sebelah Kanan) */}
        <div className="md:w-2/3 ml-8 flex flex-col  ">
          <h2 className="text-3xl font-bold text-blue-800">{jasa.title}</h2>
          <p className="text-xl font-semibold text-green-600 mt-2">
            {jasa.price}
          </p>
          <p className="text-sm text-gray-600 mt-4">{jasa.description}</p>

          <p className="text-m text-gray-600 mt-4">Nama: {customerData.name}</p>
          <p className="text-m text-gray-600">No Telp: {customerData.phone}</p>

          <label htmlFor="address" className="text-sm text-gray-600 mt-6">
            Alamat Anda:
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-md p-2 mt-2 w-full h-16"
            placeholder="Masukkan alamat lengkap Anda"
          />

          <label htmlFor="jobDetail" className="text-sm text-gray-600 mt-4">
            Detail Keluhan:
          </label>
          <textarea
            id="jobDetail"
            value={jobDetail}
            on Change={(e) => setJobDetail(e.target.value)}
            className="border rounded-md p-2 mt-2 w-full h-16"
            placeholder="Masukkan Detail Keluhan Anda"
          />
          <Button
            color="success"
            className="mt-6"
            onClick={handleOrder}
            disabled={isRequesting}
          >
            Process Order
          </Button>
        </div>
      </div>
    </div>
  ); 
};

export default Request;
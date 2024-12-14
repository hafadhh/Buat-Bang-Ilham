import React, { useState } from "react"; 
import { Button, Image } from "@nextui-org/react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const Request = () => { 
  const navigate = useNavigate();

  const jasa = { 
    title: "Sedot WC", 
    price: "Rp 3.000.000.000", 
    description: "Layanan sedot WC untuk menjaga kebersihan dan kenyamanan lingkungan. Layanan ini mencakup pembersihan secara menyeluruh.", 
    image: "https://nextui.org/images/hero-card-complete.jpeg", 
  };

  const [address, setAddress] = useState(""); 
  const [jobDetail, setJobDetail] = useState(""); 
  const [isRequesting, setIsRequesting] = useState(false); 

  const handleOrder = async () => { 
    setIsRequesting(true);
    const orderData = {
      id: Date.now().toString(),
      title: jasa.title,
      price: jasa.price,
      address: address,
      jobDetail: jobDetail,
      name: "Adeline Najwa Medina",
      phone: "089754829462", 
      status: "Mencari pekerja"
    };

    try {
      await axios.post("http://localhost:2000/orders", orderData);
      navigate("/dashboard"); // Redirect to ListOrder page
    } catch (error) {
      console.error("Error sending order:", error);
    } finally {
      setIsRequesting(false);
    }
  };

  return ( 
    <div className="h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6 flex items-center justify-center"> 
      <div className="flex flex-col md:flex-row mt-5">
        <div className="flex justify-center items-center md:w-1/2 p-6 bg-white rounded-lg shadow-md h-auto">
          <div className="flex flex-col h-auto w-full">
            <h2 className="text-3xl font-bold text-blue-800">{jasa.title}</h2>
            <p className="text-xl font-semibold text-green-600 mt-12">{jasa.price}</p>
            <p className="text-sm text-gray-600 mt-4">{jasa.description}</p>
            <br />
            <p className="text-sm text-gray-600 mt-4">Adeline Najwa Medina</p>
            <p className="text-sm text-gray-600 mt-4">No telp 02827384937</p>
            <br />
            <label htmlFor="address" className="text-sm text-gray-600">Alamat Anda:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded-md p-2 mt-2 w-full h-16"
              placeholder="Masukkan alamat lengkap Anda"
            />

            <label htmlFor="jobDetail" className="text-sm text-gray-600">Detail Keluhan:</label>
            <textarea
              id="jobDetail"
              value={jobDetail}
              onChange={(e) => setJobDetail(e.target.value)}
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

        <div className="flex justify-center items-center md:w-1/2 p-6">
          <Image
            alt={jasa.title}
            src={jasa.image}
            width={300}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  ); 
};

export default Request;
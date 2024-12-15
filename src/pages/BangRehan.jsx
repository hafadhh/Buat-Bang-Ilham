import React, { useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { useNavigate } from "react-router";
import axios from "axios";

const Haha = () => {
  const navigate = useNavigate();

  const jasa = {
    id_jasa: 1,
    id_penyedia: 1,
    kategori: "Konsultasi",
    nama_jasa: "Konsultasi Bisnis",
    deskripsi: "Konsultasi untuk pengembangan bisnis Anda.",
    harga: 100_000,
    foto: "https://via.placeholder.com/150",
    status: "Aktif",
  };

  const [address, setAddress] = useState("");
  const [jobDetail, setJobDetail] = useState("");
  const [isRequesting, setIsRequesting] = useState(false); 
  const [orderAccepted, setOrderAccepted] = useState(false);

  const handleOrder = async () => {
    setIsRequesting(true);
    const orderData = {
      title: jasa.nama_jasa,
      price: `Rp ${jasa.harga.toLocaleString()}`,
      address: address,
      jobDetail: jobDetail,
      name: "Adeline Najwa Medina",
      phone: "089754829462",
    };

    try {
      const response = await axios.post("YOUR_BACKEND_URL/orders", orderData);
      console.log("Order response:", response.data);
      setOrderAccepted(true);
    } catch (error) {
      console.error("Error sending order:", error);
    } finally {
      setIsRequesting(false);
    }
  };

  const handleCancelOrder = () => {
    setIsRequesting(false);
    setOrderAccepted(false);
    navigate("/");
  };

  const handleGoToOrder = () => {
    navigate("/order");
  };

  return (
    <div className="h-screen from-blue-400 to-blue-600 p-6 flex items-center justify-center">
     <div className="flex flex-col md:flex-row items-center justify-start w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 outline outline-blue-500">
        {/* Gambar Jasa (Sebelah Kiri) */}
        <div className="md:w-1/3 flex justify-center items-center">
          <Image
            alt={jasa.nama_jasa}
            src={jasa.foto}
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Detail Jasa (Sebelah Kanan) */}
        <div className="md:w-2/3 ml-8 flex flex-col">
          <h2 className="text-3xl font-bold text-blue-800">{jasa.nama_jasa}</h2>
          <p className="text-xl font-semibold text-green-600 mt-2">
            Rp {jasa.harga.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 mt-4">{jasa.deskripsi}</p>

        <p className="text-m text-gray-600 mt-4">Nama</p>
        <p className="text-m text-gray-600 ">No Telp:</p>

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
            onChange={(e) => setJobDetail(e.target.value)}
            className="border rounded-md p-2 mt-2 w-full h-16"
            placeholder="Masukkan Detail Keluhan Anda"
          />

          <Button
            color="success"
            className="mt-6"
            onClick={handleOrder}
            disabled={isRequesting || orderAccepted}
          >
            {orderAccepted ? "Order Diterima" : "Process Pesanan"}
          </Button>
        </div>
      </div>

      {isRequesting && !orderAccepted && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-blue-800">
              Pesanan Anda sedang menunggu konfirmasi...
            </p>
            <div className="loader mt-4"></div>
            <Button
              color="error"
              className="mt-6"
              onClick={handleCancelOrder}
            >
              Batalkan Pesanan
            </Button>
          </div>
        </div>
      )}

      {orderAccepted && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-green-600">
              Pesanan Anda telah diterima!
            </p>
            <Button
              color="success"
              className="mt-6"
              onClick={handleGoToOrder}
            >
              Lihat Pesanan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Haha;

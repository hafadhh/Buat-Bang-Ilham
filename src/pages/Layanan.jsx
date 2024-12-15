import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Layanan = () => {
  const navigate = useNavigate();
  const cards = [
    
{
  id: 1,
  title: "Sedot WC",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/login", 
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/", // Tentukan URL tujuan
},
{
  id: 2,
  title: "Memperbaiki Atap",
  description: "",
  category: "Layanan",
  image: "https://nextui.org/images/hero-card-complete.jpeg",
  link: "/",
  
},
  ];
  // bg-gradient-to-r from-blue-400 to-blue-600 
  return (
    <div className="flex flex-col h-screen overflow-hidden items-center justify-center  "
      style={{
        backgroundColor: "#FFFF", // Bisa disesuaikan dengan warna brand BantuIn
        fontFamily: "'Roboto', sans-serif", // Menyesuaikan dengan font yang lebih modern
      }}
    >
      <h1 className="text-4xl font-bold  mb-8" stlye={{color:"#333333"}}>Layanan BantuIn</h1> {/* Menambah jarak bawah */}
      
      <div className="mx-16 md:mx-36 justify-center" // Menyesuaikan dengan margin responsif
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "16px",
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            isPressable
            shadow="sm"
            className="py-4"
            style={{
              flex: "1 1 calc(25% - 16px)",
              minWidth: "200px",
              maxWidth: "230px",
              backgroundColor: "#81D4FA",
              borderRadius: "8px", // Menambahkan border-radius agar lebih modern
            }}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center">
              <p className="text-sm uppercase font-bold " stlye={{color:"#333333"}} >{card.category}</p>
              <small className="text-white" stlye={{color:"#333333"}}>{card.description}</small>
              <h4 className="font-bold text-xl  mt-2" stlye={{color:"#333333"}}>{card.title}</h4> {/* Menambah jarak atas */}
            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
              <Image
                alt={`Image for ${card.title}`}
                className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                src={card.image}
                width={210}
                onClick={() => navigate(card.link)}
                style={{ cursor: "pointer" }}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Layanan;


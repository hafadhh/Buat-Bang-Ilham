// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: " user membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Daftar Pesanan Anda</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               <Button
//                 color="error"
//                 onClick={() => cancelOrder(order.id)}
//                 className="mt-2"
//               >
//                 Batalkan Pesanan
//               </Button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User  membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Daftar Pesanan Anda</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               {order.status === "Mencari pekerja" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="mt-2"
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User   membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Daftar Pesanan Anda</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               {/* Tampilkan tombol batalkan pesanan untuk semua status */}
//               <Button
//                 color="error"
//                 onClick={() => cancelOrder(order.id)}
//                 className="mt-2"
//               >
//                 Batalkan Pesanan
//               </Button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// ==================================================================================================

// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User  membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Daftar Pesanan Anda</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
//               {order.status !== "User  membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="mt-2"
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ========================================================================================

// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User   membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Daftar Pesanan Anda</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               <p>Harga: {order.price}</p>
//               <p>Alamat: {order.address}</p>
//               <p>Detail Pekerjaan: {order.jobDetail}</p>
//               <p>Nama: {order.name}</p>
//               <p>Telepon: {order.phone}</p>
//               {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
//               {order.status !== "User   membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="mt-2"
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// +_+_+_+_+__


// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 
// import './ListHistoryOrderCSS.css'; // Pastikan untuk mengimpor file CSS

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User  membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Daftar Pesanan Anda</h1>
//       <div className="orders-list">
//         {orders.length === 0 ? (
//           <p className="no-orders">Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="order-card">
//               <h2 className="order-title">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               <p>Harga: {order.price}</p>
//               <p>Alamat: {order.address}</p>
//               <p>Detail Pekerjaan: {order.jobDetail}</p>
//               <p>Nama: {order.name}</p>
//               <p>Telepon: {order.phone}</p>
//               {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
//               {order.status !== "User  membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="cancel-button"
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 
// import './ListHistoryOrderCSS.css'; 

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User   membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Daftar Pesanan Anda</h1>
//       <br />
//       <div className="orders-list">
//         {orders.length === 0 ? (
//           <p className="no-orders">Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="order-card">
//               <h2 className="order-title">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               <p>Harga: {order.price}</p>
//               <p>Alamat: {order.address}</p>
//               <p>Detail Pekerjaan: {order.jobDetail}</p>
//               <p>Nama: {order.name}</p>
//               <p>Telepon: {order.phone}</p>
//               {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
//               {order.status !== "User   membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="cancel-button"
//                   size="sm" // Ukuran tombol lebih kecil
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 
// import './ListHistoryOrderCSS.css'; // Pastikan untuk mengimpor file CSS

// const Dashboard = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data);
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User   membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Daftar Pesanan Anda</h1>
//       <br />
//       <div className="orders-list">
//         {orders.length === 0 ? (
//           <p className="no-orders">Tidak ada pesanan yang ditemukan.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="order-card">
//               <h2 className="order-title">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               <p>Harga: {order.price}</p>
//               <p>Alamat: {order.address}</p>
//               <p>Detail Pekerjaan: {order.jobDetail}</p>
//               <p>Nama: {order.name}</p>
//               <p>Telepon: {order.phone}</p>
//               {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
//               {order.status !== "User   membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
//                 <Button
//                   color="error"
//                   onClick={() => cancelOrder(order.id)}
//                   className="cancel-button"
//                   size="sm"
//                 >
//                   Batalkan Pesanan
//                 </Button>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { Button } from "@nextui-org/react"; 
import './ListHistoryOrderCSS.css'; // Pastikan untuk mengimpor file CSS

const Dashboard = () => { 
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:2000/orders");
    setOrders(response.data);
  };

  const cancelOrder = async (id) => {
    await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User  membatalkan pesanan" });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Daftar Pesanan Anda</h1>
      <div className="orders-list">
        {orders.length === 0 ? (
          <p className="no-orders">Tidak ada pesanan yang ditemukan.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <h2 className="order-title">{order.title}</h2>
              <div className="order-detail">
                <span>Status:</span>
                <span>{order.status}</span>
              </div>
              <div className="order-detail">
                <span>Harga:</span>
                <span>{order.price}</span>
              </div>
              <div className="order-detail">
                <span>Alamat:</span>
                <span>{order.address}</span>
              </div>
              <div className="order-detail">
                <span>Detail Pekerjaan:</span>
                <span>{order.jobDetail}</span>
              </div>
              <div className="order-detail">
                <span>Nama:</span>
                <span>{order.name}</span>
              </div>
              <div className="order-detail">
                <span>Telepon:</span>
                <span>{order.phone}</span>
              </div>
              {/* Tampilkan tombol batalkan pesanan hanya jika status bukan pembatalan */}
              {order.status !== "User  membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan" && (
                <Button
                  color="error"
                  onClick={() => cancelOrder(order.id)}
                  className="cancel-button"
                  size="sm" // Ukuran tombol lebih kecil
                >
                  Batalkan Pesanan
                </Button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
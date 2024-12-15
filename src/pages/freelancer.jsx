import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { Button } from "@nextui-org/react"; 

const Freelancer = () => { 
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:2000/orders");
    setOrders(response.data.filter(order => order.status === "Mencari pekerja" || order.status === "Pesanan diambil"));
  };

  const takeOrder = async (id) => {
    await axios.patch(`http://localhost:2000/orders/${id}`, { status: "Pesanan diambil" });
    fetchOrders();
  };

  const cancelOrder = async (id) => {
    await axios.patch(`http://localhost:2000/orders/${id}`, { status: "Petugas membatalkan pesanan" });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Pesanan Tersedia</h1>
      <div className="mt-4">
        {orders.length === 0 ? (
          <p>Tidak ada pesanan yang tersedia.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="border p-4 mb-4 rounded">
              <h2 className="text-xl font-semibold">{order.title}</h2>
              <p>Status: {order.status}</p>
              <p>Harga: {order.price}</p>
              <p>Alamat: {order.address}</p>
              <p>Detail Pekerjaan: {order.jobDetail}</p>
              <p>Nama: {order.name}</p>
              <p>Telepon: {order.phone}</p>
              {order.status === "Mencari pekerja" ? (
                <Button
                  color="success"
                  onClick={() => takeOrder(order.id)}
                  className="mt-2"
                >
                  Ambil Pesanan
                </Button>
              ) : order.status === "Pesanan diambil" ? (
                <Button
                  color="error"
                  onClick={() => cancelOrder(order.id)}
                  className="mt-2"
                >
                  Batalkan Pesanan
                </Button>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Freelancer;





// ========================================================================================


// import React, { useEffect, useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@nextui-org/react"; 

// const Freelancer = () => { 
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/orders");
//     setOrders(response.data.filter(order => order.status === "Mencari pekerja" || order.status === "Pesanan diambil"));
//   };

//   const takeOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "Pesanan diambil" });
//     fetchOrders();
//   };

//   const cancelOrder = async (id) => {
//     await axios.patch(`http://localhost:2000/orders/${id}`, { status: "Petugas membatalkan pesanan" });
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Pesanan Tersedia</h1>
//       <div className="mt-4">
//         {orders.length === 0 ? (
//           <p>Tidak ada pesanan yang tersedia.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-4 mb-4 rounded">
//               <h2 className="text-xl font-semibold">{order.title}</h2>
//               <p>Status: {order.status}</p>
//               {order.status === "Mencari pekerja" ? (
//                 <Button
//                   color="success"
//                   onClick={() => takeOrder(order.id)}
//                   className="mt-2"
//                 >
//                   Ambil Pesanan
//                 </Button>
//               ) : (
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

// export default Freelancer;

// ========================================================================================
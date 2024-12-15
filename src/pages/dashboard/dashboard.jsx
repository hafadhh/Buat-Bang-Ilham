
// import React, { useEffect, useState } from "react"; 
// import { Button } from "@nextui-org/react"; 
// import axios from "axios"; 
// import { useNavigate } from "react-router-dom";
// const ListOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const response = await axios.get("http://localhost:2000/detail-order/");
//       setOrders(response.data);
//     };
//     fetchOrders();
//   }, []);

//   const handleDeleteOrder = async (orderId) => {
//     const updatedOrders = orders.filter((order) => order.id !== orderId);
//     setOrders(updatedOrders);
//     try {
//       await axios.delete(`http://localhost:2000/detail-order/${orderId}`);
//     } catch (error) {
//       console.error("Error deleting order:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">List of Orders</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {orders.map((order) => (
//           <div key={order.id} className="border rounded-lg p-4 shadow-md">
//             <h2 className="text-xl font-semibold">{order.title}</h2>
//             <p className="text-gray-600">Price: {order.price}</p>
//             <p className="text-gray-600">Address: {order.address}</p>
//             <p className="text-gray-600">Detail: {order.jobDetail}</p>
//             <p className="text-gray-600">Status: {order.status || "Mencari pekerja"}</p>
//             {order.status === "Petugas membatalkan orderan" ? (
//               <Button
//                 color="secondary"
//                 onClick={() => handleDeleteOrder(order.id)}
//                 className="mt-2"
//               >
//                 OK
//               </Button>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export  default ListOrder 




// import React, { useEffect, useState } from "react"; 
// import { Button } from "@nextui-org/react"; 
// import axios from "axios"; 
// import { useNavigate } from "react-router-dom";

// const ListOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   const fetchOrders = async () => {
//     const response = await axios.get("http://localhost:2000/detail-order/");
//     setOrders(response.data);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleCancelOrder = async (orderId) => {
//     // Update status to "User membatalkan orderan"
//     try {
//       await axios.put(`http://localhost:2000/detail-order/${orderId}`, { status: "User membatalkan orderan" });
//       const updatedOrders = orders.map(order => {
//         if (order.id === orderId) {
//           return { ...order, status: "User membatalkan orderan" };
//         }
//         return order;
//       });
//       setOrders(updatedOrders);
//     } catch (error) {
//       console.error("Error canceling order:", error);
//     }
//   };

//   const handleConfirmDelete = async (orderId) => {
//     // Delete order permanently
//     try {
//       await axios.delete(`http://localhost:2000/detail-order/${orderId}`);
//       const updatedOrders = orders.filter(order => order.id !== orderId);
//       setOrders(updatedOrders);
//     } catch (error) {
//       console.error("Error deleting order:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">List of Orders</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {orders.map(order => (
//           <div key={order.id} className="border rounded-lg p-4 shadow-md">
//             <h2 className="text-xl font-semibold">{order.title}</h2>
//             <p className="text-gray-600">Price: {order.price}</p>
//             <p className="text-gray-600">Address: {order.address}</p>
//             <p className="text-gray-600">Detail: {order.jobDetail}</p>
//             <p className="text-gray-600">Status: {order.status || "Mencari pekerja"}</p>

//             {order.status === "User membatalkan orderan" || order.status === "Petugas membatalkan orderan" ? (
//               <Button
//                 color="error"
//                 onClick={() => handleConfirmDelete(order.id)}
//                 className="mt-2"
//               >
//                 OK
//               </Button>
//             ) : (
//               <Button
//                 color="warning"
//                 onClick={() => handleCancelOrder(order.id)}
//                 className="mt-2"
//               >
//                 Batalkan Pesanan
//               </Button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListOrder;
import React, { useEffect, useState } from "react"; 
import { Button } from "@nextui-org/react"; 
import axios from "axios"; 

const ListOrder = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:2000/detail-order/");
    setOrders(response.data);
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      // Update status to "User membatalkan orderan"
      await axios.put(`http://localhost:2000/detail-order/${orderId}`, { status: "User membatalkan orderan" });
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "User membatalkan orderan" };
        }
        return order;
      });
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  const handleConfirmDelete = async (orderId) => {
    try {
      // Delete order permanently
      await axios.delete(`http://localhost:2000/detail-order/${orderId}`);
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">List of Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{order.title}</h2>
            <p className="text-gray-600">Price: {order.price}</p>
            <p className="text-gray-600">Address: {order.address}</p>
            <p className="text-gray-600">Detail: {order.jobDetail}</p>
            <p className="text-gray-600">Status: {order.status || "Mencari pekerja"}</p>

            {order.status === "User membatalkan orderan" || order.status === "Petugas membatalkan orderan" ? (
              <Button
                color="error"
                onClick={() => handleConfirmDelete(order.id)}
                className="mt-2"
              >
                OK
              </Button>
            ) : (
              <Button
                color="warning"
                onClick={() => handleCancelOrder(order.id)}
                className="mt-2"
              >
                Batalkan Pesanan
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOrder;


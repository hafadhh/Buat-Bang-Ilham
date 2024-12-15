import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import HistoryDetailModal from './modal/HistoryDetailModal';
import CancelOrderModal from './modal/CancelOrderModal';
import axios from 'axios';

const MainProfile = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [serviceHistory, setServiceHistory] = useState([]);
  const [orderToCancel, setOrderToCancel] = useState(null);

  // State for profile details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfile = async () => {
    const response = await axios.get("http://localhost:2000/profile/1"); // Ambil data profil
    const profile = response.data;
    setName(profile.name);
    setEmail(profile.email);
    setPhoneNumber(profile.phoneNumber);
    setAddress(profile.address);
  };

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:2000/orders");
    const activeOrders = response.data.filter(order => order.status !== "User  membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan");
    const canceledOrders = response.data.filter(order => order.status === "User  membatalkan pesanan" || order.status === "Petugas membatalkan pesanan");
    setServiceRequests(activeOrders);
    setServiceHistory(canceledOrders);
  };

  const cancelOrder = async (id) => {
    await axios.patch(`http://localhost:2000/orders/${id}`, { status: "User  membatalkan pesanan" });
    fetchOrders();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    const updatedProfile = {
      name,
      email,
      phoneNumber,
      address
    };

    await axios.put("http://localhost:2000/profile/1", updatedProfile); // Update profile on server
    setIsEditing(false);
  };

  useEffect(() => {
    fetchProfile(); // Ambil data profil saat komponen dimuat
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 px-20 bg-gray-50 min-h-screen bg-gradient-to-br from-[#6fa6c3] from-5% via-[#FFFFFF] via-20% to-[#6fa6c3] to-95%">
      <section className="mb-8">
        <Card className='bg-gray-100/70 rounded-md p-2'>
          <CardHeader>
            <h2 className="text-2xl font-bold mb-4">Profile Detail</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col md:flex-row items-center bg-white p-4 shadow rounded-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-6" // Menambahkan margin bawah untuk tampilan mobile
              />
              <div className="flex-1"> {/* Menambahkan flex-1 agar teks mengambil sisa ruang */}
                {isEditing ? (
                  <>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md p-1 mb-2" placeholder="Name" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-md p-1 mb-2" placeholder="Email" />
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border rounded-md p-1 mb-2" placeholder="No Telp" />
                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded-md p-1 mb-2" placeholder="Alamat" />
                    <Button onClick={handleSave} color="success" className="mt-2">Simpan</Button>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-sm text-gray-600">{email}</p>
                    <p className="text-sm text-gray-600">{phoneNumber}</p>
                    <p className="text-sm text-gray-600">{address}</p>
                    <Button onClick={handleEdit} color="primary" className="mt-2">Edit</Button>
                  </>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    
      <section className="mb-8">
        <Card className='bg-gray-100/70 rounded-md p-2'>
          <CardHeader>
            <h2 className="text-2xl font-bold mb-4">Order List</h2>
          </CardHeader>
          <CardBody>

          {/* // LIST ORDER */}
          {serviceRequests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceRequests.map((request) => (
                <div key={request.id} className="bg-white p-4 shadow rounded-md flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <p><strong>Service :</strong> {request.title}</p>
                    <div>
                      <strong>Date :</strong>
                      <p className="text-gray-600"> {new Date(request.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <strong>Price :</strong>
                      <p className="text-gray-600"> {request.price}</p>
                    </div>
                    <div>
                      <strong>Location :</strong>
                      <p className="text-gray-600"> {request.address}</p>
                    </div>
                    <div>
                      <strong>Job Description :</strong>
                      <p className="text-gray-600"> {request.jobDetail}</p>
                    </div>
                    <div>
                      <strong>Status :</strong>
                      <p className="text-gray-600"> {request.status}</p> {/* Menambahkan status */}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button 
                      className="rounded-md bg-red-400 hover:bg-red-500 font-semibold text-white"
                      onPress={() => {
                        setOrderToCancel(request.id);
                        setIsCancelModalOpen(true);
                      }}
                    >Cancel Order</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No service requests at the moment.</p>
          )}

          </CardBody>
        </Card>
      </section>


          <section>
      <Card className='bg-gray-100/70 rounded-md p-2'>
      <CardHeader>
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
      </CardHeader>
      <CardBody>

      {/* // HISTORY ORDER */}
      {serviceHistory.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {serviceHistory.map((history) => (
          <div key={history.id} className="bg-white p-4 shadow rounded-md flex flex-col gap-4">
            <div>
              <p className="mb-1"><strong>Service:</strong> {history.title}</p>
              <p className="text-gray-600"><strong>Cancelled on:</strong> {new Date(history.date).toLocaleDateString()}</p>
              <p className="text-gray-600"><strong>Status:</strong> {history.status}</p> {/* Menambahkan status */}
            </div>
            
            <div className="flex justify-center">
              <Button 
                onPress={() => {setIsDetailModalOpen(true)}}
                className="rounded -md bg-[#003366] font-semibold text-white" 
              >
                See Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No ordered history available.</p>
    )}

  </CardBody>
</Card>
</section>

<HistoryDetailModal 
isDetailModalOpen={isDetailModalOpen}
setIsDetailModalOpen={setIsDetailModalOpen}
/>

<CancelOrderModal 
isCancelModalOpen={isCancelModalOpen}
setIsCancelModalOpen={setIsCancelModalOpen}
onConfirm={() => {
  if (orderToCancel) {
    cancelOrder(orderToCancel);
    setOrderToCancel(null);
  }
}}
/>

    </div>
  );
};

export default MainProfile;




// =================================================================


// import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
// import React, { useState, useEffect } from 'react';
// import HistoryDetailModal from './modal/HistoryDetailModal';
// import CancelOrderModal from './modal/CancelOrderModal';
// import axios from 'axios';

// const MainProfile = () => {
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
//   const [serviceRequests, setServiceRequests] = useState([]);
//   const [serviceHistory, setServiceHistory] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const response = await axios.get("http://localhost:2000/orders");
//       const activeOrders = response.data.filter(order => order.status !== "User  membatalkan pesanan" && order.status !== "Petugas membatalkan pesanan");
//       const canceledOrders = response.data.filter(order => order.status === "User  membatalkan pesanan" || order.status === "Petugas membatalkan pesanan");
//       setServiceRequests(activeOrders);
//       setServiceHistory(canceledOrders);
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6 px-20 bg-gray-50 min-h-screen bg-gradient-to-br from-[#6fa6c3] from-5% via-[#FFFFFF] via-20% to-[#6fa6c3] to-95%">
//       {/* About Section */}
//       <section className="mb-8">
//         <Card className='bg-gray-100/70 rounded-md p-2'>
//           <CardHeader>
//             <h2 className="text-2xl font-bold mb-4">Profile Detail</h2>
//           </CardHeader>
//           <CardBody>
//             <div className="flex items-center bg-white p-4 shadow rounded-md ">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="John Doe"
//                 className="w-36 h-36 rounded-full mr-6"
//               />
//               <div>
//                 <p className="mb-2"><strong>Name:</strong> John Doe</p>
//                 <p className="mb-2"><strong>Email:</strong> johndoe@example.com</p>
//                 <p className="mb-2"><strong>Phone Number:</strong> 123-456-7890</p>
//                 <p className="mb-2"><strong>Address:</strong> Jl. Ahmad dahlan, Perumahan Ancar, Kelurahan Senen, Kecamatan Kranggan, Kota Tangerang.</p>
//               </div>
//             </div>
//           </CardBody>
//         </Card>
//       </section>

//       {/* Order List Section */}
//       <section className="mb-8">
//         <Card className='bg-gray-100/70 rounded-md p-2'>
//           <CardHeader>
//             <h2 className="text-2xl font-bold mb-4">Order List</h2>
//           </CardHeader>
//           <CardBody>
//             {serviceRequests.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {serviceRequests.map((request) => (
//                   <div key={request.id} className="bg-white p-4 shadow rounded-md flex flex-col justify-between">
//                     <div className="flex flex-col gap-2">
//                       <p><strong>Service :</strong> {request.title}</p>
//                       <div>
//                         <strong>Date :</strong>
//                         <p className="text-gray-600"> {new Date(request.date).toLocaleDateString()}</p>
//                       </div>
//                       <div>
//                         <strong>Price :</strong>
//                         <p className="text-gray-600"> {request.price}</p>
//                       </div>
//                       <div>
//                         <strong>Location :</strong>
//                         <p className="text-gray-600"> {request.address}</p>
//                       </div>
//                       <div>
//                         <strong>Job Description :</strong>
//                         <p className="text-gray-600"> {request.jobDetail}</p>
//                       </div>
//                     </div>

//                     <div className="mt-6 flex justify-end">
//                       <Button 
//                         className="rounded-md bg-red-400 hover:bg-red-500 font-semibold text-white"
//                         onPress={() => {setIsCancelModalOpen(true)}}
//                       >Cancel Order</Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-500">No service requests at the moment.</p>
//             )}
//           </CardBody>
//         </Card>
//       </section>

//       {/* Service History Section */}
//       <section>
//         <Card className='bg-gray-100/70 rounded-md p-2'>
//           <CardHeader>
//             <h2 className="text-2xl font-bold mb-4">Order History</h2>
//           </CardHeader>
//           <CardBody>
//             {serviceHistory.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {serviceHistory.map((history) => (
//                   <div key={history.id} className="bg-white p-4 shadow rounded-md flex flex-col gap-4">
//                     <div>
//                       <p className="mb-1"><strong>Service:</strong> {history.title}</p>
//                       <p className="text-gray-600"><strong>Cancelled on:</strong> {new Date(history.date).toLocaleDateString()}</p>
//                     </div>
                    
//                     <div className="flex justify-center">
//                       <Button 
//                         onPress={() => {setIsDetailModalOpen(true)}}
//                         className="rounded-md bg-[#003366] font-semibold text-white" 
//                       >
//                         See Detail
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-500">No ordered history available.</p>
//             )}
//           </CardBody>
//         </Card>
//       </section>

//       <HistoryDetailModal 
//         isDetailModalOpen={isDetailModalOpen}
//         setIsDetailModalOpen={setIsDetailModalOpen}
//       />

//       <CancelOrderModal 
//         isCancelModalOpen={isCancelModalOpen}
//         setIsCancelModalOpen={setIsCancelModalOpen}
//       />
//     </div>
//   );
// };

// export default MainProfile;

// INI BOLEH BOLEHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
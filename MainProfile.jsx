import { Button, Card, CardBody, CardHeader, Table } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../store/slices/userSlice";
import { createCustomer, fetchCustomers, updateCustomer } from "../../store/slices/customerSlice";
import defaultPhoto from "../../assets/images/defaultphoto.jpg";
import CancelOrderModal from './modal/CancelOrderModal';
import { fetchTransactionByDocumentId } from "../../store/slices/transactionSlice";

const MainProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [orderToCancel, setOrderToCancel] = useState(null);

  const dispatch = useDispatch();

  // Redux states
  const { user, loading: userLoading, error: userError } = 
  useSelector(
    (state) => state.user
  );
  const { customers, loading: customerLoading, error: customerError } =
    useSelector((state) => state.customer);

  const { transactions } = useSelector((state) => state.transaction);

  const userId = localStorage.getItem("id");
  const documentId = localStorage.getItem("documentId");
  console.log(`docId skrng ${documentId}`)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
      dispatch(fetchCustomers());
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (documentId) {
      dispatch(fetchTransactionByDocumentId(documentId))
      console.log(`ini fetch TRANSDOC ${transactions}`)
    }
  }, [dispatch, documentId]);
  
  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setEmail(user.email || "");
    }
    if (customers.length > 0) {
      const customer = customers.find((customer) => customer.user?.id === user.id);
      if (customer) {
        setContact(customer.contact || "");
        setAddress(customer.address || "");
      } else {
        // Jika customer tidak ditemukan, set contact dan address ke string kosong
        setContact("");
        setAddress("");
      }
      console.log("Customers:", customers);
      console.log("Current Customer:", customer);
    }

  }, [user, customers]);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = async () => {
    const customerData = {
      data: {
        name: user.username, 
        contact: contact,
        address: address,
        user: user.documentId 
      }
    };
  
    const customer = customers.find((cust) => cust.user?.id === user.id);
    console.log("Current Customer:", customer); // Debugging
    console.log("Customer Data to Send:", customerData); // Debugging
  
    try {
      if (customer) {
        console.log("Updating customer with documentId:", customer.documentId); // Debugging
        await dispatch(updateCustomer({ documentId: customer.documentId, customerData }));
      } else {
        await dispatch(createCustomer({ ...customerData, userId: user.id }));
      }
    } catch (error) {
      console.error("Error updating customer:", error.response?.data); // Menangkap dan mencetak error
    }
  
    setIsEditing(false);
  };

  const activeTransactions = transactions.filter(transaction => 
    transaction.transaction_status !== "Cancelled"
  );
  
  console.log("Active Transactions:", activeTransactions);
  return (
    <div className="p-6 px-12 sm:pl-64 bg-gray-50 min-h-screen bg-gradient-to-br from-[#6fa6c3] from-5% via-[#FFFFFF] via-20% to-[#6fa6c3] to-95%">

      <section className="mb-8">
      <Card className='bg-gray-100/70 rounded-md p-2'>
        <CardHeader>
          <h2 className="text-2xl font-bold mb-4">Detail Profil</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col md:flex-row items-center bg-white p-4 shadow rounded-md">
            <img
              src={defaultPhoto}
              alt="Profile"
              className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              {isEditing ? (
                <>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border rounded-md p-1 mb-2 w-full"
                    placeholder="Username"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-md p-1 mb-2 w-full"
                    placeholder="Email"
                  />
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="border rounded-md p-1 mb-2 w-full"
                    placeholder="No Telp"
                  />
                  <input value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border rounded-md p-1 mb-2 w-full"
                    placeholder="Alamat"
                  />
                  <Button color="success" onClick={handleSave}>
                    Simpan
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold">{username}</p>
                  <p className="text-sm text-gray-600">{email}</p>
                  <p className="text-sm text-gray-600">{contact}</p>
                  <p className="text-sm text-gray-600">{address}</p>
                  <Button color="primary" onClick={handleEdit}>
                    Edit
                  </Button>
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
            <h2 className="text-2xl font-bold mb-4">Daftar Pesanan</h2>
          </CardHeader>
          <CardBody>
            {activeTransactions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTransactions.map((request) => (
                  <div key={request.id} className="bg-white p-4 shadow rounded-md flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p><strong>Jasa :</strong> {request.service.service_name}</p>
                      <div>
                        <strong>Tanggal Pemesanan :</strong>
                        <p className="text-gray-600"> {new Date(request.order_date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <strong>Harga :</strong>
                        <p className="text-gray-600"> Rp. {new Intl.NumberFormat('id-ID').format(request.service.price)}</p>
                      </div>
                      <div>
                        <strong>Alamat :</strong>
                        <p className="text-gray-600"> {request.customer[0]?.address}</p>
                      </div>
                      <div>
                        <strong>Deskripsi Pekerjaan :</strong>
                        <p className="text-gray-600"> {request.service.service_description[0]?.children[0]?.text}</p>
                      </div>
                      <div>
                        <strong>Status :</strong>
                        <p className="text-gray-600"> {request.transaction_status}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button 
                        className="rounded-md bg-red-400 hover:bg-red-500 font-semibold text-white"
                        onPress={() => {
                          setOrderToCancel(request.id);
                          setIsCancelModalOpen(true);
                        }}
                      >Batalkan Pesanan</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Tidak ada pesanan layanan.</p>
            )}
          </CardBody>
        </Card>
      </section>
      

      <CancelOrderModal 
        isCancelModalOpen={isCancelModalOpen}
        setIsCancelModalOpen={setIsCancelModalOpen}
        orderToCancel={orderToCancel}
        setOrderToCancel={setOrderToCancel}
      />
    </div>
  );
};

export default MainProfile;

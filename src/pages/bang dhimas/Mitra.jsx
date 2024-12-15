import NavbarComponent from '../component/navbar';
import { useState } from 'react';

const Mitra = () => {
 
  const [dataList, setDataList] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer' },
    { id: 3, name: 'Jack Black', email: 'jack@example.com', role: 'Service Provider' },
  ]);

  const editData = (item, index) => {
    alert(`Edit data for: ${item.name}`);

  };

  const deleteData = (index) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6">Selamat datang di dashboard admin!</p>
        <div className="flex justify-center mt-8">
          <table className="table-auto border-collapse border border-gray-300 text-left w-3/4 bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 text-gray-700 font-bold">Name</th>
                <th className="border border-gray-300 px-6 py-3 text-gray-700 font-bold">Email</th>
                <th className="border border-gray-300 px-6 py-3 text-gray-700 font-bold">Role</th>
                <th className="border border-gray-300 px-6 py-3 text-gray-700 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(dataList) && dataList.length > 0 ? (
                dataList.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border border-gray-300 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200`}
                  >
                    <td className="border border-gray-300 px-6 py-3">{item.name}</td>
                    <td className="border border-gray-300 px-6 py-3">{item.email}</td>
                    <td className="border border-gray-300 px-6 py-3">{item.role}</td>
                    <td className="border border-gray-300 px-6 py-3">
                      <button
                        onClick={() => editData(item, index)}
                        className="text-blue-600 hover:text-blue-800 hover:underline mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteData(index)}
                        className="text-red-600 hover:text-red-800 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center border border-gray-300 px-6 py-3">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Mitra;

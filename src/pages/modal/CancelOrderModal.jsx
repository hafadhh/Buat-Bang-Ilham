// import React from 'react'
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
// } from "@nextui-org/react";

// const CancelOrderModal = ({isCancelModalOpen, setIsCancelModalOpen}) => {

//   return (
//     <Modal 
//       isOpen={isCancelModalOpen} 
//       onOpenChange={setIsCancelModalOpen}
//       backdrop="opaque"
//       classNames={{
//         body: "py-6 ",
//         backdrop: "bg-[#6d80c7]/50 backdrop-opacity-40",
//         base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-white text-lg rounded-md",
//         header: "border-b-[1px] border-[#292f46]",
//         footer: "border-t-[1px] border-[#292f46]",
//         closeButton: "hover:bg-white/5 active:bg-white/10 p-4",
//       }}
      
//     >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1 text-red-500 text-xl">Cancel Order</ModalHeader>
//               <ModalBody>
//                 <p>
//                   Are you sure want to cancel this order?
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button className='bg-gray-600 rounded-md text-white' variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button className='bg-red-500 rounded-md text-white' onPress={onClose}>
//                   Yes
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//   )
// }

// export default CancelOrderModal


// =================================================================


import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const CancelOrderModal = ({ isCancelModalOpen, setIsCancelModalOpen, onConfirm }) => {
  return (
    <Modal 
      isOpen={isCancelModalOpen} 
      onOpenChange={setIsCancelModalOpen}
      backdrop="opaque"
      classNames={{
        body: "py-6 ",
        backdrop: "bg-[#6d80c7]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-white text-lg rounded-md",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10 p-4",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-red-500 text-xl">Cancel Order</ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to cancel this order?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button className='bg-gray-600 rounded-md text-white' variant="light" onPress={onClose}>
                Close
              </Button>
              <Button className='bg-red-500 rounded-md text-white' onPress={() => { onConfirm(); onClose(); }}>
                Yes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CancelOrderModal;
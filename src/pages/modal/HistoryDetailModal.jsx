import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";
import React from 'react'

const HistoryDetailModal = ({isDetailModalOpen, setIsDetailModalOpen}) => {
  const detailService =  { 
      id: 1, 
      service: "Fix leaky faucet",
      date : "20 December 2024",
      salary : 50_000,
      location : "Jl. Kakak Tua III, Perumahan Agung Sedayu, Kelurahan Arman, Kecamatan Pondok Jaya, Kota Tangerang",
      jobDescription : "My Faucet broke because my brother slap it, the water keep pouring and make my room flooded"
      
    };
    
  
  return (
    <Modal backdrop="blur" className="bg-white border border-[#003366] rounded-md" isOpen={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-2xl">Service Detail</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <div>
                    <strong>Service :</strong>
                    <p>{detailService.service}</p>
                  </div>
                  <div>
                    <strong>Date :</strong>
                    <p>{detailService.date}</p>
                  </div>
                  <div>
                    <strong>Price :</strong>
                    <p>Rp. {new Intl.NumberFormat('id-ID').format(detailService.salary)}</p>
                  </div>
                  <div>
                    <strong>Location :</strong>
                    <p>{detailService.location}</p>
                  </div>
                  <div>
                    <strong>Job Description :</strong>
                    <p>{detailService.jobDescription}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-[#003366] rounded-md font-semibold text-white" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  )
}

export default HistoryDetailModal
import CardP from "@/components/assets/cardP";
import Modal from "./modal";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
 }

export default function ListP({isOpen, onClose}:ModalProps) {

   const arr = [1, 2, 3, 4, 5, 6];
   return (
      <>
         <div className="grid grid-cols-2 gap-12">
            {arr.map((item) => (
               <CardP key={item} modalOpen={onClose}/>
            ))}
         </div>
      </>
   )
}
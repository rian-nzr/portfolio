import TitlePage from "@/components/assets/titlepage";
import ListP from "./listP";
import Modal from "./modal";
import { useState } from "react";

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const buttonAnimation = () => {
    setIsAnimating(true);
    !modalOpen === false && setModalOpen(false);
    setTimeout(() => {
      !modalOpen === true && setModalOpen(true);
      setIsAnimating(false);
    }, !modalOpen ? 400 : 0);
  } 

  return (
    <>
      <TitlePage title="Portfolio" cari={false} desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ad iure, quis mollitia repellendus laudantium?" />
      <ListP isOpen={modalOpen} onClose={buttonAnimation} />
      <Modal isOpen={modalOpen} onClose={buttonAnimation} isAnimating={isAnimating} />
    </>
  )
}
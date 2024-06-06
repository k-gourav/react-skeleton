import LeftAsideContent from "./LeftAsideContent";
import Main from "./Main";
import { useState } from "react";
import Modal from "./Modal";

  const LeftAside = ({ asideText }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const openPop = () => {
    setModalOpen(true)
  }
  
  return (
    <div className="left-aside">
      <LeftAsideContent asideText={asideText} />
      <LeftAsideContent />
      <div className="left-aside-content">
        <button className="aside-btn" onClick={openPop}>Btn</button>
        {modalOpen && <Modal closeModal={setModalOpen} bgColor="pink"/>}
        <p className="left-aside-text">Aside</p>
      </div>
    </div>

  );
};
export default LeftAside;

import LeftAsideContent from "./LeftAsideContent";
import Main from "./Main";
import { useState } from "react";
import Modal from "./Modal";

  const LeftAside = ({ asideText, rightAsideText, centerAsideText }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const openPop = () => {
    setModalOpen(true)
  }
  
  return (
    <div className="left-aside">
      <LeftAsideContent asideText={asideText} />
      <LeftAsideContent asideCenterText={centerAsideText} />
      <div className="left-aside-content">
        <button className="aside-btn" onClick={openPop}>Btn</button>
        <p className="left-aside-text">{rightAsideText ? rightAsideText : "ASIDE"}</p>
      </div>
      {modalOpen && <Modal closeModal={setModalOpen} bgColor="pink"/>}
    </div>

  );
};

export default LeftAside;

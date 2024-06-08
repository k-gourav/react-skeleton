import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal.jsx";
import '../style.css';

const Main = ( {handleRightText, handleCenterText, clickPost} ) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openPop = () => {
    setModalOpen(true)
  }
  const addMainText = (e) => {
    handleRightText(e.target.value)
  }
  const centerText = (e) => {
    handleCenterText(e.target.value)
  }

  return (
    <div className="main-container">
      <div className="post-container">
        <input
          className="post"
          type="text"
          placeholder="Input"
          name="post"
          id="post"
          onChange={centerText}
        />
        <button className="post-btn" onClick={openPop}>Btn</button>
      </div>
      {modalOpen && <Modal closeModal={setModalOpen} bgColor="rgb(158, 233, 158)" />}

      <div className="feed-container">
        <div className="img">
          <p className="img-text">Img</p>
        </div>
        <div className="btn-list">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <input
          className="post action"
          type="text"
          placeholder="Input"
          name="post"
          onChange={addMainText}
        />
      </div>
    </div>
  );
};

export default Main;

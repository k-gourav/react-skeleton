import { useState } from "react";
import Button from "./Button";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  

  return (
    <div className="main-container">
      <div className="post-container">
        <input
          className="post"
          type="text"
          placeholder="Input"
          name="post"
          id="post"
        />
        <button className="post-btn" onClick={() => setModalOpen(true)}>Btn</button>
      </div>

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
        />
      </div>
    </div>
  );
};

export default Main;

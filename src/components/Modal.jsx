import "../style.css";

const Modal = ({ closeModal, bgColor }) => {
    const style = {
        backgroundColor: bgColor,
    }

    return (
        <div className="modal-background">
        <div className="modal-container" style={style}>
            <h2 className="head-modal">TITLE</h2>
            <p className="message">ADD SOME MESSAGE</p>
            <div className="action-btn">
            <button className="post-btn close-btn" onClick= {() => closeModal(false)}>CLOSE</button>
            <button className="post-btn close-btn">OK</button>
            </div>
        </div>
        </div>
    )
}

export default Modal;
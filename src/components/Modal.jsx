import "../style.css";

const Modal = ({ closeModal, bgColor }) => {
    const style = {
        backgroundColor: bgColor,
    }
    
    return (
        <div className="modal-background">
        <div className="modal-container" style={style}>
            <h2 className="head-modal">Title</h2>
            <p className="message">Add some message</p>
            <div className="action-btn">
            <button className="post-btn close-btn" onClick= {() => closeModal(false)}>Close</button>
            <button className="post-btn close-btn">Ok</button>
            </div>
        </div>
        </div>
    )
}

export default Modal;
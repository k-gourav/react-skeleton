import LeftAsideContent from "./LeftAsideContent";
import Main from "./Main";

const LeftAside = () => {
  return (
    <div className="left-aside">
      <LeftAsideContent />
      <LeftAsideContent />
      <div className="left-aside-content">
        <button className="aside-btn" onClick={() => setModalOpen(false)}>Btn</button>
        <p className="left-aside-text">Aside</p>
      </div>
    </div>
  );
};
export default LeftAside;

const RightAside = ({ rightAsideText }) => {
  return (
    <div className="right-aside">
      <div className="right-aside-content">
        <p className="right-aside-text">{rightAsideText ? rightAsideText : "ASIDE"}</p>
      </div>
    </div>
  )
};

export default RightAside;

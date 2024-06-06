import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Main from "./Main";

const Body = () => {
  return (
    <main>
      <div className="body-element">
        <LeftAside />
        <Main />
        <RightAside />
      </div>
    </main>
  );
};

export default Body;

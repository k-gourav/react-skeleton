import LeftAside from "./LeftAside";
import LeftAsideContent from "./LeftAsideContent";
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

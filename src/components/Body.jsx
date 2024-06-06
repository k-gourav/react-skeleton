import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Main from "./Main";
import Header from "./Header";
import About from './About'

const Body = ( {asideText} ) => {
  return (
    <main>
      <div className="body-element">
        <LeftAside asideText={asideText} />
        <Main />
        <RightAside />
      </div>
    </main>
  );
};

export default Body;

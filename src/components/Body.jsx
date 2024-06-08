import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Main from "./Main";
import Header from "./Header";
import About from './About'
import { useState } from "react";

const Body = ( {asideText} ) => {
  const [bottomLeftRightAsideText, setBottomLeftRightAsideText] = useState('')
  const [centerLeftText, setCenterLeftText] = useState('')

  return (
    <main>
      <div className="body-element">
        <LeftAside asideText={asideText} rightAsideText={bottomLeftRightAsideText} centerText={centerLeftText} />
        <Main handleRightText={setBottomLeftRightAsideText} handleCenterText={setCenterLeftText} />
        <RightAside rightAsideText={bottomLeftRightAsideText} />
      </div>
    </main>
  );
};

export default Body;

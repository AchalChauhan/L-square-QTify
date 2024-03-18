/* eslint-disable react/prop-types */
import './Greenbtn.styles.css'

const GreenBtn = ({ handelFeedBackClick, btnText }) => {
  return (
    <>
      <button className="Green-Btn" onClick={handelFeedBackClick}>
        {btnText}
      </button>
    </>
  );
};

export default GreenBtn;

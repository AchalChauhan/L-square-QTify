import  { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import LeftArrow from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true); 

  useEffect(() => {
    setIsBeginning(swiper.isBeginning); 

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning); 
    };

    swiper.on("slideChange", handleSlideChange); 

    return () => {
      swiper.off("slideChange", handleSlideChange); 
    };
  }, [swiper]); 

  const handleSlidePrev = () => {
    swiper.slidePrev(); 
  };

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <button onClick={handleSlidePrev}>
          <img src={LeftArrow} alt="leftArrow" />
        </button>
      )}
    </div>
  );
};

export default CarouselLeftNavigation;

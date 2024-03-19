import headphones from "../../assets/headphones.png";
import './hero.style.css'
const Hero = () => {
//   let text =
//     `100 Thousand Songs, ad-free
//      Over thousands podcast episodes`;
  return (
    <>
      <div className="hero">
        <div className="text-component">100 Thousand Songs, ad-free<br/>
     Over thousands podcast episodes</div>
        <div className="img">
          <img src={headphones} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default Hero;

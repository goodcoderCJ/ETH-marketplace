//Hero Section

//importing circles component
// import Circles from "../components/Circles";

//importing Ethereum images
import img1 from "../assets/Image (12).png";
import img2 from "../assets/Image (13).png";
import img3 from "../assets/Image (14).png";
import img4 from "../assets/Image (15).png";
import img5 from "../assets/Image (16).png";
import img6 from "../assets/Image (17).png";


//hero image background
import heroImage from "../assets/circle-in-circle.png";
//import search icon
import { FaSearch } from "react-icons/fa";

//Defining grid content arrays
type FirstGrid = {
  image: string;
  text: string;
};

const firstgrid: FirstGrid[] = [
  { image: `${img1}`, text: "2.55 ETH" },
  { image: `${img2}`, text: "2.55 ETH" },
  { image: `${img3}`, text: "2.55 ETH" },
  { image: `${img4}`, text: "2.55 ETH" },
  { image: `${img5}`, text: "2.55 ETH" },
  { image: `${img6}`, text: "2.55 ETH" },
];

//importing icons for heroSection
import icon1 from "../assets/Vector.svg";
import icon2 from "../assets/Vector (1).svg";
import icon3 from "../assets/Vector (2).svg";
import icon4 from "../assets/Vector (3).svg";

//import halCircles 
import halfCircle1 from "../assets/Vector (4).png";
import halfCircle2 from "../assets/Vector (5).png";
import halfCircle3 from "../assets/Vector (6).png";

//defining variable for icons array
type Icons ={
    image: string;
}

const icon :Icons[] =[
    {image: `${icon1}`},
    {image: `${icon2}`},
    {image: `${icon3}`},
    {image: `${icon4}`}
]

// HeroSection functional Component
const HeroSection = () => {
  return (
    <>
     
    <section className="hero-section mt-[0.5rem] relative pt-[3rem] pb-[2rem] ">
      
      {/* background image */}
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover hidden md:flex absolute mix-blend-overlay opacity-5"
      />

      <div className="hero-section-content py-[3rem] relative ">
        <div className="hero-section-grid grid grid-cols-[25%_50%_25%] grid-rows-[9%_9%_9%_9%_9%_9%_9%_9%_9%_9%_9%] py-[2rem]">
          {/* first col */}
          <div className="first-grid-layout col-start-1 col-end-2 row-start-3 row-end-11 grid grid-cols-[25%_25%_25%_25%] grid-rows-[18%_46%_18%_18%] opacity-30">
            <div className="first-col-1 flex flex-col items-center gap-1 col-start-2 col-end-3 row-start-1 row-end-2">
              <img
                src={firstgrid[0].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[0].text}
              </p>
            </div>

            <div className="first-col-2 flex flex-col items-center gap-1 col-start-4 col-end-5 row-start-3 row-end-4">
              <img
                src={firstgrid[1].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[1].text}
              </p>
            </div>

            <div className="first-col-3 flex flex-col items-center gap-1 col-start-1 col-end-2 row-start-4 row-end-5">
              <img
                src={firstgrid[2].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[2].text}
              </p>
            </div>
          </div>
          {/* second col */}
          <div className="second-grid-layout col-start-2 col-end-3 row-start-1 row-end-12 flex flex-col ">
            <div className="first-title-text flex items-center justify-center ">
              <p className="text-gray-500 text-[0.6rem]">NON FUNGIBLE TOKENS</p>
            </div>
            <div className="second-title-text flex flex-col items-center justify-center mt-[1rem]">
                <h1 className="text-6xl text-gray-200 font-bold flex gap-2">A new NFT <img src={halfCircle1} alt="green half circle" className="w-[15px] h-[25px]"/></h1>
                <h1 className="text-6xl text-gray-200 font-bold flex gap-2 ml-[0.7rem]">
                    <span className="flex flex-col rotate-[16deg]">
                   <img src={halfCircle3} alt="pink half circle" className="w-[15px] h-[15px] -rotate-12" />
                   <img src={halfCircle2} alt="blue half circle" className="w-[15px] h-[15px] -rotate-3"/>
                  </span>
                  Experience
                </h1>
            </div>
            <div className="third-title-text flex items-center justify-center mt-[1rem] mb-[2rem]">
              <p className="text-gray-500 text-[0.85rem]">Discover, collect and sell</p>
            </div>
            <div className="search-container flex justify-between items-center bg-white rounded-[10px] w-[50%] m-auto py-[0.8rem] px-[0.4rem]">
                <input type="search" name="" id="" placeholder="items, collections and creators" className="text-[0.8rem] text-gray-500 border-none outline-none" />
                <select name="search" id="search" className="text-[0.8rem] text-gray-500 border-none outline-none">
                    <option value="| Category">| Category</option>
                    <option value="ETH">ETH</option>
                    <option value="Bitcoin">Bitcoin</option>
                </select>
                <FaSearch className="text-gray-500 rotate-90 text-[0.85rem]"/>
            </div>
            <div className="icons mt-[2rem]  flex gap-16 items-center justify-center " >
             <img src={icon[0].image} alt="brand-logo" className="w-[27px]"/>
             <img src={icon[1].image} alt="brand-logo" className="w-[29px]"/>
             <img src={icon[2].image} alt="brand-logo" className="w-[27px]"/>
             <img src={icon[3].image} alt="brand-logo" className="w-[27px]"/>
            </div>
          </div>
          {/* third col  */}
          <div className="third-grid-layout col-start-3 col-end-4 row-start-4 row-end-11 grid grid-cols-[26%_28%_16%_16%_14%] grid-rows-[20%_20%_20%_20%_20%] opacity-30">
          <div className="first-col-1 flex flex-col items-center gap-1 col-start-1 col-end-2 row-start-5 row-end-6">
              <img
                src={firstgrid[3].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[3].text}
              </p>
            </div>
            <div className="first-col-2 flex flex-col items-center gap-1 col-start-3 col-end-4 row-start-1 row-end-2">
              <img
                src={firstgrid[4].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[4].text}
              </p>
            </div>

            <div className="first-col-2 flex flex-col items-center gap-1 col-start-4 col-end-6 row-start-3 row-end-4">
              <img
                src={firstgrid[5].image}
                alt="ethereum image"
                className="w-[35px] h-[35px]"
              />
              <p className="text-[0.6rem] text-gray-500 ">
                {firstgrid[5].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;

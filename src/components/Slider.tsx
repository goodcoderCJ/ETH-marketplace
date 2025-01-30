import { FaRegClock,FaHeart } from "react-icons/fa6";

//data for creating slide

type ImageCard = {
  image: string;
  title: string;
  btnText: string;
  time: string;
  biddingNo: string;
  likes: number;
  profile: string[];
};

//importing card images
import cardImg1 from "../assets/Image (2).png";
import cardImg2 from "../assets/Image (3).png";
import cardImg3 from "../assets/Image (4).png";
import cardImg4 from "../assets/Image (5).png";
import cardImg5 from "../assets/Image (6).png";

//getting profile images
import profile1 from "../assets/avatar10.png";
import profile2 from "../assets/avatar11.png";
import profile3 from "../assets/avatar2.png";
import profile4 from "../assets/avatar9.png";
import profile5 from "../assets/avatar6.png";
import profile6 from "../assets/Four4.png";

const imageCard: ImageCard[] = [
  {
    image: `${cardImg1}`,
    title: "Creating Impact through ETH",
    btnText: "2.55ETH",
    time: "2:41 min left",
    biddingNo: "25 people are bidding",
    likes: 54,
    profile: [
      `${profile1}`,
      `${profile2}`,
      `${profile3} `,
      `${profile4}`,
      `${profile5}`,
      `${profile6}`,
    ],
  },
  {
    image: `${cardImg2}`,
    title: "Creating Impact through ETH",
    btnText: "3.55ETH",
    time: "2:41 min left",
    biddingNo: "35 people are bidding",
    likes: 120,
    profile: [
      `${profile1}`,
      `${profile2}`,
      `${profile3}`,
      `${profile4}`,
      `${profile5}`,
      `${profile6}`,
    ],
  },
  {
    image: `${cardImg3}`,
    title: "Creating Impact through ETH",
    btnText: "6.55ETH",
    time: "2:41 min left",
    biddingNo: "55 people are bidding",
    likes: 110,
    profile: [
      `${profile1}`,
      `${profile2}`,
      `${profile3}`,
      `${profile4}`,
      `${profile5}`,
      `${profile6}`,
    ],
  },
  {
    image: `${cardImg4}`,
    title: "Creating Impact through ETH",
    btnText: "2.55ETH",
    time: "2:41 min left",
    biddingNo: "25 people are bidding",
    likes: 54,
    profile: [
      `${profile1}`,
      `${profile2}`,
      `${profile3}`,
      `${profile4}`,
      `${profile5}`,
      `${profile6}`,
    ],
  },
  {
    image: `${cardImg5}`,
    title: "Creating Impact through ETH",
    btnText: "2.55ETH",
    time: "2:41 min left",
    biddingNo: "25 people are bidding",
    likes: 94,
    profile: [
      `${profile1}`,
      `${profile2}`,
      `${profile3} `,
      `${profile4}`,
      `${profile5}`,
      `${profile6}`,
    ],
  },
];

const Slider = () => {
  return (
    <section className="image-slider-container mt-[1rem] ">
      <div className="slider-title flex items-center justify-center">
        <h2 className="text-gray-300 text-[1.2rem] font-bold mb-[1.5rem]">
          Latest live auctions
        </h2>
      </div>
      <div className="grid-container grid grid-cols-[19%_19%_19%_19%_19%] gap-[1%] py-[4rem]">
        {imageCard.map((card, i) => (
          <div
            key={i}
            className="border-[0.1px] border-gray-600 col-span-1 px-[0.5rem]  py-[1rem] rounded-[10px]"
          >
            <div className="card-content grid grid-cols-[25%_25%_25%_25%] grid-rows-[70%_20%_10%]">
              {/* card-image */}

              <div className="card-image col-start-1 col-end-5 row-start-1 row-end-2  pb-[0.7rem]">
                <img
                  src={card.image}
                  alt="background image"
                  className="rounded-[10px] w-[100%] h-[250px]"
                />
              </div>

              {/* grid-writeup */}
              <div className="grid-writeup flex flex-col gap-2 col-start-1 col-end-5 row-start-2 row-end-3">
                <div className="btn-wrapper  flex items-center justify-between  mt-[0.3rem]">
                  <h3 className="text-gray-300 text-[0.8rem] font-semibold">
                    {card.title}
                  </h3>
                  <button className="bg-[#23228d] text-[0.6rem] text-gray-400 rounded-[5px] py-[0.4rem] px-[0.3rem]">
                    {card.btnText}
                  </button>
                </div>
                <div className="grid-time-wrap">
                  <span className="text-[0.8rem] text-gray-500 flex gap-1 items-center">
                    <FaRegClock />
                    {card.time}
                  </span>
                </div>
              </div>

              {/* grid-profil-pix */}
              <div className="grid-profile col-start-1 col-end-5 row-start-3 row-end-4 mt-[0.5rem] py-[1rem] border-t-[0.3px] border-gray-500">
                <div className="grid-profile-content flex justify-between">
                  <div className="first-col flex gap-2 items-center">
                    <div className="images grid grid-cols-[20%_20%_20%_20%_20%] grid-row-[25%_25%] gap-[0.1rem]">
                      <img
                        src={card.profile[0]}
                        alt=""
                        className="w-5 h-5 rounded-full col-start-1 col-end-3 row-start-1 row-end-3 z-[30] border-[0.2px] border-gray-[800]"
                      />
                      <img
                        src={card.profile[1]}
                        alt=""
                        className="w-5 h-5 rounded-full col-start-2  col-end-4  row-start-1 row-end-3 z-[100] border-[0.2px] border-gray-[800]"
                      />
                      <img
                        src={card.profile[2]}
                        alt=""
                        className="w-5 h-5 rounded-full col-start-3 col-end-5 row-start-1 row-end-3 z-[200] border-[0.2px] border-gray-[800]"
                      />
                      <img
                        src={card.profile[3]}
                        alt=""
                        className="w-5 h-5 rounded-full col-start-4  col-end-6 row-start-1 row-end-3 z-[100] border-[0.2px] border-gray-[800]"
                      />
                    </div>
                    <div className="biddingNo">
                      <p className="text-[0.6rem] text-gray-500">
                        {card.biddingNo}
                      </p>
                    </div>
                  </div>
                  <div className="like-container ">
                    <span className="flex gap-1 items-center"><FaHeart className="text-red-600 text-[0.8rem]"/><p className="text-gray-500 text-[0.7rem]">{card.likes}</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;

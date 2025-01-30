//creating overline section
import imageBucket from "../assets/Image (1).png";
import dividedCircle from "../assets/Image.png"

const OverlineSection = () => {
  return (
    <section className="overline-section">
        <div className="section-container px-[12rem] py-[2rem] flex justify-between">
         <div className="first-row flex flex-col">
            <div className="title">
                <p className="text-gray-500 text-[0.75rem]">OVERLINE</p>
            </div>
            <div className="heading max-w-[400px] mt-[2rem]">
              <h2 className="text-gray-300 text-5xl font-bold">Lorem ipsum dolor sit amet consecteturm inventore!</h2>
            </div>
            <div className="section-writeup max-w-[400px] mt-[1rem]">
                <p className="text-gray-500 text-[0.8rem]">Lorem ipsum dolor sit amet sum dolor sit amet consectetur adipisicing elittur quis natus o?</p>
            </div>
            <div className="btn-container flex gap-2 mt-[2rem]">
            <button className="bg-[#2A27C9] text-gray-100 text-[0.9rem] border-[1px] border-[#2a27C9] px-[0.8rem] py-[0.5rem] rounded-[10px]">Get Started</button>
            <button className=" text-gray-400 text-[0.9rem] border-[1px] border-gray-400 px-[0.8rem] py-[0.5rem] rounded-[10px]">Learn more</button>
            </div>
         </div>
         <div className="second-row grid grid-cols-[43%_10%_4%_43%] grid-rows-[49%_2%_49%]">
            <img src={imageBucket} alt="3D bucket" className="w-[250px] col-start-1 col-end-2 row-start-2 row-end-4 translate-x-56 " />
            <img src={dividedCircle} alt="divided circle" className="w-[250px] col-start-3 col-end-5 row-start-1 row-end-3 " />
         </div>
        </div>
    </section>
  )
}

export default OverlineSection
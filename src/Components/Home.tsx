//import smallCvimg from "../assets/image/smallCvimg.png";
import smallCvimg2 from "../assets/image/Screenshot 2024-11-12 224126.png";
import bigcvimg from "../assets/image/Bigcvimg.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home ">
           <div className="item1 min-w-80 max-w-[700px]">
            <h1 className=" font-ibmmono text-[clamp(25px,4vw,55px)]  font-bold">
            Create a Professional Resume with Ease
           </h1>
           </div>
     
     <div className="item2  ">
      <p className=" ibm-plex-mono-medium-italic ">
            A Resume that gets the Job DONE {''}<span className="text-red-600">100%</span>
          </p></div>

          <section className="item3 ">
          <img className="shadow-2xl xs:w-[20rem] xs:h-[30rem]  " src={bigcvimg} alt="" />
          </section>
          {/* <div></div>
          <div></div> */}
        <div className="item4 pt-5">
          <p className=" font-sans  min-w-72 max-w-[600px]">
            Create polished, professional resumes in just a few clicks!  Our
            powerful resume builder offers intuitive features and customizable
            templates tailored to your needs. Stand out from the competition, 
            impress recruiters, and land your dream job faster. Build your
            resume today—because first impressions matter!
          </p></div>
            
          {/* <div></div>
          <div></div> */} 
          <div className="item5 flex justify-evenly pt-10">
            <div className=""> <Link to="/create">
            {" "}
            <button className=" hover:shadow-cyan-300 transition-shadow h-[6vw] w-[13vw] text-[2vw] 
            rounded-lg  shadow-lg shadow-black ibm-plex-mono-regular-italic hover:scale-105 text-red-700 font-bold bg-black xs:h-[3rem] xs:w-[5rem] ">
              Create
            </button>
          </Link>
          </div>
         <div className=""><Link to="/templates">
            <img
              className="cv w-[15vw] h-[20vw] xs:w-[6rem] xs:h-[10rem] xs;  shadow-2xl  shadow-zinc-500 rounded-md hover:shadow-sky-300 transition-shadow  hover:scale-105 "
              src={smallCvimg2}
              alt=""
            />{" "}
          </Link></div></div>

          
          
        
      
     
  
    </div>
  )
}

export default Home;

import smallCvimg from '../assets/image/smallCvimg.png'
import smallCvimg2 from '../assets/image/Screenshot 2024-11-12 224126.png'
import bigcvimg from "../assets/image/Bigcvimg.png";
import './Home.css'
function Home() {
  return (
    
    <div className=" pt-20  px-12 flex ">
        <section className="flex flex-col gap-10 flex-1">
            <div>
                <h1  className=" font-ibmmono text-4xl font-bold">Create a Professional 
                 Resume with <span className="text-red-600">Rezume-TooL</span></h1>
                <p className=" ibm-plex-mono-medium-italic ">A Resume that gets the Job DONE <span className="text-red-600">100%</span></p>
               <br /> <p className=" font-sans text-lg w-5/6">Create polished, professional resumes in just a few clicks! Our powerful resume builder offers intuitive features and customizable templates tailored to your needs.
                   Stand out from the competition, impress recruiters, and land your dream job faster. Build your resume today—because first impressions matter!</p>
            </div>
            <div className="flex justify-evenly"><button className=" h-16 w-36  rounded-lg bg-sky-500 shadow-lg shadow-black ibm-plex-mono-regular-italic  ">Create CV</button>
              <img className=' h-64 w-44 shadow-2xl  shadow-zinc-500 rounded-md hover:shadow-sky-300   ' src={smallCvimg} alt="" /> 
             {/* <img className ='cv  shadow-md 'src={smallCvimg2} alt="" />  */}
            </div>
            
        </section>
        <section className='flex-1 justify-items-center'>
          <div className='   rounded-full border-2 border-black w-full justify-items-center'>
          <div className='   rounded-full border-2 border-black  w-10/12 h-4/6 justify-items-center  '>
          <img  className =' shadow-2xl   'src={bigcvimg} alt="" />
          </div>
          </div>
        </section>


    </div>
  )
}

export default Home
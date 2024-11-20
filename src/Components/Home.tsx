import smallCvimg from '../assets/image/smallCvimg.png'
import smallCvimg2 from '../assets/image/Screenshot 2024-11-12 224126.png'
import bigcvimg from "../assets/image/Bigcvimg.png";
import './Home.css'
function Home() {
  return (
    <div className=" pt-20  px-12 flex ">
        <section className="flex flex-col gap-10 flex-1">
            <div>
                <h1  className=" font-ibmmono text-4xl">Create a Professional <><br /></>
                Resume with <span className="text-red-600">Resume Creator</span></h1>
                <p className="pt-9 ibm-plex-mono-medium-italic ">A CV that gets the Job DONE <span className="text-red-600">100%</span></p>
            </div>
            <div className=""><button className=" h-16 w-36  rounded-lg bg-sky-500 shadow-lg shadow-black ">Create CV</button></div>
            <picture className='flex justify-center gap-16 pl-16 '>
            <img className='cv  shadow-md  ' src={smallCvimg} alt="" />
            <img className ='cv  shadow-md 'src={smallCvimg2} alt="" />
            </picture>
        </section>
        <section className='flex-1 flex justify-center'>
          <img  className =' shadow-2xl  ml-24  'src={bigcvimg} alt="" />
                 </section>


    </div>
  )
}

export default Home
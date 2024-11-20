import smallCvimg from '../assets/image/smallCvimg.png'
import smallCvimg2 from '../assets/image/Screenshot 2024-11-12 224126.png'
function Home() {
  return (
    <div className=" pt-20  pl-12  ">
        <section className="flex flex-col gap-10">
            <div>
                <h1  className=" font-ibmmono text-3xl">Create a Professional <><br /></>
                Resume with <span className="text-red-600">Resume Creator</span></h1>
                <p className="pt-9 ibm-plex-mono-medium-italic ">A CV that gets the Job DONE <span className="text-red-600">100%</span></p>
            </div>
            <div className=""><button className=" h-10 w-28  rounded-lg bg-sky-500">Create CV</button></div>
            <picture className='flex'><img src={smallCvimg} alt="" /><img src={smallCvimg2} alt="" /></picture>
        </section>
        <section>
                 </section>


    </div>
  )
}

export default Home


function NavBar() {
  return (
    <nav className=" h-20 content-center sticky top-0 z-10 shadow-xl rounded-md  bg-green-300">
        <ul className='flex justify-end h-10  items-center gap-10 mr-10 ml-5'> 
        <li className='mr-auto font-gravitas text-xl font-extrabold text-transparent bg-clip-text bg-red-500'><h1>Rezume<span className=" text-amber-600//"> TooL</span> </h1></li>
        <li className= "hover:shadow-md hover:shadow-cyan-300 cursor-pointer" >Create Resume</li>
        <li className="hover:shadow-lg hover:shadow-red-300 cursor-pointer">Templates</li> 
        <li className=" bg-black text-white h-9 w-20 flex  justify-center rounded-lg"><button className="">SIGN UP</button></li>
        </ul>
    </nav>
  )
}

export default NavBar


function NavBar() {
  return (
    <nav className=" h-20 bg-green-200 content-center ">
        <ul className='flex justify-end h-10  items-center gap-10 mr-10 ml-5'> 
        <li className='mr-auto font-gravitas'><h1>RESUME CREATOR</h1></li>
        <li>Create Resume</li>
        <li>Templates</li>
        <li className=" bg-black text-white h-9 w-20 flex  justify-center rounded-lg"><button className="">SIGN UP</button></li>
        </ul>
    </nav>
  )
}

export default NavBar
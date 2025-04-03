
import { Link } from 'react-router-dom';
import  './nav.css'
import { useState } from 'react';
function NavBar() {
  const [navCheck, setNavCheck] = useState(false)
  console.log(navCheck)

  return (
   
    <nav className="sticky top-0 text-white bg-black">
      <div className='flex  h-14    text-[max(1.5vw,10px)]  bg-black'>
     <div className=' mr-auto  content-center font-gravitas font-extrabold text-transparent bg-clip-text bg-red-500 text-[clamp(20px,2.5vw,50px)]'><Link to='/' className=''><h1>Rezume</h1> </Link></div>
      <ul className='flex  h-10 {navCheck ? "flex" : "hidden"} items-center  gap-5  font-ibmmono font-bold h-full sm:hidden'> 
       <Link to='/'><li className= "hover:shadow-lg rounded-3xl cursor-pointer hover:text-cyan-300" >Home</li></Link>
       <Link to='/create'> <li className= "hover:shadow-md cursor-pointer hover:text-cyan-300" >Create </li>
       </Link>
       <Link to='/templates'>  <li className="hover:shadow-lg hover:text-cyan-300  cursor-pointer">Templates</li> </Link>
       </ul>
       {/* <Link to='/signUp'> <li className=" bg-black text-white h-9 w-20 flex  justify-center items-center rounded-lg">SIGN UP</li></Link> */}
       <div className=' content-center   hidden sm:block '>
        <label className="bar  " htmlFor="check">
        <input type="checkbox" id="check"  />
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />

        <div  id='xsNav' className={`  absolute right-0 top-12 w-44 h-fit ${navCheck? 'block' : 'hidden'}    bg-black` }>
        <ul className='flex   flex-col justify-end   items-center  gap-5 mr-1 ml-5 font-ibmmono font-bold'> 
      
       <Link to='/'><li className= " text-2xl text-white "   >Home</li></Link>
       <Link to='/create'> <li className= "hover:shadow-md  cursor-pointer text-white  hover:text-cyan-300 text-2xl" >Create </li>
       </Link>
       <Link to='/templates'><li className="hover:shadow-lg   cursor-pointer text-white  hover:text-cyan-300 text-2xl">Templates</li> </Link> 
       </ul>
       </div>
      </label>
      </div>
      </div>
       <hr />
    </nav>
   
  )
}

export default NavBar
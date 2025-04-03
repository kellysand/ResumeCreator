import img1 from '../assets/image/NewTamplate/Temp1.png'
import img2 from '../assets/image/NewTamplate/Temp2.png'
import img3 from '../assets/image/NewTamplate/Temp3.png'
import img4 from '../assets/image/NewTamplate/Temp4.png'
import Temp1 from '../Templates/Template1'
import Temp2 from '../Templates/Template2'
import Temp3 from '../Templates/Template3'
import Temp4 from '../Templates/Template4'
import {Link } from 'react-router-dom';
// import useGetDataHook from '../Hooks/getDataHook'

interface TemplateProps {
  ChosenTemp: React.Dispatch<React.SetStateAction<any>>
  

}




function Template({ChosenTemp}:TemplateProps) {


  const templates =[{
    id:1,
    tempName:"Template 1",
    img:img1,
    component: Temp1,
  },
  {
    id: 2,
    tempName: "Template 2",
    img: img2, 
    component: Temp2,
  },
  {
    id: 3,
    tempName: "Template 3",
    img: img3, 
    component: Temp3,
  },
  {
    id: 4,
    tempName: "Template 4",
    img: img4, 
    component: Temp4,
  },
  ]
  
  return (
    
    <div>

      <h1>Tempate</h1>
     <div className='flex justify-evenly flex-wrap'>{ templates.map(tem => <div className=' justify-items-center w-fit h-fit' key={tem.id}>{tem.tempName}<div>
      <Link to='/create'><img src={tem.img} alt="CV-IMAGE" className='h-72 hover:scale-105' onClick={()=>{ChosenTemp(()=>tem.component)}}/></Link></div></div>)}</div>
     
    </div>
  )
  
}

export default Template
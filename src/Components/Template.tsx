import img1 from '../assets/image/NewTamplate/Temp1.png'
import img2 from '../assets/image/NewTamplate/Temp2.png'
import img3 from '../assets/image/NewTamplate/Temp3.png'
import img4 from '../assets/image/NewTamplate/Temp4.png'
import Temp1 from '../Templates/Template1'
import Temp2 from '../Templates/Template2'
import Temp3 from '../Templates/Template3'
import Temp4 from '../Templates/Template4'
import {Link } from 'react-router-dom';
import CreateCv from './CreateCv'
interface TemplateProps {
  ChosenTemp: (template: React.ReactNode) => void;
}
function Template({ChosenTemp}:TemplateProps) {

  const templates =[{
    id:1,
    tempName:"Template 1",
    img:img1,
    onClick: ()=> ChosenTemp(<Temp1/>),
  },
  {
    id: 2,
    tempName: "Template 2",
    img: img2, onClick: ()=> ChosenTemp(<Temp2/>),
  },
  {
    id: 3,
    tempName: "Template 3",
    img: img3, onClick: ()=> ChosenTemp(<Temp3/>),
  },
  {
    id: 4,
    tempName: "Template 4",
    img: img4, onClick: ()=> ChosenTemp(<Temp4/>),
  },
  ]
  return (
    <div>

      <h1>Tempate</h1>
     <div className='flex'>{ templates.map(tem => <div className=' justify-items-center w-fit h-fit' key={tem.id}>{tem.tempName}<div>
      <Link to='/create'><img src={tem.img} alt="CV-IMAGE" className='h-40 ' onClick={tem.onClick}/></Link></div></div>)}</div>
     
    </div>
  )
}

export default Template
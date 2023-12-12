import './style.scss'
import Flake from '../flake/component'
/* import {randColor} from '../../helpers/generators' */
import { useEffect,useState } from 'react'


const Snow = ({quantity}) => {
  
    let color = "rgb(50,50,255)";
  let [top,setTop] = useState(0)
  let [flakes, setFlakes] = useState([
    <Flake key={1} size={20} top={top} color={color} />,
  ]); 
  const TOP_LIMIT = 80

  useEffect(()=> {
    setTimeout(()=>{
      if(top > TOP_LIMIT){
        /* flakes.pop() */
        setFlakes([])
      } else {
        setTop(top+5)
        setFlakes([<Flake key={1} size={20} top={top} color={color} />]);
      }
    },500)
  })

  return(
    flakes
  )
}

export default Snow 
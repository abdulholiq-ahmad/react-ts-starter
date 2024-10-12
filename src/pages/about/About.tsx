import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import {RootState, AppDispatch} from "../../redux/index"
import { increment } from "../../redux/slice/counter-slice"

const About = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch:AppDispatch= useDispatch()
  return (
    <div>
      <Outlet/>
      <h2>About {counter}</h2>
      <button onClick={()=> dispatch(increment())}>click</button>
    </div>
  )
}

export default About
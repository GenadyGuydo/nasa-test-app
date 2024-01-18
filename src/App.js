import { useEffect, useState } from "react"
import AstronomyPicture from "./components/page"
import LoadContent from "./components/loader"

function App () {
  const[loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
<div >
   { loading ? (
    <LoadContent/>)
  
  :
   
   (<AstronomyPicture/>)}

  </div>)

}

export default App ;
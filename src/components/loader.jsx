import './loadContent.css';
import RiseLoader from "react-spinners/RiseLoader";


const LoadContent = (loading) =>{
  
  return (
  
  <div className="loader-wrapper">
    <div className="loader-container">
      <p className="title">Astronomy Pictures</p>
      <div className="clip"> 
       <RiseLoader
       color={'#ffffff'}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"/>
     </div>
    </div>


  </div>)

}

export default LoadContent
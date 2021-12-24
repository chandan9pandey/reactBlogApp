import './../styles/homesidecard.css'
import HomeImage2 from './../images/soundcloud.jpg'

const HomeSideCard=(props)=>{
    console.log(props);
    return(
<>
<div className="Homecard2">
    <img className="Homecard2image" src={HomeImage2} height="156px" width="100%" alt="card1image"/>
        <p className="HomeheadMain2">{props.card2head}</p>
        <p className="homeEnd2">{props.card2end}</p>
        <hr className="homesidecardhr"/>
 </div>
</>
    );
}

export default HomeSideCard;
import './../styles/homecard3.css'
import Temple from './../images/temple.jpg'

const HomeCard3=(props)=>{
    return(
<>
<div className="HomeCard3"> 
<img className="Homecard3image" src={Temple} height="130px" width="100%" alt="card1image"/>
<p className="HomeCard3head">{props.card3head}</p>
<p className="HomeCard3desc">{props.card3desc}</p>
<p className="HomeCard3end">Travel &nbsp;<span>{props.card3end}</span></p>
</div>
</>
    );
}

export default HomeCard3;
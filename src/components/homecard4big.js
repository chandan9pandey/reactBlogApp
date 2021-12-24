import './../styles/homecard4big.css'
import Card1image from './../images/GujaratImage.jpg'

const HomeCard4Big=(props)=>{
    return(
<>
<div className="card4big">
    <img className="card1image" src={Card1image} height="140px" width="167px" alt="card1image"/>
    <div className="cardText"><h4 className="headbig4">{props.heading}</h4>
    <p className="desc4big">{props.desc}</p>
    <p className="end"><span>Travel &nbsp;&nbsp;</span>{props.end}</p>
    </div>
</div>
</>
    );
}

export default HomeCard4Big;
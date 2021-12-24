import './../styles/categorycard1.css'
import Card1image from './../images/GujaratImage.jpg'

const CategoryCard1=(props)=>{
    return(
<>
<div className="card1">
    <img className="card1image" src={Card1image} height="100px" width="270px" alt="card1image"/>
    <div className="cardText"><h4 className="head1">{props.heading}</h4>
    <p className="desc">{props.desc}</p>
    <p className="end"><span>Travel &nbsp;&nbsp;</span>{props.end}</p>
    </div>
</div>
</>
    );
}

export default CategoryCard1;
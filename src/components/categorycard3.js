import './../styles/categorycard3.css'
import Card1image from './../images/GujaratImage.jpg'

const CategoryCard3=(props)=>{
    return(
<>
<div className="card3">
    <img className="card3image" src={Card1image} height="60px" width="60px" alt="card1image"/>
    <div className="cardText">
        <h4 className="head3">{props.heading}</h4>
        <p className="end3"><span>Travel &nbsp;&nbsp;</span>{props.end}</p>
    </div>
    <p className="cardindex">{props.indexnumber}</p>
</div>
</>
    );
}

export default CategoryCard3;
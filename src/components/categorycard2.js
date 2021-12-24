import './../styles/categorycard2.css'
import Card2image from './../images/MountainImage.jpg'

const CategoryCard2=(props)=>{
    return(
<>
<div className="card2">
    <img className="card2image" src={Card2image} height="140px" width="250px" alt="card2image"/>
        <div className="forFlex">   
            <div className="cardText2"><h4 className="head2">{props.heading}</h4>
              <p className="end2"><span>Travel &nbsp;&nbsp;</span>{props.end}</p>
            </div>
            <p className="card2index">{props.indexnumber}</p>
        </div>
</div>
<hr className="hr2"/>
</>
    );
}

export default CategoryCard2;
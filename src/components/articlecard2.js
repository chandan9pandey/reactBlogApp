import './../styles/articlecard2.css'
import ArticleCard2Image from './../images/temple.jpg'
import ProfilePhoto from './../images/maleavatar.jpg'
import CardData from './../cardData.json'

const ArticleCard2=()=>{
    return(
<>
<div className="ArticleCard2Wrapper">
<p className="top">Also tagged Reactjs</p>
<img className="ArticleCard2Image" src={ArticleCard2Image} alt="ArticleCard2"/>
<p className="ArticleCard2head">{CardData.ArticleCard2.heading}</p>
<div className="AuthorDetails">
    <img className="AuthorProfilePicture" src={ProfilePhoto} alt="ProfilePhoto"/>
    <div className="Article2CardText">
        <p className="AuthorName">{CardData.ArticleCard2.Author}</p>
        <p className="ArticleCard2end">{CardData.ArticleCard2.end}</p>
    </div>
</div>
</div>
</>
    );
}

export default ArticleCard2;
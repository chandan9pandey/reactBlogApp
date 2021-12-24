import './../styles/articleCard3Mobile.css'
import ArticleCard3MobileImage from './../images/temple.jpg'
import cardData from './../cardData.json'

const ArticleCard3Mobile=()=>{
    return(
<>
<div className="ArticleCard3MobileWrapper">

        <div className="ArticleCard3MobileText">
            <h4>{cardData.ArticleCard3Mobile.heading}</h4>
            <p>{cardData.ArticleCard3Mobile.Author}</p>
        </div>
        
        <img src={ArticleCard3MobileImage} alt="ArticleCard3MobileImage"/>
</div>
</>
    );
}

export default ArticleCard3Mobile;
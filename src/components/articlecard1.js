import './../styles/articlecard1.css'
import CardData from './../cardData.json'
import ProfilePhoto from './../images/maleavatar.jpg'
import ArticleCardImage1 from './../images/ReactAnimation.png'
import ArticleCardImage2 from './../images/ReactArticleImage2.png'
import Clap from './../images/clap.png'
import FixedImage from './../images/ArticlePagesidefixedimage.png'

const ArticleCard1=()=>{
    return(
<>
<div className="ArticleCard1Wrapper">
    <div className="ArticleSideFixedDiv">
        <img src={FixedImage} alt="ArticleSideFixedDiv"/>
    </div>
    <div className="ArticleCard1main">

        <p className="ArticleCard1head">{CardData.ArticleCard1.heading}</p>

        <div className="ArticleCard1iconsmobile">
                <div className="ArticleCard1iconmobile"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconmobile"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconmobile"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconmobile"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>
        </div>

        <div className="AuthorDetails1">

            <div className="AuthorDetailsWrapper"><img className="AuthorProfilePicture1" src={ProfilePhoto} alt="ProfilePhoto"/>

            <div className="Article1CardText">
            <p className="AuthorName1">{CardData.ArticleCard1.Author}</p>
            <p className="ArticleCard1end">{CardData.ArticleCard1.end}</p>   </div></div>

            <div className="ArticleCard1iconslaptop">
                <div className="ArticleCard1iconlaptop"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconlaptop"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconlaptop"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                <div className="ArticleCard1iconlaptop"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>
            </div>

        </div>
        
        <br/>

        <img src={ArticleCardImage1} alt="ArticleCardImage1" className="ArticleCardImage1"/>

        <br/><br/>

        <p className="ArticleCard1desc">{CardData.ArticleCard1.desc1}</p>

        <p  className="ArticleCard1desc">{CardData.ArticleCard1.desc2}</p>
        
        
        <img src={ArticleCardImage2} alt="ArticleCardImage2" className="ArticleCardImage1"/>

        <br/><br/>

        <div className="ArticleCard1Tags">
            <div className="Tag">{CardData.ArticleCard1.tag1}</div>
            <div className="Tag">{CardData.ArticleCard1.tag2}</div>
            <div className="Tag">{CardData.ArticleCard1.tag3}</div>
        </div>
       
       <div className="ArticleCard1Clap"><img src={Clap} alt="iconClap"/>&nbsp;&nbsp;9.3K claps</div>

       <br/>

       <div className="AuthorDetails2">
           <img className="AuthorProfilePicture1" src={ProfilePhoto} alt="ProfilePhoto"/>
            <div className="Article1CardText2">
            <p className="WrittenBy">WRITTEN BY</p>
            <p className="AuthorName2">{CardData.ArticleCard1.Author}</p>
            <p className="ArticleCard2end">{CardData.ArticleCard1.end}</p>   
            </div>
       </div>

       <br/>


</div>
</div>
</>
    );
}

export default ArticleCard1;
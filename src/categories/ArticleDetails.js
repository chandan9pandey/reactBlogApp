import './../styles/ArticleDetails.css'
import ArticleHeader from './../components/articleheader'
import ArticleCard1 from '../components/articlecard1';
import ArticleCard2 from '../components/articlecard2'
import ArticleCard3Mobile from '../components/articleCard3Mobile';

const ArticleDetails=()=>{
    return(
<>
<div className="ArticlePageWrapper">

    <div className="articlecardheaderwrappermobile"><ArticleHeader/></div>

    <div className="articlecard1wrappermobile"><ArticleCard1/></div>
    
    <div className="ArticlepageCard2Wrapper">
        <p className="ArticlePageSubHeading">More From The Siren</p>
        <hr className="ArticlePagehr"/>
            <div className="ArticlepageCard2Wrapper2">
                <ArticleCard2/>
                <ArticleCard2/>
                <ArticleCard2/>
            </div>

            <div className="ArticlepageCard3MobileWrapper">
                <ArticleCard3Mobile/>
                <ArticleCard3Mobile/>
                <ArticleCard3Mobile/>
                <ArticleCard3Mobile/>
            </div>
    </div>

</div>
</>
    );
}

export default ArticleDetails;
import './../styles/articleheader.css'
import AppLogo from './../images/headinglogo.png'
import { Link } from 'react-router-dom';

const ArticleHeader=()=>{
    return(
<>
<div className="ArticleHeadWrapper">
<Link to="/"><img className="ArticleHeaderLogo" src={AppLogo} alt="Applogo"/></Link>
<div className="GetStarted">Get Started</div>
</div>
</>
    );
}

export default ArticleHeader;
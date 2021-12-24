import './styles/home.css'
import Homecard5image from './images/GujaratImage.jpg'
import HomeMainImage from './images/verticalgallery.jpg'
import HomeSideCard from './components/homesidecard'
import HomeCard3 from './components/homecard3'
import HomeCard4Big from './components/homecard4big'
import CategoryCard1 from './components/categorycard1'
import CategoryCard2 from './components/categorycard2'
import CategoryCard3 from './components/categorycard3'
import Advertisement from './components/advertisement'
import LoadMore from './components/loadmore'
import ViewMore from './components/viewmore'
import HomeCard6 from './components/homecard6'
import CardData from "./cardData.json"
import { Link } from 'react-router-dom';

const Home=()=>{

    return(
<>
<div className="HomeMainContainer">
<div className="HomeContainer1">
    <div className="HomeBlogPage">

     <Link to={CardData.Homecard1.link}>  <div className="Homecard1">
            <img className="Homecard1image" src={HomeMainImage} height="320px" width="100%" alt="card1image"/>
            <p className="HomeheadMain">{CardData.Homecard1.heading}</p>
            <p className="homeEnd">{CardData.Homecard1.end}</p>
        </div></Link> 
        
        <br/><br/>
        

        <h2>The Latest</h2>
        <hr className="headUnderline"></hr>

        <div className="HomeCard3Wrapper">
        <Link to={CardData.HomeCard3.link} style={{ textDecoration: 'none' }}><HomeCard3 card3head={CardData.HomeCard3.heading} card3desc={CardData.HomeCard3.desc}  card3end={CardData.HomeCard3.end}/></Link>
        <Link to={CardData.HomeCard3.link} style={{ textDecoration: 'none' }}><HomeCard3 card3head={CardData.HomeCard3.heading} card3desc={CardData.HomeCard3.desc}  card3end={CardData.HomeCard3.end}/></Link>
        <Link className="HomeCard3mobile" to={CardData.HomeCard3.link} style={{ textDecoration: 'none' }}><HomeCard3 card3head={CardData.HomeCard3.heading} card3desc={CardData.HomeCard3.desc}  card3end={CardData.HomeCard3.end}/></Link>
        </div>
        
        <br/><br/>

        <h2>Latest Articles</h2>
        <hr className="headUnderline"></hr>

        <br/>
        
        <div className="HomeCardWrapperMiddle">
        <div className="homecard4big"><hr className="HomeHR"/>
        <HomeCard4Big heading={CardData.HomeCard4Big.heading} desc={CardData.HomeCard4Big.desc} end={CardData.HomeCard4Big.end}/>
        <hr className="HomeHR"/></div>
        <CategoryCard1 heading={CardData.HomeCard4Big.heading} desc={CardData.HomeCard4Big.desc} end={CardData.HomeCard4Big.end}/>
        <hr className="HomeHR"/>
        <CategoryCard1 heading={CardData.HomeCard4Big.heading} desc={CardData.HomeCard4Big.desc} end={CardData.HomeCard4Big.end}/>
        <hr className="HomeHR"/>
        <CategoryCard1 heading={CardData.HomeCard4Big.heading} desc={CardData.HomeCard4Big.desc} end={CardData.HomeCard4Big.end}/>
        </div>
        <br/><br/><br/><br/>
       <LoadMore/>

        <br/><br/><br/><br/>
        <div className="topPostContainerMobile">
            <h2>Top Posts</h2>
            <hr className="headUnderline"></hr>

           <div><CategoryCard2 heading={CardData.CategoryCard2.heading} end={CardData.CategoryCard2.end}/></div> 
           <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
            <hr className="hr2"/>
            <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
            <hr className="hr2"/>
            <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
        </div>
        
        <div className="Homecard5">
            <img className="Homecard5image" src={Homecard5image} height="320px" width="100%" alt="card1image"/>
            <p className="Homeheadcard5">{CardData.Homecard5.heading}</p>
            <p className="homeEndcard5">{CardData.Homecard5.end}</p>
        </div>
        
        <br/>

        <h2>Latest Stories</h2>
        <hr className="headUnderline"></hr>
    </div>

    <div className="HomeSide">

        <div className="sideImages" >
        <Link to={CardData.HomeSideCard.link}> <HomeSideCard  card2head={CardData.HomeSideCard.heading} card2end={CardData.HomeSideCard.end}/> </Link>
        <Link to={CardData.HomeSideCard.link}> <HomeSideCard  card2head={CardData.HomeSideCard.heading} card2end={CardData.HomeSideCard.end}/> </Link>
         </div>
          
         <br/><br/> <br/><br/><br/>

         <Link to={CardData.HomeCard3.link} style={{ textDecoration: 'none' }}><div className="SideHomeCard3Wrapper" >
        <HomeCard3   card3head={CardData.HomeCard3.heading} card3desc={CardData.HomeCard3.desc}  card3end={CardData.HomeCard3.end}/>
        </div></Link>

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <Advertisement/>
        <br/>

        <h2>Top Posts</h2>
        <hr className="headUnderline"></hr>

        <CategoryCard2 heading={CardData.CategoryCard2.heading} end={CardData.CategoryCard2.end} indexnumber='1'/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='2'/>
        <hr className="hr2"/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='3'/>
        <hr className="hr2"/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='4'/>
    </div>
</div>

<div className="HomeContainer2"> 
<hr className="lasthr"/>
<br/><br/>
    <div className="HomeCard6wrapper">
        <HomeCard6 card6head={CardData.HomeCard6.heading} card6desc={CardData.HomeCard6.desc} card6end1="TECH " card6end2="/ TODAY AT 11:54"/>
        <hr className="lasthr2"/>
        <HomeCard6 card6head={CardData.HomeCard6.heading} card6desc={CardData.HomeCard6.desc} card6end1="STYLE " card6end2="/ AUGUST 21 2017"/>
        <hr className="lasthr2"/>
        <HomeCard6 card6head={CardData.HomeCard6.heading} card6desc={CardData.HomeCard6.desc} card6end1="TECH " card6end2="/ AUGUST 21 2017"/>
    </div>
<br/>
<hr className="lasthr"/>
<br/>
<ViewMore/>
</div>
</div>
 
</>
    );
}

export default Home;
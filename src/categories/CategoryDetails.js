import './../styles/CategoryDetails.css'
import CategoryCard1 from '../components/categorycard1';
import CategoryCard2 from '../components/categorycard2';
import CategoryCard3 from '../components/categorycard3';
import Advertisement from '../components/advertisement';
import LoadMore from '../components/loadmore'
import Header from './../components/header';
import CardData from './../cardData.json'

const index=[1,2,3,4,5,6];
const indexMobile=[1,2];

const CategoryDetails=(props)=>{
    
    return(
        <>
        <Header/>
<div className="MainContainer">
    <div className="BlogPage">
        <br/>
        <h2 className="CategoryHeading">{props.match.params.topic}</h2>
        <hr className="headUnderline"></hr>

        <div className="categoryMainLaptop">{index.map(item => (<>
            <CategoryCard1 heading={CardData.CategoryCard1.heading} desc={CardData.CategoryCard1.desc} end={CardData.CategoryCard1.end}/>
             <hr className="categoryHR"/></>
        ))}</div>

        <div className="categoryMainMobile">{indexMobile.map(item => (<>
            <div className="marginForMobile"><CategoryCard1 heading={CardData.CategoryCard1.heading} desc={CardData.CategoryCard1.desc} end={CardData.CategoryCard1.end}/></div>
             <hr className="categoryHR"/></>
        ))}</div>

        <div className="marginForMobile"><CategoryCard1 heading={CardData.CategoryCard1.heading} desc={CardData.CategoryCard1.desc} end={CardData.CategoryCard1.end}/></div>
            <br/>
            <br/>
        <LoadMore/> 
        <div className="topPostContainerMobile2">
            <h2>Top Posts</h2>
            <hr className="headUnderline"></hr>

           <div><CategoryCard2 heading={CardData.CategoryCard2.heading} end={CardData.CategoryCard2.end}/></div> 
           <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
            <hr className="hr2"/>
            <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
            <hr className="hr2"/>
            <div><CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end}/></div> 
        </div>
    </div>
    <div className="Side">
        <br/>
        <h2>Top Posts</h2>
        <hr className="headUnderline"></hr>
        <CategoryCard2 heading={CardData.CategoryCard2.heading} end={CardData.CategoryCard2.end} indexnumber='1'/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='2'/>
        <hr className="hr2"/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='3'/>
        <hr className="hr2"/>
        <CategoryCard3 heading={CardData.CategoryCard3.heading} end={CardData.CategoryCard3.end} indexnumber='4'/>
        <br/> <br/> <br/> <br/> <br/>
        <Advertisement/>
    </div>
</div>
</>
    );
}

export default CategoryDetails;
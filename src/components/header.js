import './../styles/header.css'
import Logo from './../images/headinglogo.png'
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Header extends Component{
    constructor(){
        super();

        this.state = {
             display: false
        }}

        changeDisplay(){
            this.setState({display: !this.state.display})
        }
   
    render(){
        let headerMenu_class = this.state.display ? "headerMenu" : "headerMenuinvisible";
        return(
            <>
    <header className="header">
       <div className="forMobile"><div className="logo"><img src={Logo} height="50px" width="150px" alt="logoimage"/></div> 
       <div className="headerDropdownBars" onClick={this.changeDisplay.bind(this)}><i class="fa fa-bars"></i></div></div>
          <div className={headerMenu_class}> 
             <div><Link  className="headerLink" to="/">Home</Link></div>     
             <hr className="headerMobileLines"></hr>       
             <div><Link className="headerLink" to="/categories/Bollywood">Bollywood</Link></div>
             <hr className="headerMobileLines"></hr>    
             <div><Link className="headerLink" to="/categories/Technology">Technology</Link></div> 
             <hr className="headerMobileLines"></hr>        
             <div><Link className="headerLink" to="/categories/Hollywood">Hollywood</Link></div>   
             <hr className="headerMobileLines"></hr>      
             <div><Link className="headerLink" to="/categories/Fitness">Fitness</Link></div>   
             <hr className="headerMobileLines"></hr>       
             <div><Link className="headerLink" to="/categories/Food">Food</Link></div> 
          </div>
        <hr className="headerEndHr"></hr>
    </header> 
    </>
);
    }
}
export default Header;

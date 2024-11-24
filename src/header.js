import Home from'./home';
import About from'./about';
import Contact from'./contact';
import Destination from './destination';
import './header.css';
import{BrowserRouter,Route,Link}from 'react-router-dom';
function Header(){
return(

    
    
    <BrowserRouter>
    <> 
    <div className="header">
        <div className="wow">
    <h1 >WOW STAY</h1>
    </div>
    
    <ul className="nav">
        <li>
            <Link to="/" className="nav-item" >Home</Link>
        </li>
                <li>
                    <Link to="/about" className="nav-item">About Us</Link>
                    </li>
                 <li> <Link to="/destination" className="nav-item">Destination</Link>
                 </li>
            
                    <li> <Link to="/contact" className="nav-item">Contact</Link>
                </li>

            </ul>
            
            </div>
            
        
        
        
        
    <Route exact path='/'component={Home}/>
    <Route path='/about'component={About}/>
    <Route path='/contact'component={Contact}/>
    <Route path='/destination'component={Destination}/>
   
</>
</BrowserRouter>
   

)
}
export default Header;
import "./stylesheet/Header.css"
import { LOGO_URL } from "../utils/constants";  // named import ka tarikaaa!!!!!!!
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';


const Header = () =>{
    return (
        <div className="header">
            <div id="logo-container">
                <Link to="/">
                    <img  className="logo" src={LOGO_URL} alt="" />
                </Link>
            </div>
            <div id="nav-items">
                    <Link to="/">
                        <i class="ri-search-line"></i>
                        Search
                    </Link>
                    <Link to="/about">
                        <i class="ri-discount-percent-line"></i>
                        Offers
                        <sup>
                            NEW
                        </sup>
                        </Link>
                    <Link to="/about">
                        <i class="ri-user-3-line"></i>
                        Sign In
                    </Link>
                    <Link to="/about">
                        <i class="ri-shopping-cart-line"></i>
                        Cart
                    </Link>
            
            </div>
        </div>
    )
};


export default Header;
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import "./stylesheet/Cart.css"
import { clearCart } from "../utils/redux-store/cartSlice";
import { EMPTY_CART_IMG } from "../utils/constants";
import { Link } from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector((store)=>(store.cart.items)); // always select only required portion of your store because you dont want unneccessary update when something that is n ot related is changing  
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());

    }

  return (
    <>
    <div id="cart-container">
        {!cartItems.length  || <div id="clear-cart" onClick={handleClearCart}>Clear Cart</div>}
        {!cartItems.length  && <div id="empty-cart" >
            <img src={EMPTY_CART_IMG} alt="" />
            <h3>Your cart is empty</h3>
            <p>You can go to home page to view more restaurants</p>
            <Link to="/">See Restaurant Near You</Link>
            
             </div>}

    {cartItems.map((item,index) => (<ItemList key={index} item={item}></ItemList>))}
    </div>    
    </>
  )
}

export default Cart
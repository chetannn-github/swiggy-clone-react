let ItemList =({item}) =>{
      
    return(
        <div id="item-container" >
            <div className="item">
                <h3>{item.card.info.name}</h3>
                <p>₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</p> 
                <h4>{item.card.info.description}</h4>
            </div>
            {/* {console.log(item.card.info.imageId)} */}
            <div className="image">
             {item.card.info.imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} alt="" />: <img src="https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg" alt="" /> }
         </div>
     </div>)
    }

    export default ItemList;
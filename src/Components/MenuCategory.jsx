import ItemList from "./ItemList";


let MenuCategory = ({category,toggle,handleToggle,index}) =>{
    return(
        <div id="recommended">
            <div id="header" onClick={()=>handleToggle(index)}>
            <h2>{category.card.card.title} ({category.card.card.itemCards.length})</h2>
            <i  class={`ri-arrow-down-s-line ${!toggle? "toggle": ""}`}></i>
            </div>

            {toggle&&category.card.card.itemCards.map((item)=>(<ItemList item={item}/>))}
 
        </div>
    )
}

export default MenuCategory;
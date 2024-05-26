import Shimmer from "./Shimmer";
import "./stylesheet/RestaurantMenu.css";
import 'remixicon/fonts/remixicon.css';

import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";

import MenuCategory from "./MenuCategory.jsx";

export default function RestaurantMenu () {
    let params = useParams();
    let resInfo = useRestaurantMenu(params.resId);

    let [toggle, setToggle]= useState (0);
    let handleToggle = (i) => {
        if (!(toggle ===i)) {setToggle(i);}
        else{
            setToggle(null)
        }
    }

    if (!resInfo) { return (<Shimmer/>)}

    const {name,cuisines,areaName,avgRating,costForTwoMessage,totalRatingsString,feeDetails,sla} = resInfo?.cards[2]?.card?.card?.info;
    let distance = sla.lastMileTravelString;
    let time = sla.slaString;
    let deliveryFees= feeDetails.message;

    let offers =resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

    // console.log(resInfo);
    let menu =resInfo.cards[resInfo.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(menu);
    let categories =  menu.filter((item) =>(item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
   
    // console.log(categories);


    return( <div className="menu">
        <div id="res-info">
            <div id="info">
                <h1>{name}</h1>
                <p>{cuisines.join(" ")}</p>
                <p>{areaName} {distance}</p>
                <p id="delivery-msg">{deliveryFees}</p>
            </div>

            <div id="ratings">
                <p id="avgRating">{avgRating} </p>
                 <p id="totalRating">{totalRatingsString}</p>
    
            </div>
        </div>

        <div id="offers">
            <div id="top">
                <p>{time}</p>
                <p>{costForTwoMessage}</p>
               
            </div>

            <div id="bottom">
                {offers.map((item,index)=>
                    (<div id="offer" key={index}>
                        <h1> <i class="ri-discount-percent-line"></i>  {item.info.header}</h1>
                        <h4>{item.info.couponCode} | {item.info.description}</h4>
                </div>))}
                
               
            </div>
            
        </div>
 
        {categories.map((category,i)=>(<MenuCategory key={i} category={category} handleToggle={handleToggle} index={i} toggle={i===toggle && true}/>))}
       
    
    
</div>)
   
};
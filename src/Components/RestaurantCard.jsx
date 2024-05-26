import "./stylesheet/Restaurant.css";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function RestaurantCard ({resData}) {
    // console.log(resData.info);
    let {name,cloudinaryImageId,avgRatingString, sla,cuisines,aggregatedDiscountInfoV3 ,id}=resData.info;
    return (
        <Link to= {`/restaurants/${id}`}>
            <div className="res-card">

                <div id="res-img">
                    <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" className="res-logo" />
                    {aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader && (
                    <h2>{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</h2>)}
                    <div className="overlay"></div>
                </div>
                <h3>{name}</h3>
                <h4 id="cuisines" >{cuisines.join(",")}</h4>
                <h4>{avgRatingString} Stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
        
            </div>

        </Link>
    )
}
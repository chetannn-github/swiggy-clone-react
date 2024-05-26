import RestaurantCard from "./RestaurantCard";
import "./stylesheet/Body.css";
import useRestaurants  from "../utils/useRestaurants.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import Shimmer from "./Shimmer.jsx";
import Search from "./Search";



export  function Body (){
    let {data:data= null,unchangedData,handleTopRated,handleSearch}= useRestaurants(); // useRestaurant hook ek object return krr rhaa hhhh usse destructure kiya hh humne 
   // yh jo tum backchodi dekh rhe ho iss nothing js mm object destructing kiii hhh mne jisme phele data key hh object me jo return ho rhii thii usko mene data naam assign kiya hh aurr phrr usee default value assign kiii hhhh
    let online = useOnlineStatus();

    if(!online){
        return (
            <p>you are offline</p>
        )
    }

    //conditional rendering 
    if (!data){
    // console.log("this is shimmer");
        return <Shimmer/>
    }
   
    return (
        <>
            <div id="sorting">
                <Search data={unchangedData} searchfn={handleSearch}/>
                <button id="btn" onClick={handleTopRated}>Top Rated Restaurants</button>
            </div>
       
            <div id="res-container">
                {data.map((rest , index)=>(<RestaurantCard key={index}  resData={rest} />))}
            </div>
        </>
    )
}
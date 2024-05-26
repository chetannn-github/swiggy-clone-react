import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "./constants";

  
const useRestaurants = ()=>{
  let [data,setData]=useState(null);
  let [unchangedData,setUnchangedData] = useState(null);

  useEffect (()=>{fetchData();},[]);
    
  const fetchData = async() =>{
    let fetchedData=  await fetch(RESTAURANT_LIST_API);
    const json = await fetchedData.json();
    
    let restaurants =  json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ;
    setData (restaurants);
    setUnchangedData(restaurants);
  }

  let handleTopRated = () =>{
    // console.log(unchangedData);
    let filteredData=unchangedData.filter((item)=>((item.info.avgRating)>4.2))
    setData(filteredData);
  };
  
   let handleSearch=(searchData)=>{
    setData(searchData);
  }
  
  
  return {data, handleSearch, handleTopRated , unchangedData};  // yh ek object ke form me return ho rhe hh jisme keys are data, handleSearch, handleTopRated , unchangedData
}

  
export default useRestaurants;
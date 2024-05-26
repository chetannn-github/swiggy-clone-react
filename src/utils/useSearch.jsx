import { useState } from "react";

const useSearch = (data, searchfn) =>{
    let [searchTxt , setSearchTxt]= useState ("");

    let handleChange = (e)=>{
        setSearchTxt(e.target.value);
    }

    let handleSearch =() =>{
    // console.log(data[0].info.cuisines)
        let searchdata= data.filter((item)=>(
       ( item.info.name.toLowerCase().includes(searchTxt.toLowerCase()) ) ||
       (item.info.cuisines.some((food)=>(food.toLowerCase().includes(searchTxt.toLowerCase()))))
        ));
        searchfn(searchdata);
    }

    return {searchTxt, handleChange,handleSearch};
    }

export default useSearch;

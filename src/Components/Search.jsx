import useSearch from "../utils/useSearch.jsx";
import "./stylesheet/Search.css";


export default function Search ({data,searchfn}) {
    const handleKeyDown = (event) => {
        // Check if Enter key was pressed
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    let {searchTxt, handleChange, handleSearch} = useSearch(data,searchfn);
    return (
        <div id="search-bar">
            <input type="text"  placeholder="AAJ KYA KHAOGE??" id="search-input" value={searchTxt} onChange={handleChange} onKeyDown={handleKeyDown}  />
            <button type="submit"  id="search-btn" onClick={handleSearch} >Search</button>
        </div>
    )
}
import  { useState } from "react";
import "./SearchSection.css";
import { useNavigate } from "react-router-dom";



export default function SearchSection() {
  const [searchTerm,setSearchTerm] = useState("");

  const navigate = useNavigate();
  const goToFilter = () => {
    navigate('/Filter');
  }
  
 
  const handleSearch = () => {
    if(!searchTerm.trim()) return;
    navigate('/ReasultSearch');
  }
  return (
    <div className="search-section">
      <div className="search-bar">
        <input type="text" placeholder="Search here" value={searchTerm} onChange={(e) =>                                                            setSearchTerm(e.target.value)} className="search-input" />
        <button className="filter-button" onClick={handleSearch}>Search</button>
      </div>
      <button className="filter-button" onClick={goToFilter}>Filter</button>
     
    </div>
  );
} 
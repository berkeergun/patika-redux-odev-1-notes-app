import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/notes/notesSlice";

function SearchForm() {
  const [filterItem,setFilterItem] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    
    dispatch(changeFilter(e.target.value));
    setFilterItem(e.target.value)
  }


  return (
    <>
      <form style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "10px",
            border: "2px solid #5b8919",
            borderRadius: "10px",
          }}
          value={filterItem}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default SearchForm;

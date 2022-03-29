import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/notes/notesSlice";

let filtered;

function NoteList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.notes.items);

  const filter = useSelector((state) => state.notes.activeFilter);

  filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {filtered.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            position: "relative",
            backgroundColor: `${item.color}`,
            justifyContent: "space-between",
            width: "300px",
            height: "200px",
            margin: "20px",
            padding: "15px",
            borderRadius: "10px",
            boxSizing: "border-box",
            boxShadow: "1px 8px 16px rgba(0,0,0,0.9)",
          }}
        >
          <div
            className="scrollnone"
            style={{
              overflowX: "auto",
              overflowY: "auto",
              width: "250px",
              height: "175px",
            }}
          >
            {item.textArea}
          </div>
          {console.log(item.textArea)}

          <button
            className="deleteButton"
            style={{ position: "relative", height: "30px", right: "-10px" }}
            onClick={() => handleDelete(item.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

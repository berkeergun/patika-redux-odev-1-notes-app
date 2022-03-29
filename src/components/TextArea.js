import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function TextArea() {
  const dispatch = useDispatch();

  const [textArea, setTextArea] = useState("Test Note");

  const [color, setColor] = useState("#00FF88");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!textArea || !color) {
      return alert("Please write something and select color");
    }
    dispatch(addNote({ id: nanoid(10), textArea, color }));

    setTextArea("");
    // setColor("#ffffff");
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <textarea
        style={{
          width: "300px",
          height: "125px",
          padding: "10px",
          border: "2px solid #5b8919",
          borderRadius: "10px",
          resize:"none"
        }}
        placeholder="write something..."
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <br />
      <div style={{display:"flex",justifyContent:"center"}}>
      <input
      style={{margin:"10px"}}
        type="color"
        value={color}
        name="xyz"
        onChange={(e) => setColor(e.target.value)}
      />

      <button className="addButton">Add Note</button>
      </div>
    </form>
    </>
  );
}

export default TextArea;

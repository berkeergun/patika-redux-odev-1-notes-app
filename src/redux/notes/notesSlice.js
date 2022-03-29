import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(10),
        textArea: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "#46CECB",
      },
      {
        id: nanoid(10),
        textArea: "Quisque sem mauris, sodales eget porttitor eu, ornare in velit. Nullam luctus orci ex, nec congue velit facilisis vitae. Nulla imperdiet erat vitae egestas pulvinar. Etiam vestibulum interdum sem. Fusce ultricies sem ac dolor blandit eleifend. Aenean at consequat leo. Sed in fringilla mi, id posuere nibh.",
        color: "#345692",
      },
      {
        id: nanoid(10),
        textArea: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "#FD3A3A",
      },
      {
        id: nanoid(10),
        textArea: "Quisque sem mauris, sodales eget porttitor eu, ornare in velit. Nullam luctus orci ex, nec congue velit facilisis vitae. Nulla imperdiet erat vitae egestas pulvinar. Etiam vestibulum interdum sem. Fusce ultricies sem ac dolor blandit eleifend. Aenean at consequat leo. Sed in fringilla mi, id posuere nibh.",
        color: "#D4FF00",
      },
    ],
    activeFilter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { addNote, deleteNote, changeFilter } = notesSlice.actions;
export default notesSlice.reducer;

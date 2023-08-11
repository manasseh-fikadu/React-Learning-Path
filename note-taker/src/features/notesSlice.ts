import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a Note
export interface Note {
  id: number;
  title: string; // Add title field
  text: string;
}

// Define the initial state for the notes slice
interface NotesState {
  notes: Note[];
}

// Initialize the state with an empty notes array
const initialState: NotesState = {
  notes: [],
};

// Create a Redux slice
const noteSlice = createSlice({
  name: "notes", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to add a new note
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    // Reducer to edit an existing note
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title, text } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.text = text;
      }
    },
    // Reducer to delete a note
    deleteNote: (state, action: PayloadAction<number>) => {
      // Filter out the note with the specified ID
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Export the action creators and reducer from the slice
export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

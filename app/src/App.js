import './App.css';
import NoteList from './Components/NoteList'
import Note from './Components/Note';

function App() {
  return (
    <div className="App">
      <Note />
      <NoteList />
    </div>
  );
}

export default App;

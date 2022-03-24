
import './App.css'; import DisplayImage from './components/DisplayIamge';
import "bootstrap/dist/css/bootstrap.min.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <div className="box">
      <h2 className='header'>

        <DisplayImage />
      </h2>
    </div >
  );
}

export default App;

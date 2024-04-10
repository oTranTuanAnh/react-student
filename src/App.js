
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Navbar from "./component/Navbar";
import ListStudents from "./page/ListStudents";
import CreateStudent from "./page/CreateStudent";
import EditStudent from "./page/EditStudent";

function App() {
  return (
    <div>
        <Navbar></Navbar>
      <Routes>
        <Route path={"students"} element={<ListStudents/>}></Route>
          <Route path={"/students/create"} element={<CreateStudent/>}></Route>
          <Route path={"/students/edit/:id"} element={<EditStudent/>}></Route>


      </Routes>
    </div>
  );
}

export default App;

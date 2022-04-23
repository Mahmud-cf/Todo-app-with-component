import {useState} from 'react'
import './App.css';
import FormsCompo from './component/FormsCompo';
import StudentInformation from "./component/StudentInformation"



function App() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editModeList, setEditModeList] = useState(null);
  

  return (
    <div className="App">
      
      <FormsCompo
        studentName={studentName}
        setStudentName={setStudentName}
        studentList ={studentList}
        setStudentList={setStudentList}
        editModeList={editModeList}
        setEditModeList={setEditModeList}
        editMode={editMode}
        setEditMode={setEditMode}
        
      />
      <StudentInformation
        studentName={studentName}
        setStudentName={setStudentName}
        studentList ={studentList}
        setStudentList={setStudentList}
        editModeList={editModeList}
        setEditModeList={setEditModeList}
        editMode={editMode}
        setEditMode={setEditMode}
      />



    </div>
  );
}

export default App;

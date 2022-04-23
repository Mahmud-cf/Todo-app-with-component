
import AllStudent from "./AllStudent"
import PresentStudent from "./PresentStudent"
import AbsentStudent from "./AbsentStudent"


const StudentInformation = (props) => {
   
   const accidentalAdded =(id)=>{
      const student = props.studentList.find(student=>student.id===id);
      student.isPresent=!student.isPresent;
      props.setStudentList([...props.studentList]);
    }

   return (
      
      <div className="student-information">
         
         <AllStudent
            studentList={props.studentList}
            setStudentList={props.setStudentList}
            setEditMode ={props.setEditMode}
            setEditModeList ={props.setEditModeList}
            setStudentName={props.setStudentName}
         />

         <PresentStudent
            studentList={props.studentList}
            accidentalAdded={accidentalAdded}
         />
         <AbsentStudent
            studentList={props.studentList}
            accidentalAdded={accidentalAdded}
         />
      </div>

   )
}

export default StudentInformation




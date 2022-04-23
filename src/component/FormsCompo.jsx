
const FormsCompo =(props)=>{
   

   const listItem =(event)=>{
      event.preventDefault();
      if(props.studentName===""){
        alert("Plese enter studentName")
      }else{
        const newStudent ={
          id:Date.now(),
          name:props.studentName,
        }
        props.setStudentList([...props.studentList, newStudent]);
        props.setStudentName("")
        }
      }
      const update = () => {
         props.editModeList.name = props.studentName || props.editModeList.name;
         props.setEditMode(false);
         props.setEditModeList(null);
         props.setStudentName("")
       }



   return(
      <form action="#">
         <input type="text" value={props.studentName}
            onChange={(event) => props.setStudentName(event.target.value)}
         />
         <button onClick={(event) => props.editMode === true ? update(event) : listItem(event)}>
            {props.editMode === true ? "Upade Student" : "Add Student"}
        </button>
      </form>


   )
}

export default FormsCompo








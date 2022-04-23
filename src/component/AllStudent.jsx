
const allStudent =(props)=>{

   const editItem =(id)=>{
      const editableStudent =props.studentList.find(student=>student.id===id);

      props.setEditMode(true);
      props.setEditModeList(editableStudent);
      props.setStudentName(editableStudent.name)
    }

    const deleteItem =(id)=>{
      const newStudentList = props.studentList.filter(student=>student.id!==id);
      props.setStudentList(newStudentList)
    }

    const present =(id) => {
      const student= props.studentList.find(student=>student.id===id);
      if(student.isPresent===undefined){
        student.isPresent=true;
        props.setStudentList([...props.studentList]);
      }else if(student.isPresent===true){
        alert("The student is already in the present list")
      }else if(student.isPresent===false){
        alert("The student already in the absent list")
      }
    }

    const absent =(id) => {
      const student= props.studentList.find(student => student.id===id);
      if(student.isPresent===undefined){
        student.isPresent=false;
        props.setStudentList([...props.studentList]);
      }else if(student.isPresent===false){
        alert("The student is already in the absent list")
      }else if(student.isPresent===true){
        alert("The student already in the present list")
      }
    }


   return(
      <div className="allStuden">
          <h1>All Student list</h1>
        <ul>
          {props.studentList.map(list=>(
            <li>
              <span>{list.name}</span>
              <button onClick={() => editItem (list.id)} >Edit</button>
              <button onClick={()=>deleteItem(list.id)} >Delete</button>
              <button onClick={()=>present(list.id)} >Present</button>
              <button onClick={()=>absent(list.id)} >Absent</button>
            </li>
            
          ))}
        </ul>
        </div>
   )
}

export default allStudent



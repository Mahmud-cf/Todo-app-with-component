const absentStudent =(props) => {
   return (
      <div className='absentStudent'>
          <h1>Absent student list</h1>
          <ul>
            {props.studentList.filter(student=> student.isPresent===false).map(item=>(
              <li>
                <span>{item.name}</span>
                <button onClick={()=>props.accidentalAdded(item.id)} >Accidentaly Added</button>
              </li>
            ))}
          </ul>
        </div>
   )
}

export default absentStudent 


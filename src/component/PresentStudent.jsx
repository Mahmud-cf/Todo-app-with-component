const presentStudent =(props)=> {
   return(
      <div className='presentStudent'>
          <h1>Present Student list</h1>
          <ul>
            {props.studentList.filter(student=> student.isPresent===true).map(item=>(
              <li>
                <span>{item.name}</span>
                <button onClick={()=>props.accidentalAdded(item.id)} >Accidentaly Added</button>
              </li>
            ))}
          </ul>
        </div>
   )
}

export default presentStudent


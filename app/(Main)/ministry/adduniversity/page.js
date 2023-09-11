import React from 'react'

const AddUniversity = () => {
  return (
    <div className='flex flex-row '>
      <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
      <select className="select select-primary w-full max-w-xs">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<br/>
<button className="btn btn-primary">Add University</button>
    </div>
  )
}

export default AddUniversity

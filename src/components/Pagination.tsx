import React, {useState} from 'react'

export default function Pagination({getOne, getTwo} : any) {

  return (
    <div className='pagination'>
    <ul className="page-list">
      <li className="page-item">
        <button className="page-link" onClick={() => getOne}>
          1
        </button>
      </li>
       <li className="page-item">
        <button className="page-link" onClick={() => getTwo}>
          2
        </button>
      </li> 
    </ul>
  </div>
  )
}

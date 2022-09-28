import React, {useState} from 'react'

export default function Pagination({fetchPageOne, fetchPageTwo} : any) {

    
  return (
    <div className='pagination'>
    <ul className="page-list">
      <li className="page-item">
        <button className="page-link" onClick={(e) => fetchPageOne()}>
          1
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" onClick={(e) => fetchPageTwo()}>
          2
        </button>
      </li>
    </ul>
  </div>
  )
}

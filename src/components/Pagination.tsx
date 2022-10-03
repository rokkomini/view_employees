import React, { useState } from "react";

export default function Pagination({ pages, changePage }: any) {
  return (
    <div className="pagination">
      <ul className="page-list">
        {[...Array(pages)].map((page, i) => (
          <li className="page-item">
            <button
              key={i}
              className="page-link"
              onClick={(e) => changePage(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

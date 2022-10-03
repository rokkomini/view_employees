import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Pagination({ pages, changePage }: any) {
  return (
    <div className="pagination">
      {[...Array(pages)].map((page, i) => (
        <button
          key={i}
          className="page-link"
          onClick={(e) => changePage(i + 1)}
        >
          {i === 0 ? (
            <>
              <IoIosArrowBack />
              <p>{i + 1}</p>{" "}
            </>
          ) : (
            <>
              <p>{i + 1}</p>
              <IoIosArrowForward />{" "}
            </>
          )}
        </button>
      ))}
    </div>
  );
}

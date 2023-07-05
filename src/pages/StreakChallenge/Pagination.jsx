import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
// import {GrPrevious } from "react-icons/gr"

function Pagination(props) {
  const {currentPage, setCurrentPage, totalPages} = props
//   const [isPrevButton, setIsPrevButton]= useState(false)
//   const [isNextButton, setIsNextButton]= useState(true)

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Tạo danh sách trang
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const pageRangeDisplayed = 5; // Số trang hiển thị tối đa
    let isPrevButton= false
    let isNextButton= true
    if(currentPage > 1 && isPrevButton=== false) {
        pageNumbers.push(
            <li
              data-v-6169587e
              key={v4()}
            //   className={currentPage === currentPage ? "active" : ""}
            >
              <Link
                data-v-6169587e
                // href="javascript:void(0)"
                data-page={currentPage}
                className={"btn-paging"}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <svg data-v-6169587e xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.68 8.109" style={{width: 7, display: "inline-block"}}><path data-v-6169587e="" id="Path_24" data-name="Path 24" d="M16.43,16.859,13,13.43,16.43,10" transform="translate(-12.375 -9.375)" className="btnPrev"></path></svg>
              </Link>
            </li>
          );
          isPrevButton= true
    }
    
    if (totalPages <= pageRangeDisplayed) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            data-v-6169587e
            key={i}
            className={currentPage === i ? "active" : ""}
          >
            <Link
              data-v-6169587e
              // href="javascript:void(0)"
              data-page={i}
              className={currentPage === i ? "active btn-active-paging" : "btn-paging"}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </Link>
          </li>
        );
      }
    } else {
      const leftOffset = Math.max(
        currentPage - Math.floor(pageRangeDisplayed / 2),
        1
      );
      const rightOffset = Math.min(
        leftOffset + pageRangeDisplayed - 1,
        totalPages
      );

      if (leftOffset > 1) {
        pageNumbers.push(
          <li data-v-6169587e key={1}>
            <Link
              data-v-6169587e
              // href="javascript:void(0)"
              data-page={1}
              className={currentPage === 1 ? "active btn-active-paging" : "btn-paging"}
              onClick={() => handlePageChange(1)}
            >
              {1}
            </Link>
          </li>
        );
        if (leftOffset > 2) {
          pageNumbers.push(
            <li key={v4()} data-v-6169587e className="pc">
              <Link
                data-v-6169587e
                // href="javascript:void(0);"
                className="text"
              >
                ...
              </Link>
            </li>
          );
        }
      }

      for (let i = leftOffset; i <= rightOffset; i++) {
        pageNumbers.push(
          <li
            data-v-6169587e
            key={i}
            className={currentPage === i ? "active" : ""}
          >
            <Link
              data-v-6169587e
              // href="javascript:void(0)"
              data-page={i}
              className={currentPage === i ? "active btn-active-paging" : "btn-paging"}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </Link>
          </li>
        );
      }

      if (rightOffset < totalPages) {
        if (rightOffset < totalPages - 1) {
          pageNumbers.push(
            <li key={v4()} data-v-6169587e className="pc">
              <Link
                data-v-6169587e
                // href="javascript:void(0);"
                className="text"
              >
                ...
              </Link>
            </li>
          );
        }
        pageNumbers.push(
          <li
            data-v-6169587e
            key={totalPages}
            className={currentPage === totalPages ? "active" : ""}
          >
            <Link
              data-v-6169587e
              // href="javascript:void(0)"
              data-page={totalPages}
              className={currentPage === totalPages ? "active btn-active-paging" : "btn-paging"}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Link>
          </li>
        );
      }
    }

    pageNumbers.push(
        <li
          data-v-6169587e
          key={v4()}
        //   className={currentPage === currentPage ? "active" : ""}
        >
          <Link
            data-v-6169587e
            // href="javascript:void(0)"
            data-page={currentPage}
            className={"btn-paging"}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg data-v-6169587e xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.68 8.109" style={{width: '7px', display: "inline-block"}}><g data-v-6169587e id="small-left" transform="translate(17.055 17.484) rotate(180)"><path data-v-6169587e id="Path_24" data-name="Path 24" d="M16.43,16.859,13,13.43,16.43,10" transform="translate(0 0)" className="btnNext" /></g></svg>
          </Link>
        </li>
      );
      if(parseInt(currentPage) === parseInt(totalPages) && isNextButton=== true) {
        pageNumbers.pop(
            <li
              data-v-6169587e
              key={v4()}
            //   className={currentPage === currentPage ? "active" : ""}
            >
              <Link
                data-v-6169587e
                // href="javascript:void(0)"
                data-page={currentPage}
                className={"btn-paging"}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <svg data-v-6169587e xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.68 8.109" style={{width: 7, display: "inline-block"}}><path data-v-6169587e="" id="Path_24" data-name="Path 24" d="M16.43,16.859,13,13.43,16.43,10" transform="translate(-12.375 -9.375)" className="btnPrev"></path></svg>
              </Link>
            </li>
          );
          isNextButton= false
    }

    return pageNumbers;
  };

  return (
    <ul data-v-6169587e id="page" className="list-unstyled mb-0">
      {renderPageNumbers()}
    </ul>
  );
}

export default Pagination;

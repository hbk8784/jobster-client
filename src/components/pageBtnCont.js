import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrapper/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnCont = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    if (page === numOfPages) {
      return;
    }
    let newPage = page + 1;
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    if (page === 1) {
      return;
    }
    let newPage = page - 1;
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              type="button"
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button className="next-btn" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnCont;

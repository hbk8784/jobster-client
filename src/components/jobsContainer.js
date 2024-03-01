import React, { useEffect } from "react";
import Wrapper from "../assets/wrapper/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Job from "./job";
import Loading from "./loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnCont from "./pageBtnCont";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnCont />}
    </Wrapper>
  );
};

export default JobsContainer;

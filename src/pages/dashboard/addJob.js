import React from "react";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrapper/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/job/jobSlice";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position || !jobLocation) {
      toast.error("Please fill all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }
    dispatch(createJob({ company, position, jobLocation, status, jobType }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
            labelText="Company"
          />
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
            labelText="Position"
          />
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
            labelText="Status"
          />

          <FormRowSelect
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            labelText="Job Type"
          />

          <FormRow
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="Location"
          />

          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;

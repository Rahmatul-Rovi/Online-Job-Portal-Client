import React from "react";

const AddJob = () => {
  return (
    <form>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>

        <label className="label">Job Title</label>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Job title"
        />

        <label className="label">Company</label>
        <input
          type="text"
          name="company"
          className="input"
          placeholder="Company name"
        />

        <label className="label">Location</label>
        <input
          type="text"
          name="location"
          className="input"
          placeholder="Company Location"
        />

        <label className="label">Company Logo</label>
        <input
          type="text"
          name="company logo"
          className="input"
          placeholder="Company Logo URL"
        />
      </fieldset>

      {/*Job Type */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Type</legend>
        <div className="filter">
          <input
            className="btn filter-reset"
            type="radio"
            name="jobType"
            aria-label="All"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="On-Site"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="Remote"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="Hybrid"
          />
        </div>
      </fieldset>

      {/* Job Category*/}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Category</legend>
        <select defaultValue="Job Category" className="select">
          <option disabled={true}>Job Category</option>
          <option>Engineering</option>
          <option>Marketting</option>
          <option>Finance</option>
        </select>
      </fieldset>
      {/*Application Deadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Application Deadline</legend>
        <input type="date" className="input" />
      </fieldset>
      {/* */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>
      </fieldset>
      {/* */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>
      </fieldset>
    </form>
  );
};

export default AddJob;

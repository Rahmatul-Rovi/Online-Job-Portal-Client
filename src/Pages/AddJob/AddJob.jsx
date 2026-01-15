import React from "react";

const AddJob = () => {
    const handleAddAJob = e => {
        e.preventDefault();
         const form = e.target;
         const formData = new FormData(form);
         const data = Object.fromEntries(formData.entries());
         console.log(data);
    }


  return (
    <form onSubmit={handleAddAJob}>
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
      {/* Salary Range*/}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Salary Range</legend>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Minimum Salary</label>
            <input
              type="text"
              className="input"
              name="salaryMin"
              placeholder="Minimum Salary"
            />
          </div>

          <div>
            <label className="label">Maximum Salary</label>
            <input
              type="text"
              name="SalaryMax"
              className="input"
              placeholder="Maximum Salary"
            />
          </div>

          <div>
            <label className="label">Select a currency</label>
            <select defaultValue="currency" className="select">
              <option disabled={true}>Select a currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </fieldset>
      {/*Job Description */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Description</legend>
        <textarea className="textarea" name="description"  placeholder="Job Description"></textarea>
      </fieldset>

       {/*Job requirement */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Requirement</legend>
        <textarea className="textarea" name="Requirement"  placeholder="Job Requirements (seperate by comma)"></textarea>
      </fieldset>

       {/*Job responsibilities */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job responsibilities</legend>
        <textarea className="textarea" name="responsibilities"  placeholder="Job Responsibilities (seperate by comma)"></textarea>
      </fieldset>
 
     {/* {HR Info} */}
       <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">HR related info</legend>

        <label className="label">HR Name</label>
        <input
          type="text"
          name="hr_name"
          className="input"
          placeholder="HR Name"
        />

        <label className="label">HR Email</label>
        <input
          type="email"
          name="hr_email"
          className="input"
          placeholder="HR Email"
        />

      <input type="submit" className="btn" value="Add Job" />
      </fieldset>
    </form>
  );
};

export default AddJob;

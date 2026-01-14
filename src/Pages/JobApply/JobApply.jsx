import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const linkdln = form.linkdln.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkdln, github, resume);

  }
  return (
    <div>
     <div className="flex gap-5">
         <h3 className="text-4xl">Apply for job</h3>
        <Link to={`/jobs/${jobId}`}>  <h4 className="text-4xl">Job Details </h4> </Link>
     </div>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Linkdln Profile</label>
          <input type="url" name="linkdln" className="input" placeholder="Linkdln profile link" />

          <label className="label">Github Profile</label>
          <input type="url" name="github" className="input" placeholder="Github profile link" />

          <label className="label">Resume</label>
          <input type="url" name="resume" className="input" placeholder="Resume link" />

          <button type="submit" className="btn">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

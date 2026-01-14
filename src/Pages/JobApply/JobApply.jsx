import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-4xl">Apply for job</h3>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Linkdln Profile</label>
          <input type="url" className="input" placeholder="Linkdln profile link" />

          <label className="label">Github Profile</label>
          <input type="url" className="input" placeholder="Github profile link" />

          <label className="label">Resume</label>
          <input type="url" className="input" placeholder="Resume link" />

          <button type="submit" className="btn">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

import { useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Stat from "../Shared/Stat";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://job-portal-server-50h1rzimu-rahmatul-rovis-projects.vercel.app/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading hot jobs...</p>;
  }

  return (
    <div>
      <Banner />
      <HotJobs jobs={jobs} />
      <Stat />
    </div>
  );
};

export default Home;

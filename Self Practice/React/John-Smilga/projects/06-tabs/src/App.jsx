import React, { useEffect, useState } from "react";
import data from "./components/experience";
import { FaAngleDoubleRight } from "react-icons/fa";
import Categories from "./components/Categories";

export default function App() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState(data);

  /* // fetching data from API
  const url = "https://course-api.netlify.app/api/react-tabs-project";
  const [loading, setLoading] = useState(true);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    set(false);
  }; 
  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){ return <h1>Loading...</h1>}
  
  */
  // destructuring will only work when data is fetched already.
  const { company, title, dates, duties } = jobs[value];

  return (
    <main>
      <section className="section">
        <div className="title">
          <h1>experience</h1>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  // className={"job-btn " + (value === index && "active-btn")}
                  className={`job-btn ${value === index && "active-btn"}`}
                  onClick={() => setValue(index)}>
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3 className="text-3xl">{title}</h3>
            <h5 className="job-company">{company}</h5>
            <p className="job-date">{dates}</p>{" "}
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

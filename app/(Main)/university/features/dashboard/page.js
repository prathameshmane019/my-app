import "./dashboard.css";
export default function DashboardPage() {
  return (
    <>

    
      <h1>General Stats</h1>
<<<<<<< HEAD
      <div classname="stats shadow mb-8 mt-7 mx-16 py-6">
        <div classname="stat place-items-center">
          <div classname="stat-title">Number of Students Enrolled</div>
          <div classname="stat-value">50000</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div classname="stat place-items-center">
          <div classname="stat-title">Number of Projects</div>
          <div classname="stat-value text-secondary">3,400</div>
          {/* <div classname="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div classname="stat place-items-center">
          <div classname="stat-title">Number of Departments</div>
          <div classname="stat-value">12</div>
          {/* <div classname="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div classname="stat place-items-center">
          <div classname="stat-title">Number of Domains</div>
          <div classname="stat-value">6</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <h1>Project Status</h1>
      <div classname="stats shadow mb-11 mt-10 mx-16 py-6">
        <div classname="stat place-items-center">
          <div classname="stat-title">Active Projects</div>
          <div classname="stat-value">2,700</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div classname="stat place-items-center">
          <div classname="stat-title">Completed projects</div>
          <div classname="stat-value text-secondary">700</div>
          {/* <div classname="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
      </div>
      <h1>Domain-wise Stats</h1>
      <div classname="stats shadow mb-5 mt-10 mx-16 py-6">
        <div classname="stat place-items-center">
          <div classname="stat-title">Web Development</div>
          <div classname="stat-value">1200</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div classname="stat place-items-center">
          <div classname="stat-title">Mobile Application Development</div>
          <div classname="stat-value text-secondary">750</div>
          {/* <div classname="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div classname="stat place-items-center">
          <div classname="stat-title">Machine Learning</div>
          <div classname="stat-value">450</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <div classname="stats shadow mb-11 mt-4 mx-16 py-6">
        <div classname="stat place-items-center">
          <div classname="stat-title">Artificial Intelligence</div>
          <div classname="stat-value">100</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div classname="stat place-items-center">
          <div classname="stat-title">Blockchain</div>
          <div classname="stat-value text-secondary">700</div>
          {/* <div classname="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div classname="stat place-items-center">
          <div classname="stat-title">IOT</div>
          <div classname="stat-value">200</div>
          {/* <div classname="stat-desc">From January 1st to February 1st</div> */}
=======
      <div className="stats shadow mb-8 mt-7 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Number of Students Enrolled</div>
          <div className="stat-value">50000</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Number of Projects</div>
          <div className="stat-value text-secondary">3,400</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Number of Departments</div>
          <div className="stat-value">12</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Number of Domains</div>
          <div className="stat-value">6</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <h1>Project Status</h1>
      <div className="stats shadow mb-11 mt-10 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Active Projects</div>
          <div className="stat-value">2,700</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Completed projects</div>
          <div className="stat-value text-secondary">700</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
      </div>
      <h1>Domain-wise Stats</h1>
      <div className="stats shadow mb-5 mt-10 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Web Development</div>
          <div className="stat-value">1200</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Mobile Application Development</div>
          <div className="stat-value text-secondary">750</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Machine Learning</div>
          <div className="stat-value">450</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <div className="stats shadow mb-11 mt-4 mx-16 py-6">
        <div className="stat place-items-center">
          <div className="stat-title">Artificial Intelligence</div>
          <div className="stat-value">100</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Blockchain</div>
          <div className="stat-value text-secondary">700</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">IOT</div>
          <div className="stat-value">200</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
>>>>>>> 2d332dbfa517d50556f99e0df484e74ea55e43ef
        </div>


  
      </div>
    </>
  );
}

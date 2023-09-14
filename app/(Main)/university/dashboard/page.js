import "./dashboard.css";
export default function DashboardPage() {
  return (
    <>
      <h1>General Stats</h1>
      <div class="stats shadow mb-8 mt-7 mx-16 py-6">
        <div class="stat place-items-center">
          <div class="stat-title">Number of Students Enrolled</div>
          <div class="stat-value">50000</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Number of Projects</div>
          <div class="stat-value text-secondary">3,400</div>
          {/* <div class="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Number of Departments</div>
          <div class="stat-value">12</div>
          {/* <div class="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Number of Domains</div>
          <div class="stat-value">6</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <h1>Project Status</h1>
      <div class="stats shadow mb-11 mt-10 mx-16 py-6">
        <div class="stat place-items-center">
          <div class="stat-title">Active Projects</div>
          <div class="stat-value">2,700</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Completed projects</div>
          <div class="stat-value text-secondary">700</div>
          {/* <div class="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
      </div>
      <h1>Domain-wise Stats</h1>
      <div class="stats shadow mb-5 mt-10 mx-16 py-6">
        <div class="stat place-items-center">
          <div class="stat-title">Web Development</div>
          <div class="stat-value">1200</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Mobile Application Development</div>
          <div class="stat-value text-secondary">750</div>
          {/* <div class="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Machine Learning</div>
          <div class="stat-value">450</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
      <div class="stats shadow mb-11 mt-4 mx-16 py-6">
        <div class="stat place-items-center">
          <div class="stat-title">Artificial Intelligence</div>
          <div class="stat-value">100</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Blockchain</div>
          <div class="stat-value text-secondary">700</div>
          {/* <div class="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">IOT</div>
          <div class="stat-value">200</div>
          {/* <div class="stat-desc">From January 1st to February 1st</div> */}
        </div>
      </div>
    </>
  );
}

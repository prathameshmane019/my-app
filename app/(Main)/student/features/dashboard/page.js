"use client";
import "./dashboard.css";
export default function DashboardPage() {
  return (
    <>
      <h1>General Stats</h1>
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
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Tech used</th>
              <th>Project Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"></div>
                  </div>
                  <div>
                    <div className="font-bold">Library Management</div>
                    <div className="text-sm opacity-50">Active</div>
                  </div>
                </div>
              </td>
              <td>
                PHP, CSS, Blade, Javascript
                <br />
                <span className="badge badge-ghost badge-sm">
                  Web Development
                </span>
              </td>
              <td>
                <a
                  href="https://github.com/prabhakar267/library-management-system"
                  target="_blank"
                >
                  https://github.com/prabhakar267/library-management-system
                </a>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">
                      Project Title: Library Management
                    </h3>
                    <div className="divider"></div>

                    <p className="py-4">Domain Bucket: Web Development</p>
                    <div className="divider"></div>

                    <p className="py-4">Project description:</p>
                    <p className="ml-4">
                      An automated system to manage a public library. Admin
                      panel for librarians to control and manage the system
                      easily through an interactive interface.
                    </p>
                    <div className="divider"></div>
                    <p className="py-4">
                      Tech Used: PHP, CSS, Blade , Javascript
                    </p>
                    <div className="divider"></div>

                    <p className="py-4">
                      {" "}
                      Project Link:
                      <br />
                      <a
                        className="ml-4"
                        href="https://github.com/prabhakar267/library-management-system"
                        target="_blank"
                      >
                        https://github.com/prabhakar267/library-management-system
                      </a>
                    </p>
                    <div className="divider"></div>
                    <p>Project Thesis:</p>
                    <button className="btn ">
                      <a
                        href="https://core.ac.uk/download/pdf/59773112.pdf"
                        target="_blank"
                      >
                        Open Thesis
                      </a>
                    </button>

                    <div className="divider"></div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"></div>
                  </div>
                  <div>
                    <div className="font-bold">Library Management</div>
                    <div className="text-sm opacity-50">Active</div>
                  </div>
                </div>
              </td>
              <td>
                PHP, CSS, Blade, Javascript
                <br />
                <span className="badge badge-ghost badge-sm">
                  Web Development
                </span>
              </td>
              <td>
                <a
                  href="https://github.com/prabhakar267/library-management-system"
                  target="_blank"
                >
                  https://github.com/prabhakar267/library-management-system
                </a>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">
                      Project Title: Library Management
                    </h3>
                    <div className="divider"></div>

                    <p className="py-4">Domain Bucket: Web Development</p>
                    <div className="divider"></div>

                    <p className="py-4">Project description:</p>
                    <p className="ml-4">
                      An automated system to manage a public library. Admin
                      panel for librarians to control and manage the system
                      easily through an interactive interface.
                    </p>
                    <div className="divider"></div>
                    <p className="py-4">
                      Tech Used: PHP, CSS, Blade , Javascript
                    </p>
                    <div className="divider"></div>

                    <p className="py-4">
                      {" "}
                      Project Link:
                      <br />
                      <a
                        className="ml-4"
                        href="https://github.com/prabhakar267/library-management-system"
                        target="_blank"
                      >
                        https://github.com/prabhakar267/library-management-system
                      </a>
                    </p>
                    <div className="divider"></div>
                    <p>Project Thesis:</p>
                    <button className="btn ">
                      <a
                        href="https://core.ac.uk/download/pdf/59773112.pdf"
                        target="_blank"
                      >
                        Open Thesis
                      </a>
                    </button>

                    <div className="divider"></div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"></div>
                  </div>
                  <div>
                    <div className="font-bold">Library Management</div>
                    <div className="text-sm opacity-50">Active</div>
                  </div>
                </div>
              </td>
              <td>
                PHP, CSS, Blade, Javascript
                <br />
                <span className="badge badge-ghost badge-sm">
                  Web Development
                </span>
              </td>
              <td>
                <a
                  href="https://github.com/prabhakar267/library-management-system"
                  target="_blank"
                >
                  https://github.com/prabhakar267/library-management-system
                </a>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">
                      Project Title: Library Management
                    </h3>
                    <div className="divider"></div>

                    <p className="py-4">Domain Bucket: Web Development</p>
                    <div className="divider"></div>

                    <p className="py-4">Project description:</p>
                    <p className="ml-4">
                      An automated system to manage a public library. Admin
                      panel for librarians to control and manage the system
                      easily through an interactive interface.
                    </p>
                    <div className="divider"></div>
                    <p className="py-4">
                      Tech Used: PHP, CSS, Blade , Javascript
                    </p>
                    <div className="divider"></div>

                    <p className="py-4">
                      {" "}
                      Project Link:
                      <br />
                      <a
                        className="ml-4"
                        href="https://github.com/prabhakar267/library-management-system"
                        target="_blank"
                      >
                        https://github.com/prabhakar267/library-management-system
                      </a>
                    </p>
                    <div className="divider"></div>
                    <p>Project Thesis:</p>
                    <button className="btn ">
                      <a
                        href="https://core.ac.uk/download/pdf/59773112.pdf"
                        target="_blank"
                      >
                        Open Thesis
                      </a>
                    </button>

                    <div className="divider"></div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"></div>
                  </div>
                  <div>
                    <div className="font-bold">Library Management</div>
                    <div className="text-sm opacity-50">Active</div>
                  </div>
                </div>
              </td>
              <td>
                PHP, CSS, Blade, Javascript
                <br />
                <span className="badge badge-ghost badge-sm">
                  Web Development
                </span>
              </td>
              <td>
                <a
                  href="https://github.com/prabhakar267/library-management-system"
                  target="_blank"
                >
                  https://github.com/prabhakar267/library-management-system
                </a>
              </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Details
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center">
                      Project Title: Library Management
                    </h3>
                    <div className="divider"></div>

                    <p className="py-4">Domain Bucket: Web Development</p>
                    <div className="divider"></div>

                    <p className="py-4">Project description:</p>
                    <p className="ml-4">
                      An automated system to manage a public library. Admin
                      panel for librarians to control and manage the system
                      easily through an interactive interface.
                    </p>
                    <div className="divider"></div>
                    <p className="py-4">
                      Tech Used: PHP, CSS, Blade , Javascript
                    </p>
                    <div className="divider"></div>

                    <p className="py-4">
                      {" "}
                      Project Link:
                      <br />
                      <a
                        className="ml-4"
                        href="https://github.com/prabhakar267/library-management-system"
                        target="_blank"
                      >
                        https://github.com/prabhakar267/library-management-system
                      </a>
                    </p>
                    <div className="divider"></div>
                    <p>Project Thesis:</p>
                    <button className="btn ">
                      <a
                        href="https://core.ac.uk/download/pdf/59773112.pdf"
                        target="_blank"
                      >
                        Open Thesis
                      </a>
                    </button>

                    <div className="divider"></div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-outline btn-error">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

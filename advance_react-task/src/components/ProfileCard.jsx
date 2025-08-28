import React from "react";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="dashboard-container">
      <div className="topbar">
        <h1 className="page-title">Advanced React Developer</h1>
        <div className="tabs">
          <span className="active">Technical Questions</span>
          <span>Notes</span>
          <span>System Design</span>
        </div>
      </div>

      <div className="body">
        <div className="sidebar">
          <img src="/profileImg.png" alt="profile" className="profile-img" />
          <h2 className="name">Jacob Martinez</h2>
          <div className="info">
            <p><strong>Skills</strong></p>
            <p>React, JavaScript, TypeScript</p>
            <p><strong>Experience</strong></p>
            <p>7 years</p>
          </div>
        </div>

        <main className="main-content">
          <div className="content-grid">
            <div className="card code-preview">
              <h4>Code Preview</h4>
              <pre>
    {`Import_Match_defants Reset;
    count_appy ()
    count_count_count_> useState() {
    useStateH count [>(
      decrement() decrement(s();
    }
    };`}
              </pre>
            </div>

            <div className="card live-notes">
              <h4>Live Notes</h4>
            </div>
          </div>

          <div className="bottom-grid">
            <div className="card performance">
              <h4>Performance</h4>
              <img src="/performance-img.png" alt="chart" />
            </div>

            <div className="card system-design">
              <h4>System Design Whiteboard</h4>
              <img src="/syste-design.png" alt="diagram" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
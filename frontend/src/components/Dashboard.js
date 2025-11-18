import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <p>
        UNC Charlotte recently celebrated its research excellence with hundreds of students, faculty, and staff participating in events highlighting groundbreaking work across disciplines. The university has been focusing on innovative learning programs, interdisciplinary collaborations, and student engagement in research initiatives. Investments in state-of-the-art facilities, updated curriculum, and community outreach programs allow students to gain real-world experience, reinforcing UNC Charlotte’s mission to combine academic rigor with societal impact. By prioritizing sustainability and technology integration, the university continues to foster a forward-thinking educational environment. The article source can be found <a href="https://inside.charlotte.edu/2025/10/30/hundreds-celebrate-unc-charlottes-research-excellence/" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p>
        Technical aspects: This project uses a React frontend with React Router for page navigation. The backend is built with Node.js, Express, and MySQL, and JWT is used for authentication. The frontend fetches chart data asynchronously from the backend API. The app is deployed on a server with the backend running on port 3000 and the frontend served via NGINX.
      </p>
    </div>
  );
};

export default Dashboard;

import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile">
     
   
        <div className="profile-image">
         
  <img src="assets/images/profile.jpg"/>
        </div>

        <div className="profile-text">
          <h2>About Me</h2>
          <p>
            I am a <strong>Fullstack Web Developer</strong> with a strong foundation
            in modern web technologies and a passion for building scalable,
            maintainable, and user-focused applications. My primary toolkit includes
            <strong> TypeScript, React, Angular, Node.js, Express, SQL, and MongoDB</strong>,
            and I enjoy working across both frontend and backend to deliver complete,
            high-quality solutions. I take pride in writing clean, efficient code and
            in designing architectures that make projects easy to maintain and extend.
          </p>

          <p>
            Beyond the technical side, I bring problem-solving ability, leadership
            experience, and a collaborative approach to development teams. I enjoy
            tackling complex challenges, integrating APIs, and applying modern
            patterns such as Redux for state management and reusable component
            libraries for consistent development. I am also comfortable working with
            tools like Git, Docker, and testing frameworks to ensure code quality and
            smooth delivery.
          </p>

          <p>
            My goal is to contribute to impactful projects where I can combine
            technical expertise with creativity, while continuously learning and
            pushing myself forward as a developer. Whether building from scratch or
            improving existing systems, I strive to deliver software that is both
            functional and elegant.
          </p>
        </div>
      </div>

  );
}

<script>
  import face from '../assets/headshot.jpg';
  import sprite from '../assets/sprite.svg';
</script>

<div style="width: 100%; margin: auto">
  <div class="landing-grid">
    <div class="landing-cell">
      <h1 class="name">Daniel Gawne</h1>
      <img src={face} alt="headshot" class="avatar-img" />
      <div class="banner-text banner-blue">
        <h2 class="subheading">WebDev / DevOps Engineer</h2>
        <hr />
        <p>
          Python | Linux | AWS<br />
          Flask | Django | NodeJS | ReactJS<br />
          OpenTofu | Terraform | Docker | CI/CD
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/dgwne/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <svg class="svg_icon">
              <use href="{sprite}#icon-linkedin"></use>
            </svg>
            <p class="contactLink">LinkedIn</p>
          </a>
          <a href="https://github.com/dgwn" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <svg class="svg_icon">
              <use href="{sprite}#icon-github"></use>
            </svg>
            <p class="contactLink">Github</p>
          </a>
        </div>
      </div>
      <div class="banner-text banner-yellow">
        <h2 class="subheading">About Me</h2>
        <div class="about-text-container">
          <p class="about-text">
            Hello! I am a full stack web developer and devops engineer
            located in the St. Louis area. I am experienced in Python, the
            Django and Flask web frameworks, AWS services, Cloud Computing,
            Infrastructure as Code (OpenTofu/Terraform), Linux server
            administration, Javascript, React, Node, Express, HTML, CSS,
            Git/Github, and Docker. I also have experience doing web design,
            QA testing, UI/UX design, and prototyping in Adobe XD and
            Photoshop. I've worked in the internet industry for over 10 years
            and have done design work since 2010.
          </p>
          <p class="about-text">
            I graduated from the University of Central Florida with a
            <strong>B.A. in Philosophy</strong> and a minor in Sociology.
            My studies involved a research intensive program which developed
            analytic skills through the use of formal logic and critical
            thinking. My program included coursework focused on ethics in
            technology, formal logic, language, communication, philosophy of
            mind, critical theory, media studies, and social trends. I have
            also done coursework through the University of Helsinki in full
            stack development (primarily with the MERN stack) and devops
            (containerization, CI/CD) and am certified as an
            <strong>AWS Solutions Architect Associate</strong>.
          </p>
          <p class="about-text">
            Most recently I have been working in Education Technology at
            <strong>UCF's Center for Distributed Learning</strong> on the
            Learning Systems &amp; Technology team. I started with a focus in
            backend web development with Python (Flask and Django) while also
            picking up chops in the devops space with cloud computing,
            Infrastructure as Code, setting up CI/CD pipelines, and
            containerization. My work has helped to set numerous standards and
            build templates for the team to bootstrap development and
            deployment of new learning applications, helping provide more
            accessible education to university students, and enable faculty and
            instructional designers to create engaging learning experiences. I
            have also contributed to open source and open education more
            broadly, check out my <strong>'Projects'</strong> page for more
            details!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

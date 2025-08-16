export const PORTFOLIO_DATA = {
    coverPage: {
      name: 'Nagaphani Gangadhara',
      title: 'Jr.Software Engineer',
      tagline: 'Backend-first developer specializing in building scalable, high-performance systems. Experienced in Java, Spring Boot, and database design, with a passion for automation and leveraging AI-powered tools to deliver robust solutions. Dedicated to clean code, continuous learning, and collaborating across teams to drive innovation.',
      profilePictureUrl: 'assets/me.jpg', // Path to your profile picture
      contact: {
        email: 'phanigangadhara@gmail.com',
        linkedin: 'https://www.linkedin.com/in/nagaphani-gangadhara-420b5a1aa',
        github: 'https://github.com/phani-star',
        scalerProfile: 'https://www.scaler.com/academy/profile/94e10295c48c/'
      }
    },
    aboutMe: {
      bio: "I'm a backend-focused Full Stack Developer with a strong foundation in Java, Spring Boot, and system architecture. I specialize in building scalable, secure, and high-performance backend systems, with hands-on experience in RESTful APIs, microservices, and database design. Currently working as a Jr.Software Engineer at Cognizant, I've contributed to enterprise-grade applications across domains like energy and travel, modernizing legacy systems and ensuring seamless deployments. I believe in writing clean, testable code and have consistently achieved high code coverage through JUnit and Mockito. While backend is my core strength, I use AI-assisted tools to streamline frontend development and deliver complete solutions. I'm passionate about solving real-world problems through logic, performance optimization, and smart integrations.Outside of work, I enjoy playing cricket and volleyball—activities that keep me energized, focused, and always ready for the next challenge.",
      goals: "My career goal is to continue growing as a full-stack developer, taking on challenging projects that allow me to contribute across the entire software development lifecycle. I am passionate about learning new technologies and leveraging them to solve real-world problems.",
      strengths: ["Java", "Spring Boot", "MySQL", "Problem Solving", "Angular"],
      resumeLink: "assets/Nagaphani_Resume.pdf" // Path to your resume PDF
    },
    skills: {
      programmingLanguages: ['Python', 'Java', 'JavaScript'],
      frameworksLibraries: ['Angular', 'Spring Boot', 'Spring framework', 'Bootstrap', 'Junit', 'Mockito'],
      toolsPlatforms: ['GitHub Copilot (AI-powered code completion and suggestions)', 'Git', 'GitHub', 'Git Bash', 'Jira', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Jenkins', 'Maven', 'Gradle',  'ServiceNow', 'Splunk', 'MySQL Workbench', 'Teradata Studio','CCB(Customer Care & Billing) portal'],
      databases: ['MySQL', 'PostgreSQL'],
      softSkills: ['Problem Solving', 'Teamwork', 'Logical thinking', 'Adaptability', 'Time Management','AI-assisted problem solving','Effective prompt engineering']
    },
    projects: [
      {
        title: 'Hotel Room Booking System',
        description: 'Developed a robust backend for a Hotel Room Booking System, enabling users to efficiently search for available rooms, make reservations, and manage their bookings',
        techStack: ['Java', 'Spring Boot', 'Junit', 'Mockito', 'RESTful APIs'],
        screenshots: [
          'assets/images/projects/hotel-booking-dashboard.jpg',
          'assets/images/projects/hotel-booking-room-page.jpg',
          'assets/images/projects/hotel-booking-checkout.jpg'
        ],
        demoLink: 'https://demo.hotelbooking.com',
        githubRepo: 'https://github.com/phani-star/HotelReservationBackendRepo',
        role: 'Full-stack Developer',
        contributions: [
          'Developed reusable backend services for room management and booking.',
          'Optimized database queries, improving response time.',
          'Implemented a comprehensive user authentication system with features such as email/username-based login, password reset functionality.'
        ],
        challenges: [
          'Implementing logic to handle simultaneous booking requests for the same room. Without robust concurrency controls, multiple users could potentially book the same room, leading to overbookings and customer dissatisfaction.',
          'Maintaining the integrity and consistency of booking data across various interconnected entities (rooms, users, reservations) in the database.',
          'Developing a secure user login and registration system without relying on a framework like Spring Security.'
        ]
      },
      {
        title: 'Personal Portfolio',
        description: 'A web application that allows users to create and manage their portfolios.',
        techStack: ['Angular', 'Typescript', 'HTML', 'CSS', 'Angular material', 'RxJS', 'Git', 'GitHub Copilot'],
        screenshots: [
          'assets/images/projects/portfolio-creator-main.jpg',
          'assets/images/projects/portfolio-creator-editor.jpg'
        ],
        demoLink: 'https://portfolio-creator.app.io',
        githubRepo: 'https://github.com/phani-star/Portfolio-Angular',
        role: 'Full-stack Developer',
        contributions: [
          'Designed and implemented a responsive single-page portfolio using Angular.',
          'Developed modular and reusable UI components with Angular Material.',
          'Integrated dynamic routing for seamless navigation between sections.',
          'Used TypeScript for type safety and maintainable code.'
        ]
      },
      // Add more projects here
    ],
    education: [
      {
        degree: 'Bachelor of Technology in Computer Engineering',
        institution: 'Jawaharlal Nehru Technological University Hyderabad',
        location: 'Hyderabad, Telangana',
        startDate: 'July 2018',
        endDate: 'September 2024',
        gpa: '7.0/10.0',
        grade: 'First Class',
        relevantCoursework: [
          'Programming for Problem Solving',
          'Object-Oriented Programming',
          'Operating Systems',
          'Database Management Systems',
          'Software Engineering',
          'Computer Networks'
        ],
        projects: ['Final Year Project: Smart Healthcare Recommender System'],
        honors: []
      }
    ],
    experience: [
      {
        company: 'Cognizant',
        location: 'Hyderabad, Telangana',
        title: 'Programmer Analyst',
        startDate: 'March 2025',
        endDate: 'Present',
        client: 'Tucson Electric Power',
        description: 'Collaborated on backend upgrades and codebase optimization for improved system performance , ensuring compatibility with the latest Spring standards and improving system reliability.',
        responsibilities: [
          'Migrated backend applications from Spring Framework 5 to Spring 6 and Spring Boot 2 to Spring Boot 3.5.',
          'Resolved deprecated code issues, compilation errors, and refactored logic for performance gains.',
          'Implemented JUnit test cases with >80% code coverage and ensured CI/CD pipeline success via Jenkins.',
          'Validated application performance across environments through functional testing.',
          'Monitored real-time logs using Splunk to detect and troubleshoot issues.',
          'Handled incidents and service requests via ServiceNow, resolving customer queries efficiently.',
          'Verified backend data in the CCB portal to ensure billing accuracy and consistency.'
        ],
        technologiesUsed: ['Java', 'Spring Boot','Spring', 'JUnit', 'Jenkins', 'Splunk', 'ServiceNow', 'CCB Portal', 'Git'],
        clients: [],
        awards: []
      },
      {
        company: 'Cognizant',
        location: 'Bangalore, Karnataka',
        title: 'Programmer Analyst',
        startDate: 'March 2024',
        endDate: 'February 2025',
        client: 'Expedia',
        description: 'Focused on security, data validation, and manual testing for Expedia’s backend systems, ensuring data integrity and system stability.',
        responsibilities: [
          'Identified and resolved system vulnerabilities to enhance security.',
          'Maintained codebase using Git and ensured version control best practices.',
          'Extracted and analyzed data from MySQL to verify test cases and maintain data integrity.',
          'Conducted manual testing to validate system functionality.',
          'Cross-verified Teradata data against MySQL records for consistency during client validation.',
          'Collaborated with clients and team members to gather requirements and deliver solutions.',
          'Gained experience in project planning, task management, and meeting delivery timelines.'
        ],
        technologiesUsed: ['Java', 'MySQL', 'Git', 'Teradata', 'Manual Testing'],
        clients: [],
        awards: []
      },
      {
        company: 'Cognizant',
        location: 'Hyderabad, Telangana',
        title: 'Programmer Analyst Trainee',
        startDate: 'March 2023',
        endDate: 'February 2024',
        description: 'Worked on full-stack development projects, integrating backend services with dynamic frontend interfaces.',
        responsibilities: [
          'Developed and maintained backend services using Spring Boot.',
          'Built responsive user interfaces using Angular.',
          'Designed and managed relational databases with MySQL.',
          'Ensured seamless integration between frontend and backend components.'
        ],
        technologiesUsed: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Git'],
        clients: [],
        awards: []
      },
      {
        company: 'Cognizant',
        location: 'Hyderabad, Telangana',
        title: 'Java Full Stack Intern',
        startDate: 'June 2022',
        endDate: 'December 2022',
        description: 'Gained hands-on experience in full-stack development and testing while collaborating on team-based projects.',
        responsibilities: [
          'Developed backend services using Java 8 and Spring Boot.',
          'Created user interfaces with Angular for dynamic web applications.',
          'Performed unit testing using JUnit and Mockito.',
          'Managed and queried databases using MySQL.',
          'Collaborated with a team of 4 to deliver project milestones.'
        ],
        technologiesUsed: ['Java 8', 'Spring Boot', 'Angular', 'JUnit', 'Mockito', 'MySQL', 'Git'],
        clients: [],
        awards: []
      }
    ],
    certifications: [
      {
        name: 'Java',
        issuer: 'Scaler',
        dateIssued: 'January 2024',
        imageUrl: 'assets/java.png', // Path to your certificate image
        credentialUrl: 'https://drive.google.com/file/d/1Oc5C-qtEKvTbbuYhihvPJkFwROfswNBn/view?usp=sharing' // Optional
      },
      {
        name: 'Data Structures and Algorithms',
        issuer: 'Scaler',
        dateIssued: 'February 2024',
        imageUrl: 'assets/dsa.png', // Path to your certificate image
        credentialUrl: 'https://drive.google.com/file/d/1kzI8_5odUPySTn71Ihlh021HAcqyqyRz/view?usp=sharing' // Optional
      },
      {
        name: 'Databases and SQL',
        issuer: 'Scaler',
        dateIssued: 'March 2024',
        imageUrl: 'assets/sql.png', // Path to your certificate image
        credentialUrl: 'https://drive.google.com/file/d/1_V98XVb4xBHfhjj3m5Y3OYHrTKoQm0Jl/view?usp=sharing' // Optional
      },
      {
        name: 'AI Assisted Code Companion',
        issuer: 'Cognizant',
        dateIssued: 'January 2025',
        imageUrl: 'assets/copilot.png', // Path to your certificate image
        credentialUrl: 'https://drive.google.com/file/d/1cpi1eUOQE6WLrBAVGu8oBmSjdF51Wsc3/view?usp=sharing' // Optional
      },
      {
        name: 'Site Reliability Engineering Essentials',
        issuer: 'Cognizant',
        dateIssued: 'January 2025',
        imageUrl: 'assets/sre.png', // Path to your certificate image
        credentialUrl: 'https://drive.google.com/file/d/1LvGOENM5KPTBwNEX2IH_Dr_dFOyRvvde/view?usp=sharing' // Optional
      }
      // Add more certificates as needed
    ],
    contact: {
      tagline: 'Feel free to reach out if you have any questions, opportunities, or just want to connect!',
      email: 'phanigangadhara@gmail.com',
      phone: '+91 9177451800', // Optional
      location: 'Karimnagar, Telangana, India', // Optional
    }
    // ... other sections like achievements, etc.
  };
export interface ResumeEntry {
  company: string;
  roles: ResumeRole[];
}

export interface ResumeRole {
  title: string;
  descriptions: string[];
}

export const RESUME_ENTRIES: ResumeEntry[] = [
  {
    company: "Vista",
    roles: [
      {
        title: "Software Development Intern",
        descriptions: [
          "Completed over 100 Ultimate Angular training videos for modern web development.",
          "Developed the front-end (Angular/HTML/SCSS), back-end (C#/.NET/SQL), and unit tests for a large feature."
        ]
      },
      {
        title: "Software Support Specialist Intern",
        descriptions: [
          "Interacted with customers, IT teams, developers, and other stakeholders via email and phone to solve software-related problems for movie theaters, with a focus on Regal Cinemas and web technology (SQL, Windows, IIS).",
          "Wrote technical documentation for a cloud-based staff scheduling application (Angular)."
        ]
      }
    ]
  },
  {
    company: "iCode",
    roles: [
      {
        title: "Mentor",
        descriptions: [
          "Served as the sole instructor for 5 sessions of a JobCorps class on Python.",
          "Taught basic programming concepts (loops, functions, etc...) to underprivilged adults aged 20-25."
        ]
      }
    ]
  },
  {
    company: "TilieFish",
    roles: [
      {
        title: "Founder",
        descriptions: [
          "Worked with two students from RIT and USC to develop an application (Java) that runs multiple instances of the same virtual world simultaneously, using Redis for synchronization.",
          "Co-created an LLC after my team's product generated over $2,000 in profit.",
          "Processed 116 payments from 76 customers and dealt with 2 customer disputes via PayPal."
        ]
      }
    ]
  },
  {
    company: "Intel",
    roles: [
      {
        title: "Cloud Software Engineering Intern",
        descriptions: [
          "Submitted 14 patch sets, resolved 2 bugs related to cloud authentication, and made 5 other open source contributions (Python/OpenStack).",
          "Developed and presented a proof-of-concept library that allows for cross-language compatibility between Intel's GoLang telement agent and Java plugins (JSON-RPC)."
        ]
      }
    ]
  }
];

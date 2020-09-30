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
    company: 'Amazon',
    roles: [
      {
        title: 'Software Development Engineer Intern',
        descriptions: [
          'Made a feature for highly customizable social media campaigns from start to finish, using AWS, React, and Java, as well as Cypress for UI tests.',
          'Led a technical design review with senior developers, comparing 6 ways of implementing large scale data storage & retrieval for my feature.',
          'Increased the quality of a production codebase by resolving 300+ linting errors across 188 files.'
        ]
      }
    ]
  },
  {
    company: 'Vista',
    roles: [
      {
        title: 'Software Development Intern',
        descriptions: [
          'Completed over 100 Ultimate Angular training videos for modern web development.',
          'Developed the front-end (Angular/HTML/SCSS), back-end (C#/.NET/SQL), and unit tests for a large feature.'
        ]
      },
      {
        title: 'Software Support Specialist Intern',
        descriptions: [
          'Interacted with customers, IT teams, developers, and other stakeholders via email and phone to solve software-related problems for movie theaters, with a focus on Regal Cinemas and web technology (SQL, Windows, IIS).',
          'Wrote technical documentation for a cloud-based staff scheduling application (Angular).'
        ]
      }
    ]
  },
  {
    company: 'TilieFish',
    roles: [
      {
        title: 'Founder',
        descriptions: [
          'Worked with two students from RIT and USC to develop an application (Java) that runs multiple instances of the same virtual world simultaneously, using Redis for synchronization.',
          'Co-created an LLC after my team\'s product generated over $2,000 in profit.',
          'Processed 116 payments from 76 customers and resolved 2 customer disputes through PayPal.'
        ]
      }
    ]
  },
  {
    company: 'Intel',
    roles: [
      {
        title: 'Cloud Software Engineering Intern',
        descriptions: [
          'Submitted 14 patch sets, resolved 2 bugs related to cloud authentication, and made 5 other open source contributions (Python/OpenStack).',
          'Developed and presented a proof-of-concept library that allows for cross-language compatibility between Intel\'s GoLang telement agent and Java plugins (JSON-RPC).'
        ]
      }
    ]
  }
];

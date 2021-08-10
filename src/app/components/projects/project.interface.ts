export interface Project {
  name: string;
  caption: string;
  tags: string; // Tags like the names of technologies used in the project
  thumbnailPath: string; // Path to clickable thumbnail that will display in the projects section
  cssThumbnailId?: string; // The (optional) ID for styles to apply to the thumbnail in the projects section
}

export const PROJECTS: Project[] = [
  {
    name: 'HeroEngineer.com',
    caption: 'Course Website',
    tags: 'React, Java, MongoDB, Docker, Linux, Nginx',
    thumbnailPath: '../../../assets/projects/heroengineer.png'
  },
  {
    name: 'Pycoal Parallel',
    caption: 'Python Toolkit',
    tags: 'Python, NumPy, Open Source',
    thumbnailPath: '../../../assets/projects/pycoal-parallel.jpg'
  },
  {
    name: 'theoilie.com',
    caption: 'Personal Website',
    tags: 'Angular, JavaScript/TypeScript, HTML5/CSS3, Linux, Nginx',
    thumbnailPath: '../../../assets/projects/personal-site.png'
  },
  {
    name: 'TradeCatcher',
    caption: 'Automated Stocks Trading Bot',
    tags: 'Java, Docker, MongoDB, Redis, Linux',
    thumbnailPath: '../../../assets/projects/tradecatcher.jpg'
  },
  {
    name: '201-scheduler',
    caption: 'Collaborative Calendar Website',
    tags: 'Apache Spring, HTML/CSS, MongoDB, JavaScript/jQuery, Docker',
    thumbnailPath: '../../../assets/projects/201-scheduler.png'
  },
  {
    name: 'Snap MySQL Plugin',
    caption: 'Intel\'s Data-Collection Agent',
    tags: 'Go, MySQL',
    thumbnailPath: '../../../assets/projects/snap.png'
  },
  {
    name: 'GameDispenser',
    caption: 'Minigame Framework',
    tags: 'Java, MySQL, Developer-facing',
    thumbnailPath: '../../../assets/projects/gamedispenser.png',
    cssThumbnailId: 'game-dispenser-project-thumbnail'
  }
];

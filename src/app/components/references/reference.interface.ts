export interface Reference {
  name: string;
  title: string;
  recommendationText: string;
  imageUri: string;
}

export const REFERENCES: Reference[] = [
  {
    name: 'Jesse Parisian',
    title: 'Senior Software Developer @ Cross River',
    recommendationText: `I am a Senior Software Developer and Team Lead at Vista and was Theo's direct manager over the course of his internship. I was very impressed with Theo during his time at Vista; he learned new concepts very quickly and was able to demonstrate a high level of understanding in his work. He got up to speed very quickly and completed his internship project ahead of schedule. A core component of his internship was to develop a new piece of functionality (a full feature) in our web based Staff Scheduling application called Time Card Manager. His project involved working on the front end of the application which was written in Angular 7. The project also involved working on the back end which included SQL Server, Entity Framework and .NET Web API. He also wrote unit tests around the functionality as part of the project. Our team uses a combination of Git and TFS for source control so Theo had some good exposure to both. Theo was comfortable working independently, but wasn't afraid to reach out to the team whenever he had questions or needed assistance. Theo was great to work with and everyone on the team enjoyed having him around. He did an excellent job and has a bright future ahead. We'd be happy to work with Theo again.`,
    imageUri: 'assets/jesse-parisian.jpeg'
  },
  {
    name: 'Manipushpak Gupta',
    title: 'Software Engineer @ Microsoft',
    recommendationText: `I’ve known Theo for almost a year now and if there’s one thing that I know about him, it’s his competency and dedication. I lived with him over the summer and can vouch for his ability to be consistent. I saw him wake up at the same early time on days when he wasn’t required to, just to work on his projects. We would also have long conversations about technology and startups and I could judge he has a great passion for it during our conversations. He’s also a self-starter. He works on technical projects - like his personal website - on the side when he has time, and recently started to improve his coding skills by doing coding challenges daily. Based on his dedication and competency, Theo would be a great asset and I would recommend working with him to anyone.`,
    imageUri: 'assets/mani-gupta.jpeg'
  },
  {
    name: 'Nate Potter',
    title: 'Software Engineer II @ Duolingo',
    recommendationText: `Theo was an intern in my group at Intel's Open Source Technology Center as a high school student in the summer of 2015. He was a quick learner and valuable to the team, catching on quickly to working in open source and fundamentals in software development for an Infrastructure-as-a-Service project. By the end of his internship, he had gone through the process of community contribution in OpenStack and had multiple patches merged upstream in its Identity project, Keystone.`,
    imageUri: 'assets/nate-potter.jpeg'
  }
];

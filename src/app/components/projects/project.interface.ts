export interface Project {
  name: string;
  caption: string;
  coverIcon: string;
  techStack: string;
  cssId?: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    name: "HeroEngineer.com",
    caption: "Course Website",
    coverIcon: "../../../assets/projects/heroengineer.png",
    techStack: "React, Java, MongoDB, Docker, Linux, Nginx",
    description: `
      <h4>Project Background</h4>
      As the website for the Advanced Writing for Engineers class at USC, this project serves as a learning environment for students.
      It provides a fun experience based around the concept of heroes in engineering, using assignments and live team forming and messaging features to explore what it means to be ethical and heroic as an engineer.
      The professor can create assignments on the fly and decide which class sections are allowed to view/submit the assignment or to receive their grades for each assignment.
      So far the website has supported about 50 students over the course of 2 semesters, including this current semester.

      <br /><br />
      Some key features for students are:
      <br />
      * account and avatar creation / customization
      <br />
      * live, in-class assignments
      <br />
      * quizzes and quests system that allows for rapid feedback on correct/incorrect answers
      <br />
      * team formation with classmates based on shared interests that can be expressed through the website in a forum-post style
      <br />
      * file upload for assignments that require it

      <br /><br />
      And some key features for professors are:
      <br />
      * class sections and rosters -- only allow verified students to sign up, and divide them into classes
      <br />
      * automatic quiz grading, as well as manual grading with an option to provide feedback for subjective assignments (for example, questions that require paragraph answers rather than True/False answers)
      <br />
      * highly customizable quests, quizzes, and in-class writing prompts that can be hidden or displayed on a per-class basis and can be given any number of questions and answers

      <h4>Technical Work</h4>
      Using the professor's guidance on feature requests over the course of hundreds of emails, I made this project from start to finish using React for the frontend and Java Spring for the backend, with MongoDB for data storage.
      I designed the UI/UX and improved it based on professor and student feedback. I also purchased and installed an SSL certificate on a dedicated Linux machine. I use Nginx to route traffic and host both HeroEngineer.com and theoilie.com on the same server.
      This project has involved bug fixes and administrative work such as taking database backups and deploying updates. I use Docker and tmux to minimize disruptions to students and to keep administrative work organized.

      <h4>Source Code</h4>
      Since this project involves student grades, I keep the code private to try to minimize the chance of any tech-savvy engineering students finding bugs to exploit.
      You're welcome to visit <a class="link" href="https://heroengineer.com">HeroEngineer.com</a> and login with the email "test@usc.edu" and the password "password" to see the site in action.
      Note that this is a student site that only supports desktops. Mobile support is planned for the future.
      `
  },
  {
    name: "Pycoal Parallel",
    caption: "Python Toolkit",
    coverIcon: "../../../assets/projects/pycoal-parallel.jpg",
    techStack: "Python, NumPy, GitHub",
    description: `
      <h4>Project Background</h4>
      Pycoal Parallel identifies coal mines and correlates them with geographic features such as rivers and lakes in order to understand how coal mining can negatively impact water supplies.
      It takes images from NASA instruments, which are used in airplanes to collect information-rich "hyperspectral" images of the land below, and then it classifies any minerals in these images based on their light signatures.
      <br />
      <h4>Individual Contributions</h4>
      These are the contributions that I performed most or all of the work for:
      <br />
      * Created functionality to visualize the proximity of dams and reservoirs to dangerous sludge produced by mining (for coal or other natural resources)
      <br />
      * Resolved over 40 static code analysis issues
      <br />
      * Improved documentation and open source accessibility, including fixing and improving unit tests
      <br />
      * Generated mineral-classified examples. This involved finding geographic areas of interest from NASA archives and then running algorithms, some of which take days to complete

      <h4>Team Contributions</h4>
      I worked as part of a 5-student team on this capstone project, serving as the point of contact between our team and the stakeholder from NASA JPL.
      We coordinated Agile-style weekly sprint meetings over Slack and WebEx.
      Our group worked together in dividing up work, resolving blockers, and checking each other's contributions for accuracy and quality.
      Some significant project contributions that I was tangentially a part of (but did not primarily produce) are:
      <br />
      * Reduced classification algorithm runtime from 45 minutes to 6 minutes, partially by using more efficient NumPy operations
      <br />
      * Increased the breadth of support for algorithm acceleration based on the hardware available (CPU acceleration, GPU acceleration, CUDA support, etc.)


      <h4>Source Code</h4>
      The source code can be found <a class="link" href="https://github.com/capstone-coal">here</a>, and more information on COAL can be found <a class="link" href="https://capstone-coal.github.io/">here</a>.
      <br />
      For a list of my individual contributions, click <a class="link" href="https://github.com/capstone-coal/pycoal/issues?utf8=%E2%9C%93&q=author%3ALactem+">here</a>
      `
  },
  {
    name: "theoilie.com",
    caption: "Personal Website",
    coverIcon: "../../../assets/projects/personal-site.png",
    techStack:
      "Angular 8, JavaScript/TypeScript, HTML5/CSS3, Linux, Nginx",
    description: `
      I built this portfolio website with the 3 main purposes of:
      <div style="padding-left: 3%;">
      1. Gaining a better understanding of Angular and front-end design
      <br />
      2. Putting myself out there to developers and other talented staff who might want to work with me on a startup (send me a message in the contact section!)
      <br />
      3. Having a front-end project to show off
      </div>
      <br />
      I originally used Angular 7 with Less CSS, and I rented a Linux machine to install an SSL certificate and deploy the site with Apache Web Server.
      I've since updated to Angular 8 and use Nginx to make both theodoreilie.com and theoilie.com (optionally with a "www." before it) work with HTTP and HTTPS (they're all configured to redirect to theoilie.com using HTTPS).
      The site is made mobile-first and responsive, with the goal of supporting as many modern devices and browsers as possible.
      I've tested it on iPhone 7, iPhone X, iPad, and screen sizes 11 inches through 27 inches -- plus on Safari, Chrome, and FireFox.

      <h4>Source Code</h4>
      Since this website is partially meant to be a demonstration of my front-end abilities, the source code is publicly available.
      You can view it <a class="link" href="https://github.com/Lactem/portfolio-website">here</a>.
      `
  },
  {
    name: "TradeCatcher",
    caption: "Automated Stocks Trading Bot",
    coverIcon: "../../../assets/projects/tradecatcher.jpg",
    techStack: "Java, Docker, MongoDB, Redis, Linux",
    description: `
      TradeCatcher is a fully automated stocks trading bot with 3 components: collection, analysis, and trading.
      <h4>Setup</h4>
      I configured an Artifactory repository on an OVH-hosted Linux machine to store common dependencies used across the 3 Java projects involved in TradeCatcher, as well as their Gradle scripts for building and deploying the artifacts.
      I also wrote Docker scripts that build the 3 projects and create a network that includes databases (Redis and Mongo).

      <h4>Data Collection</h4>
      Using the APIs provided by IEX and AlphaVantage, I developed a portion of the bot to collect minute-by-minute data from multiple sources, remove any minutes with missing information, and store it all in MongoDB.

      <h4>Data Analysis</h4>
      The bot originally tried to learn from the data and fit it into models.
      Since people have been trying that approach for decades with little success, we decided to instead use a collection of well-known performance indicators.
      Rather than attempting to predict the best stock to buy or sell, the bot filters stocks down to the least risky ones and buys those.
      <br />
      Since analysis originally took a long time when fitting to machine learning models, I used Netty (a non-blocking I/O framework) to create a central proxy with which multiple analysis computers could send data.
      I used Google's Protocol Buffers mechanism to establish a way for the multiple instances of analysis servers to send standardized messages (the results of their analysis) to the proxy.
      This way, the analysis from many different symbols could be available in one program.
      Each analysis server knows which symbols to collect based on a central Redis server that it communicates to. This also lets the proxy know how many / which analysis servers are online.

      <h4>Trading</h4>
      The trading portion was primarily developed by someone else.
      It utilizes TD Ameritrade's public API to query an account, allowing the bot to buy and sell without any human intervention.

      <h4>Future</h4>
      The bot was originally coded in Java and built to handle resource-intensive analysis of many stock symbols.
      The complexity is hard to maintain with only 2 people, and Java had some issues with machine learning support.
      As a result, we're currently rebuilding a smaller version of the bot in Python.
      I also plan to create a web panel for better visualization of the data, as well as to understand why the bot makes certain trades.
      `
  },
  {
    name: "201-scheduler",
    caption: "Collaborative Calendar Website",
    coverIcon: "../../../assets/projects/201-scheduler.png",
    techStack: "Apache Spring, HTML/CSS, MongoDB, JavaScript/jQuery, Docker",
    description: `
      As a final project for a Java/Web class, I led a group of 3 students through the creation of an idea we came up: a website for clubs and organizations to share calendars, edit them concurrently, and easily view conflicts with other club/organizations' calendars.
      My individual responsibilities included:
      <div style="padding-left: 3%;">
      * Setting up the Apache Spring project with Maven, and providing documentation for the other students to install the dependencies (the team used both Windows and Mac, so we had to support both).
      <br />
      * Dockerizing the project so that the MongoDB database shipped with it.
      This eliminated the need for new admins to install a database and made starting the project as easy as:
      <br />
      Cloning the project: git clone https://github.com/Lactem/201-scheduler.git && cd 201-scheduler
      <br />
      and then running the project: docker pull tilie/scheduler && docker-compose up
      <br />
      * Created endpoints and functionality for user registration and login, as well as calendar creation, editing, and sharing.
      <br />
      * Used WebSockets (using StompJS) to implement concurrent calendar editing (like Google Docs but with calendar events instead of text)
      </div>

      <br />
      As a team we presented to the class and professor for 10 minutes about our technology stack, features, and overall experiences.
      We also gave a 5-minute live demonstration.

      <h4>Source Code</h4>
      The source code is available <a class="link" href="https://github.com/lactem/201-scheduler">here</a>.
      `
  },
  {
    name: "Snap MySQL Plugin",
    caption: "Intel's Data-Collection Agent",
    coverIcon: "../../../assets/projects/snap.png",
    techStack: "GoLang, MySQL",
    description: `
      Snap is Intel's telemetry agent.
      It collects information on clusters of devices, processes it, and then publishes it for system administrators to view.
      My contribution to the project is a plugin that receives information from the Snap framework and publishes it to a MySQL database.
      This plugin includes unit and integration tests.

      <h4>Source Code</h4>
      The source code is available <a class="link" href="https://github.com/intelsdi-x/snap-plugin-publisher-mysql">here</a>.
      `
  },
  {
    name: "GameDispenser",
    caption: "Minigame Framework",
    coverIcon: "../../../assets/projects/gamedispenser.png",
    techStack: "Java, MySQL, Code Documentation/JavaDocs",
    cssId: "game-dispenser-project",
    description: `
      <h4>Framework</h4>
      My earliest coding projects were for the popular open-world game Minecraft.
      I worked with a more experienced developer to create a framework for other developers to make their own mini-games within Minecraft.
      Some of the key features include:
      <div style="padding: 3%;">
      * Selecting 3D points to create arenas, as well as designating sub-sections of the arenas for customizable functionality
      <br />
      * Game cycle logic with various phases (waiting, starting, playing, ending, spectating) and ability to instantiate multiple games
      <br />
      * Utily code for tasks such as sending messages and saving/loading item and 3D map information to/from files
      </div>

      <h4>TNT Run</h4>
      As a demonstration of the framework, I coded a mini-game called TNT Run.
      Players in this game would run around on exploding layers of ground and the last player standing won.
      I partnered with a popular mini-game network to feature TNT Run to their userbase of over 1 million unique players.

      <h4>Plants Versus Zombies</h4>
      As a larger game, I re-made the popular mobile game Plants Versus Zombies (PvZ) in Minecraft.
      This involved devising an algorithm to assign players to either the plants or zombies team, and then placing players in different rows so that each row has a plants-to-zombies ratio that is challenging enough for both teams.
      I also created a rewards and randing system that stores information in a MySQL database and allows players to compare various statistics such as win rate with other players.
      The project received over 7,000 downloads on CurseForge (a popular gaming site), and a YouTuber with 70,000 subscribers released a tutorial video on the mini-game.

      <h4>Source Code</h4>
      There is public source code available for all 3 projects:
      <div style="padding: 3%;">
      * <a class="link" href="https://github.com/Lactem/GameDispenser">GameDispenser</a> (more non-technical information available at <a class="link" href="https://bukkit.org/threads/gamedispenser-minigame-manager-and-library.304104/">Bukkit/CurseForge</a>)
      <br />
      * <a class="link" href="https://github.com/Lactem/Arkham-TNT-Run">TNT Run</a>
      <br />
      * <a class="link" href="https://github.com/Lactem/PvZ">Plants Versus Zombies</a> (more non-technical information available at <a class="link" href="https://dev.bukkit.org/projects/plants-vs-zombies">Bukkit/CurseForge</a>)
      </div>
      `
  }
];

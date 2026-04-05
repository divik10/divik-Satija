export type ImageAsset = {
  src: string;
  alt: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "github" | "linkedin";
  href: string;
};

export type HeroSection = {
  type: "hero";
  firstName: string;
  lastName: string;
  tagLine: string;
};

export type BiographySection = {
  type: "biography";
  heading: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  avatar: ImageAsset;
};

export type TechListItem = {
  techName: string;
  techColor?: string;
};

export type TechListSection = {
  type: "tech_list";
  heading: string;
  items: TechListItem[];
};

export type ExperienceItem = {
  title: string;
  timePeriod: string;
  institution?: string;
  description: string[];
};

export type ExperienceSection = {
  type: "experience";
  heading: string;
  items: ExperienceItem[];
};

export type ContentIndexSection = {
  type: "content_index";
  heading: string;
  contentType: "Project" | "Blog";
  description: string[];
  viewMore: string;
  fallbackItemImage: ImageAsset;
};

export type TextBlock = {
  type: "text_block";
  text: string[];
};

export type ImageBlock = {
  type: "image_block";
  image: ImageAsset;
};

export type PageSection =
  | HeroSection
  | BiographySection
  | TechListSection
  | ExperienceSection
  | ContentIndexSection;

export type ArticleSection = TextBlock | ImageBlock;

export type Meta = {
  title: string;
  description: string;
};

export type ContentItem = {
  uid: string;
  title: string;
  date: string;
  tags: string[];
  meta: Meta;
  hoverImage?: ImageAsset;
  slices: ArticleSection[];
};

export type SitePage = {
  uid: string;
  meta: Meta;
  slices: PageSection[];
};

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const siteData = {
  siteUrl: resolvedSiteUrl,
  settings: {
    name: "Divik Satija",
    navItems: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
    ] satisfies NavItem[],
    ctaLabel: "Let’s Talk",
    ctaLink: "mailto:diviksatija99@gmail.com",
    socialLinks: [
      { platform: "github", href: "https://github.com/divik10" },
      {
        platform: "linkedin",
        href: "https://www.linkedin.com/in/divik-satija/",
      },
    ] satisfies SocialLink[],
    meta: {
      title: "Divik Satija | Creative Developer",
      description:
        "Creative developer portfolio built with Next.js, GSAP, React Three Fiber, and Tailwind CSS.",
    },
  },
  homepage: {
    meta: {
      title: "Divik Satija | Creative Developer",
      description:
        "Interactive portfolio blending frontend engineering, motion design, and immersive web experiences.",
    },
    slices: [
      {
        type: "hero",
        firstName: "Divik",
        lastName: "Satija",
        tagLine: "SOFTWARE ENGINEER",
      },
    ] satisfies PageSection[],
  },
  pages: [
    {
      uid: "about",
      meta: {
        title: "About | Divik Satija",
        description:
          "About Divik Satija, a frontend-focused engineer building polished interfaces, real-world products, and immersive web experiences.",
      },
      slices: [
        {
          type: "biography",
          heading: "About Me",
          description: [
            "I build things that work, and sometimes things that don't. Until they do.",
            "I'm Divik, a full-stack developer fresh out of Punjab Engineering College with a borderline unhealthy obsession with clean code and unsolved problems.",
            "I'm the kind of person who reads error messages like they're clues, not obstacles. Who stays on a bug longer than is strictly reasonable, not out of stubbornness, but because something in me genuinely needs to understand why. I care about the craft. Not just shipping, but shipping something I'm not embarrassed to show people.",
            "I'm early in my career, but I'm not new to the work. I've been building, breaking, and rebuilding things long enough to know that the learning never really stops. And honestly, that's the part I wouldn't trade for anything",
          ],
          buttonText: "Resume",
          buttonLink:
            "https://drive.google.com/file/d/1dhiFEG8omX2aFPqhVdo3AeCPtRZtGhx6/view?usp=sharing",
          avatar: {
            src: "/about-divik.jpeg",
            alt: "Portrait of Divik Satija",
          },
        },
        {
          type: "tech_list",
          heading: "Technologies",
          items: [
            { techName: "Next.js", techColor: "#facc15" },
            { techName: "TypeScript", techColor: "#60a5fa" },
            { techName: "React", techColor: "#22d3ee" },
            { techName: "GSAP", techColor: "#4ade80" },
            { techName: "Node.js", techColor: "#fb7185" },
          ],
        },
        {
          type: "experience",
          heading: "Experience",
          items: [
            {
              title: "Software Engineer Intern",
              timePeriod: "January 2024 - May 2024 / Grapes Digital Pvt Ltd",
              description: [
                "During my internship at Grapes Digital, I worked as a full-stack developer contributing to production-level web features within an Agile team environment. One of my key contributions was redesigning and implementing an interactive website feature that drove meaningful business impact — attracting over 1,000 new users within the first month of launch and earning positive feedback from 95% of visitors, reflecting both the quality of the implementation and the strength of the user experience delivered.",
                "On the engineering side, I collaborated closely with the team to develop and optimize full-stack functionality across the React.js frontend and Node.js and MongoDB backend. Through systematic performance profiling, API debugging, and Chrome DevTools analysis, I helped reduce page load time by 30% and resolved 20+ frontend and backend issues across the codebase. Working in an Agile setup gave me firsthand experience with sprint cycles, collaborative code ownership, and shipping features under real deadlines.",
                "Technologies used: React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Chrome DevTools, and Postman.",
              ],
            },
          ],
        },
        {
          type: "experience",
          heading: "Education",
          items: [
            {
              title: "Bachelor of Technology in Electrical Engineering",
              timePeriod: "2021-2025",
              institution: "Punjab Engineering College",
              description: [],
            },
          ],
        },
      ] satisfies PageSection[],
    },
  ] satisfies SitePage[],
  projectsPage: {
    meta: {
      title: "Projects | Divik Satija",
      description:
        "Selected software projects by Divik Satija spanning real-time apps, developer tools, learning platforms, and full-stack systems.",
    },
    slices: [
      {
        type: "content_index",
        heading: "My Projects",
        contentType: "Project",
        description: [
          "The tech projects I've created",
        ],
        viewMore: "View More",
        fallbackItemImage: {
          src: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&w=1200&q=90",
          alt: "Abstract fallback project preview",
        },
      },
    ] satisfies PageSection[],
  },
  projects: [
    {
      uid: "virtumeet",
      title: "VirtuMeet",
      date: "2025-03-12",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
      meta: {
        title: "VirtuMeet | Divik Satija",
        description:
          "A scalable video and audio conferencing application designed for real-time communication and enterprise-grade collaboration.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=90",
        alt: "Video conference grid on a laptop screen",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/VirtuMeet-10. Live: https://virtu-meet-10.vercel.app/.",
            "VirtuMeet is a scalable video and audio conferencing application built with Next.js, designed to handle enterprise-level communication with support for 100+ concurrent users. The application is built around real-time communication with a strong emphasis on performance and reliability, making it suitable for professional meetings, team calls, and large-scale virtual sessions without degradation in quality as user count scales up.",
            "The platform comes packed with features expected from a modern conferencing tool including screen sharing, real-time updates, and intelligent call routing, all wrapped in a clean and custom-built UI. Authentication is handled securely through Clerk, ensuring that only authorized users can access meetings while keeping the sign-in experience smooth and frictionless. Every component and interaction has been optimized with performance in mind, from how calls are initiated to how real-time state is managed across participants.",
            "Built using Next.js, TypeScript, Tailwind CSS, and Clerk, and fully deployed on Vercel.",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1600&q=90",
            alt: "Remote meeting setup with a laptop and webcam",
          },
        },
      ] satisfies ArticleSection[],
    },
    {
      uid: "centralised-timetable-management-system",
      title: "Centralised Timetable Management System",
      date: "2025-02-18",
      tags: ["Node.js", "Express.js", "MongoDB", "React.js"],
      meta: {
        title: "Centralised Timetable Management System | Divik Satija",
        description:
          "A full-stack timetable scheduling application built to prevent academic scheduling conflicts through semaphore-based concurrency control.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=90",
        alt: "Academic planning board and classroom schedule",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/MajorProject.",
            "The Centralised Timetable Management System is a full-stack web application built to solve the real-world problem of scheduling conflicts in academic institutions. Designed to support 50+ concurrent users, the system handles real-time slot allocation with a core focus on consistency and conflict prevention. At its heart, the application uses semaphore-based concurrency control to synchronize slot creation and updates across simultaneous requests, ensuring that no two users can create overlapping schedules at the same time.",
            "The platform features role-based dashboards for admins and faculty, each tailored to their specific responsibilities. Faculty can manage their availability while admins oversee the full timetable with drag-and-drop scheduling and support for multiple session types. The semaphore-based synchronization layer guarantees 100% conflict-free updates even under concurrent load, making the system reliable enough for production academic environments.",
            "Built using Node.js, Express.js, MongoDB, React.js, Shadcn, Recoil, Postman, and Jira.",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=90",
            alt: "Calendar and scheduling workflow on a desktop screen",
          },
        },
      ] satisfies ArticleSection[],
    },
    {
      uid: "buddychat",
      title: "BuddyChat",
      date: "2025-01-22",
      tags: ["Next.js", "TypeScript", "Convex", "Clerk"],
      meta: {
        title: "BuddyChat | Divik Satija",
        description:
          "A real-time messaging application built with instant updates, authentication, presence indicators, and a responsive chat interface.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=90",
        alt: "Mobile chat messages on a messaging interface",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/tars-chat-app. Live: https://tars-chat-app-64wa.vercel.app/.",
            "BuddyChat is a real-time full-stack chat application that brings the feel of modern messaging platforms to a clean, minimal interface. Built with Next.js App Router, Convex, and Clerk, the application is engineered around instant communication with no perceptible lag. Convex subscriptions power the real-time layer, pushing UI updates the moment a message is sent or received, without any polling or manual refresh.",
            "The application supports secure one-on-one messaging with Clerk handling authentication, online and offline presence indicators so users always know who is available, and a live typing indicator that makes conversations feel natural and responsive. Unread message counts are tracked per conversation, keeping users informed without overwhelming them. The UI is fully responsive across mobile and desktop, making BuddyChat equally comfortable on any device.",
            "Built using Next.js, TypeScript, Tailwind CSS, Convex, Clerk, and deployed on Vercel.",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=90",
            alt: "Typing on a phone chat application",
          },
        },
      ] satisfies ArticleSection[],
    },
    {
      uid: "sql-studio",
      title: "SQL Studio",
      date: "2024-12-10",
      tags: ["React", "Vite", "PostgreSQL", "MongoDB"],
      meta: {
        title: "SQL Studio | Divik Satija",
        description:
          "A browser-based SQL learning platform with real-time query execution, guided assignments, and AI-powered hints.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=90",
        alt: "SQL code and analytics dashboard on a laptop",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/cipher-sql-studio. Live: https://cipher-sql-studio-three.vercel.app/.",
            "SQL Studio is a fully deployed, browser-based SQL learning platform where users can practice writing and executing SQL queries against pre-configured assignments backed by real sample data. The platform is purpose-built for structured learning and guided problem-solving, not database creation, which keeps the experience focused and distraction-free. All assignments are categorized by difficulty (Easy, Medium, Hard), giving learners a clear progression path from fundamentals to more complex query writing.",
            "The interactive SQL editor supports real-time query execution with results displayed in a clean tabular format alongside clear error feedback. One of the standout features is the intelligent hint system powered by Google Gemini, which provides contextual, non-revealing guidance that nudges users toward the right approach without just handing them the answer. User attempts are stored persistently in MongoDB while queries run against a read-only PostgreSQL sandbox, keeping the learning environment safe and controlled. The UI is built mobile-first with a fully responsive layout that works seamlessly across all screen sizes. All services including frontend, backend, databases, and LLM integration are fully deployed and running in production.",
            "Built using React, Vite, SCSS, Node.js, Express.js, PostgreSQL, MongoDB, and Google Gemini.",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=90",
            alt: "Developer screen showing SQL and data tables",
          },
        },
      ] satisfies ArticleSection[],
    },
    {
      uid: "research-paper-reading-tracker",
      title: "Research Paper Reading Tracker",
      date: "2024-10-04",
      tags: ["React.js", "Recharts", "Express.js", "Supabase"],
      meta: {
        title: "Research Paper Reading Tracker | Divik Satija",
        description:
          "A full-stack reading tracker for researchers with filters, analytics dashboards, and persistent paper metadata.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=90",
        alt: "Research papers, charts, and notes on a desk",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/research-paper-tracker.",
            "The Research Paper Reading Tracker is a full-stack web application designed for researchers and academics who want to stay on top of their reading and understand their own habits over time. Users can add research papers with detailed metadata including domain, reading stage, citation count, and impact score, with form validation and clear feedback ensuring data stays clean and consistent. All papers are stored persistently via a Supabase PostgreSQL backend connected through a RESTful Express API.",
            "The paper library view presents everything in a structured, filterable table with multi-select filters across reading stage, research domain, impact score, and date range, making it easy to slice through a large collection quickly. The real highlight is the analytics dashboard, which turns reading data into meaningful visual insights through a funnel chart tracking reading progress, a scatter plot comparing citation count against impact score, and a stacked bar chart breaking down domain-wise reading stages. Summary cards at a glance show total papers added, completion rate, and the count of fully read papers. The entire frontend is built with React, Shadcn, Tailwind CSS, and Recharts, with Axios handling API communication and Vite powering the build.",
            "Built using React.js, Shadcn, Tailwind CSS, Recharts, Node.js, Express.js, and Supabase (PostgreSQL).",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90",
            alt: "Academic reading setup with notebook and papers",
          },
        },
      ] satisfies ArticleSection[],
    },
    {
      uid: "blog-post",
      title: "Blog Post",
      date: "2024-08-11",
      tags: ["React", "Context API", "JavaScript", "Local Storage"],
      meta: {
        title: "Blog Post | Divik Satija",
        description:
          "A React-based todo application built to deeply understand Context API and foundational state management patterns.",
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=90",
        alt: "Minimal productivity desk with notes and laptop",
      },
      slices: [
        {
          type: "text_block",
          text: [
            "GitHub: https://github.com/divik10/BlogPost.",
            "This project is a React-based todo application built with the primary goal of developing a solid, hands-on understanding of the Context API and how it fits into real-world state management. Rather than reaching for an external library, the application manages all state through React's built-in Context API, making it a clean exercise in understanding how data flows through a component tree without the noise of prop drilling.",
            "The application supports the full range of todo management — adding new tasks, updating existing ones, and deleting completed ones — with every change reflected in real-time across components. State is shared globally through context, meaning the ToDoForm and ToDoItem components stay in sync without passing props manually down the tree. Local storage integration takes the experience a step further by persisting tasks across browser sessions, so nothing is lost on a page refresh.",
            "Beyond the features themselves, this project was intentionally scoped as a learning foundation. The goal was to get comfortable with Context API patterns before moving on to more advanced state management solutions like Redux Toolkit. It represents an honest, focused step in building deeper frontend engineering fundamentals rather than just shipping features.",
            "Built using React, Context API, Local Storage, and JavaScript.",
          ],
        },
        {
          type: "image_block",
          image: {
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1600&q=90",
            alt: "Task planning notes beside a laptop",
          },
        },
      ] satisfies ArticleSection[],
    },
  ] satisfies ContentItem[],
};

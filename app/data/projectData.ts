export interface Project {
  title: string;
  imageSrc: string;
  descriptionBlocks: string[];
  gitHubLink?: string;
  infoImage?: string;
  videoLink?: string;
  carouselImages?: string[];
  link: string;
}

export const uniProjects: Project[] = [
  {
    title: "GERAS - AI powered personal assistant for elderly people",
    imageSrc: "/assets/projects/uni/GERAS/GERAS.png",
    descriptionBlocks: [
      "Development of a digital ecosystem designed to restore autonomy to seniors and guarantee peace of mind for their families. The application aims to combat isolation and promote daily safety through an accessible, community-driven platform.",
      "Implementation of functionalities like smart home IoT integration for routine monitoring and fall detection, real-time caregiver alerts, and a simplified interface for seniors to request assistance from a network of verified volunteers.",
      "Built with React Native and Expo Router for scalable file-based routing. It integrates the Expo Speech Recognition module to capture real-time voice inputs. There are three profiles: Elder, Volunteer and Caretaker. This app was made with the CBL methodology with Constança Parracho, Rita Costa, Gustavo Silva and Tomás Nogueira.",
      "Utilization of the Google Generative AI and the Gemini model to process voice transcripts. It employs LLM function calling to convert natural speech intents into automated, navigation across the application's specific screens and the ability to call to 112 in case of emergency.",
    ],
    gitHubLink: "https://github.com/falcaodiogo/CBL-Geras",
    videoLink: "https://www.youtube.com/watch?v=1fBb_aUl9JE",
    carouselImages: [
      "/assets/projects/uni/GERAS/GERAS.png",
      "/assets/projects/uni/GERAS/1.png",
      "/assets/projects/uni/GERAS/2.png",
      "/assets/projects/uni/GERAS/3.png",
      "/assets/projects/uni/GERAS/4.png",
    ],
    link: "./projects/uni/GERAS",
  },
  {
    title:
      "HealthTracker - App for Android and WearOS to monitor health metrics",
    imageSrc: "/assets/projects/uni/ICM2/ICM2.png",
    descriptionBlocks: [
      "Development of a health companion application for Android and WearOS platforms, enabling real-time monitoring of physical activities and synchronization of daily planned exercises.",
      "Implementation of a mobile interface featuring Google authentication, sleep data visualization, step goal configuration, and the display of exercise points of interest in Aveiro.",
      "Integration of the Health Connect API to retrieve smartwatch health data, utilizing Health Services and the Exercise API to monitor real-time metrics during workouts. This project was made with José Gameiro.",
      "The system architecture (provided in the image above) utilizes an SQLite database with Data Access Objects for local persistence, Firebase for sign-in services, and specific ViewModels managing UI state across both devices.",
    ],
    infoImage: "/assets/projects/uni/ICM2/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/Projeto2-ICM",
    carouselImages: [
      "/assets/projects/uni/ICM2/ICM2.png",
      "/assets/projects/uni/ICM2/1.png",
      "/assets/projects/uni/ICM2/2.png",
      "/assets/projects/uni/ICM2/3.png",
      "/assets/projects/uni/ICM2/4.png",
      "/assets/projects/uni/ICM2/5.png",
      "/assets/projects/uni/ICM2/6.png",
    ],
    link: "./projects/uni/ICM2",
  },
  {
    title: "FindIt - Find supermarket products with built-in navigation",
    imageSrc: "/assets/projects/uni/FindIt/FindIt.png",
    descriptionBlocks: [
      "Development of a grocery optimizer that aggregates multiple supermarkets and combines information from them to make the experience more efficient, convenient, and stress-free.",
      "Implementation of a multimodal and modern interface that allows users to write or talk naturally to discover the best prices and manage shopping lists.",
      "Integration of intelligent algorithms and AI to personalize your experience, optimize every step, and provide personalized product recommendations inside the supermarket. Utilization of optimized in-store navigation based on your position inside the supermarket to provide directions to the best supermarket and locate products",
      "System architecture for indoor positioning using ESP32 devices, where a vectorized map plant is created and transformed into GeoJSON format. This project was made with André Ribeiro, Bruno Gonçalves, Rúben Garrido e Violeta Ramos.",
    ],
    infoImage: "/assets/projects/uni/FindIt/arch.png",
    gitHubLink: "https://github.com/PI-FindIt",
    carouselImages: [
      "/assets/projects/uni/FindIt/FindIt.png",
      "/assets/projects/uni/FindIt/1.png",
      "/assets/projects/uni/FindIt/2.png",
      "/assets/projects/uni/FindIt/3.png",
      "/assets/projects/uni/FindIt/4.png",
    ],
    link: "./projects/uni/FindIt",
  },
  {
    title: "Heart Serious Game - Game with heart beat monitoring",
    imageSrc: "/assets/projects/uni/ICM1/ICM1.png",
    descriptionBlocks: [
      "Development of a cross-platform mobile application using Flutter for the Introduction to Mobile Computing class to create an fun and competitive experience.",
      "Implementation of the Heart Serious Game where two players compete by maintaining higher average heart rates over the game duration.",
      "Utilization of WearOS smartwatches equipped with heart rate monitoring capabilities to monitor heart rates, visualizing the data in real-time on a mobile device.",
      "System architecture integrating an MQTT broker for the interaction interface, alongside an Isar database and Provider for state management. This project was build with José Gameiro.",
    ],
    infoImage: "/assets/projects/uni/ICM1/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/Projeto1-ICM",
    carouselImages: ["/assets/projects/uni/ICM1/ICM1.png"],
    link: "./projects/uni/ICM1",
  },
  {
    title: "SmartHomes - Control smart devices, electricity and water usage",
    imageSrc: "/assets/projects/uni/IES/IES.png",
    descriptionBlocks: [
      "Development of the SmartHomes application to address the problem of efficient and sustainable home resources management, providing a solution to monitor and control electricity and water.",
      "Implementation of a system that works in all and any devices plugged into the house, dependent on the physical interfaces rather than the devices themselves.",
      "Integration of a setup that prevents complex programming skills or automation skills, adding functions from mainstream applications such as smart device control and resources info.",
      "Utilization of data to gain insights into how to intelligently assist the environment and your wallet, going beyond merely controlling devices for the homeowners.",
    ],
    infoImage: "/assets/projects/uni/IES/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/Projeto-IES",
    carouselImages: [
      "/assets/projects/uni/IES/IES.png",
      "/assets/projects/uni/IES/1.png",
      "/assets/projects/uni/IES/2.png",
    ],
    link: "./projects/uni/IES",
  },
  {
    title: "NEI: Gestão de Núcleos - Core Management System",
    imageSrc: "/assets/projects/uni/NEI/NEI.png",
    descriptionBlocks: [
      "Development of a Core Management System based on a database with multiple entities and an appealing interface, aiming to facilitate event management.",
      "Implementation of features to add Events and Non-Monetary Events with Sponsors, as well as manage Staff by Adding, Deleting, and Editing.",
      "Integration of Wristbands as a method for the organization to generate profit from Events, where each purchased product grants a wristband, allowing the addition and tracking of how many were sold per event. This project was built with Matilde Teixeira.",
      "Use of a Warehouse system to view products by category (Food and Drinks) and add new Products, structured with SQL code including Indexes, Inserts, Procedures, Tables, Triggers, UDFs, and Views.",
    ],
    infoImage: "/assets/projects/uni/NEI/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/Projeto-Base-de-Dados",
    carouselImages: [
      "/assets/projects/uni/NEI/NEI.png",
      "/assets/projects/uni/NEI/1.png",
      "/assets/projects/uni/NEI/2.png",
    ],
    link: "./projects/uni/NEI",
  },
  {
    title: "Travel Mate - Travel planning app with focus on UI/UX",
    imageSrc: "/assets/projects/uni/TravelMate/TravelMate.png",
    descriptionBlocks: [
      "Development of the Travel Mate application focused on design and user experience to help users see past trips, plan new ones, and share experiences.",
      "Implementation of a fresh and modern UI inspired in both Material Design 3 and Fluent Design, featuring design trends such as glassmorphism.",
      "Utilization of React Native to build the app, featuring dark mode with automatic theme switching, although components are rendered differently on iOS and Android.",
      "Integration of a map with points of interest and notes, alongside a specific color palette utilizing Lighter green for menu headers and action bars. This project was build with Diana Miranda and Rúben Garrido.",
    ],
    infoImage: "/assets/projects/uni/TravelMate/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/Projeto-TravelMate-IHC",
    carouselImages: [
      "/assets/projects/uni/TravelMate/TravelMate.png",
      "/assets/projects/uni/TravelMate/1.png",
      "/assets/projects/uni/TravelMate/2.png",
      "/assets/projects/uni/TravelMate/3.png",
    ],
    link: "./projects/uni/TravelMate",
  },
  {
    title: "City Connect - Digital platform MVP for bus services",
    imageSrc: "/assets/projects/uni/CityConnect/CityConnect.png",
    descriptionBlocks: [
      "Development of an MVP product for the TQS course, applying software enterprise architecture patterns and specifying a Software Quality Assurance strategy alongside Continuous Integration and Continuous Delivery practices.",
      "Implementation of a user-centered online system for a public bus service, unifying digital services like those found in common transportation terminals into one platform.",
      "Integration of a digital service that includes a customer portal, tools for staff to edit bus and trip information, and a digital signage system. This project was made with Bárbara Galiza, Diana Miranda and Rúben Garrido.",
      "Utilization of CI/CD pipelines and SonarCloud across the backend, staff portal, client portal, and digital signage, alongside Jira for tracking the project timeline.",
    ],
    infoImage: "/assets/projects/uni/CityConnect/arch.png",
    gitHubLink: "https://github.com/CityConnect-TQS/control-room",
    carouselImages: [
      "/assets/projects/uni/CityConnect/CityConnect.png",
      "/assets/projects/uni/CityConnect/1.png",
      "/assets/projects/uni/CityConnect/2.png",
      "/assets/projects/uni/CityConnect/3.png",
      "/assets/projects/uni/CityConnect/4.png",
    ],
    link: "./projects/uni/CityConnect",
  },
  {
    title: "SmartCane - Prototype with sensors for blind people",
    imageSrc: "/assets/projects/uni/SmartCane/smartcane.png",
    descriptionBlocks: [
      "Development of a low-cost, scalable Smart IoT Cane prototype for the Prototyping in the Internet of Things course, applying hardware-software integration to meaningfully enhance daily mobility and safety for seniors and differently-abled individuals.",
      "Implementation of an end-to-end IoT system utilizing an ESP32 microcontroller to poll multi-sensor telemetry, transmitting real-time states over a Wi-Fi network using the MQTT protocol to a Docker-containerized Eclipse Mosquitto broker.",
      "Integration of a physical device featuring a modular, hollow-interior PETG enclosure engineered in Autodesk Fusion 360 and 3D-printed via FDM, housing a three-axis IR obstacle array, a floor humidity tracker, a tilt switch, and a directional buzzer feedback module. This project was made with Ammar Shahzad.",
      "Utilization of a web application built with Next.js, React, TypeScript, and Tailwind CSS under the Bun runtime to supply caregivers with a remote monitoring dashboard, real-time raw JSON payload logs, and an interactive emergency SOS alert system.",
    ],
    infoImage: "/assets/projects/uni/SmartCane/arch.png",
    gitHubLink: "https://github.com/falcaodiogo/PIOT-SoSe26",
    carouselImages: [
      "/assets/projects/uni/SmartCane/4.png",
      "/assets/projects/uni/SmartCane/5.png",
      "/assets/projects/uni/SmartCane/6.png",
      "/assets/projects/uni/SmartCane/8.png",
    ],
    link: "./projects/uni/SmartCane",
  },
];

export const personalProjects: Project[] = [
  {
    title: "CP: Track Portuguese trains in real time",
    imageSrc: "/assets/projects/mine/CP/CP.png",
    descriptionBlocks: [
      "Development of the CP App, a modern application built with a combination of Material Design 3 and Material Design 3 Expressive. It uses the Comboios API and CP's public API to provide real-time train tracking and scheduling.",
      "Implementation of features where users can view upcoming trains at a specific station, track a train's delay and location, and monitor its status, such as stopped, entering a station, or in transit, with live updates and a progress bar.",
      "Integration of a HomeScreen serving as the main dashboard, a NextTrainsScreen showing real-time updates on delays and arrival times, and a ChatBotScreen offering an AI-powered chatbot for user inquiries about train schedules using Google Gemini.",
      "System architecture utilizing the MVVM (Model-View-ViewModel) pattern to ensure separation of concerns, integrating Google Firebase Authentication, a RoomDatabase for offline data storage, and Retrofit to handle communication with the Comboios API and CP public API.",
    ],
    infoImage: "/assets/projects/mine/CP/CP.png",
    gitHubLink: "https://github.com/falcaodiogo/CP",
    carouselImages: [
      "/assets/projects/mine/CP/1.png",
      "/assets/projects/mine/CP/2.png",
      "/assets/projects/mine/CP/3.png",
      "/assets/projects/mine/CP/4.png",
      "/assets/projects/mine/CP/5.png",
    ],
    link: "./projects/mine/CP",
  },
  {
    title: "Portfolio - Previous version of my personal portfolio website",
    imageSrc: "/assets/projects/mine/website1/website1.png",
    infoImage: "/assets/projects/mine/website1/website1.png",
    descriptionBlocks: [
      "Development of a personal portfolio website to showcase my projects and skills, built with React and Next.js.",
      "Utilization of GitHub Pages for hosting the website.",
    ],
    gitHubLink: "https://github.com/falcaodiogo/falcaodiogo.github.io",
    link: "./projects/mine/website1",
  },
  {
    title: "Portfolio - Current version of my personal portfolio website",
    imageSrc: "/assets/projects/mine/website2/website2.png",
    descriptionBlocks: [
      "This is the current version, built with React and Next.js <3",
      "",
    ],
    gitHubLink: "https://github.com/falcaodiogo/New_Website",
    link: "./projects/mine/website2",
  },
];

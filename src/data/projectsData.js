
import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import first from "./../assets/portfolioImages/first.jpg"
import second from "./../assets/portfolioImages/second.jpg"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "app",
    img: first,
    name: "Notification FCM",
    stack: ["< HTML-5 />", "< Bootstrap v5 />", "< CSS/>", "< JS/>"],
    live: "/",
    source: "https://github.com/Umama-Abbasi",
    description:
     "Seamless Integration: Setting up Firebase in Flutter is straightforward—just a few steps, and you're ready to go.🚀 Real-Time Database: Firebase Firestore provides real-time data syncing, perfect for apps that need up-to-date info instantly.📱 Cross-Platform Compatibility: Whether it's iOS or Android, Firebase works seamlessly across both platforms, making development easier."
      ,
  },
  {
    id: "app",
    img: second,
    name: "One-Stop Shop",
    stack: ["< HTML-5 />", "< Bootstrap v5 />", "< CSS/>", "< JS/>"],
    live: "/",
    source: "https://github.com/Umama-Abbasi",
    description:
     "✅ Seamless Integration: Setting up Firebase in Flutter is straightforward—just a few steps, and you're ready to go.🚀 Real-Time Database: Firebase Firestore provides real-time data syncing, perfect for apps that need up-to-date info instantly.📱 Cross-Platform Compatibility: Whether it's iOS or Android, Firebase works seamlessly across both platforms, making development easier."
      ,
  }

];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }
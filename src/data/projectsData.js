
import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import first from "./../assets/portfolioImages/potolo.png"
import second from "./../assets/portfolioImages/xo black.jpg"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "app",
    img: first,
    name: "Potolo",
    stack: ["< HTML-5 />", "< Bootstrap v5 />", "< CSS/>", "< JS/>"],
    live: "https://potololite.com/",
    source: "https://github.com/Itsmalikusman",
    description:
     "I developed the responsive front-end for Potolo, a platform offering services for various businesses like restaurants, shops, and groceries. The project featured a multi-level dropdown with custom icons to enhance user experience, along with a responsive design that made business pages adaptable across devices for seamless browsing. The user-friendly interface was designed to ensure a clean and accessible experience on both mobile and desktop. Technologies used include HTML, CSS, JavaScript, and Bootstrap.",
  },
  {
    id: "app",
    img: second,
    name: "Xo Black",
    stack: ["< HTML-5 />", "< Bootstrap v5 />", "< CSS/>", "< JS/>"],
    live: "/",
    source: "https://github.com/Itsmalikusman",
    description:
     "XO Black is a full-featured social application designed to bring communities together through seamless interaction and services. It includes essential social media features such as chat, quickies, and a timeline to share moments. Beyond social networking, XO Black connects users to local services like events, eateries, shops, barbers, and influencers. With a modern and intuitive design, the platform caters to users seeking both personal connections and professional opportunities. It offers a personalized experience, ensuring users find deals, friends, and trends tailored to their preferences. XO Black is a one-stop solution for staying connected and exploring new possibilities."
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
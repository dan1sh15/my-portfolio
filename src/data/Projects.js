import weather from "../assets/weather.jpg";
import password from "../assets/password.jpg";
import news from "../assets/quote.png";
import quote from "../assets/quotes.jpg";
import ticTacToe from "../assets/tic-tac-toe.jpg";
import insta from "../assets/instagram.jpg";

const projects = [
    {
        title: "Instagram Video Downloader",
        description: "This is a dynamic and user-friendly Instagram video downloader using React for frontend development, Tailwind CSS for styling, and Rapid API for interacting with Instagram's API. This project aims to provide a seamless experience for users to download Instagram videos with ease.",
        techStack: "React and Tailwind",
        link: "https://instagram-video-download.netlify.app/",
        githubLink: "https://github.com/dan1sh15/Insta-video-downloader",
        img: insta,
    },
    {
        title: "Weather App",
        description: "A Weather app which shows the weather of your current location and has a search weather option for different cities. I have used Openweather api for fetching weather data.",
        techStack: "React and Tailwind",
        link: 'https://dan1sh15.github.io/Weather-React-App/',
        githubLink: 'https://github.com/dan1sh15/Weather-React-App',
        img: weather,
    },
    {
        title: "Password Generator",
        description: "This is random password generator which generates password between the range (1-20) words. Also it shows an indicator whether the password is strong or weak. Red color for weak password. Green color for strong password. Yellow color for medium strength password.",
        techStack: "HTML, CSS and JavaScript",
        link: 'https://dan1sh15.github.io/Password-Generator/',
        githubLink: 'https://github.com/dan1sh15/Password-Generator',
        img: password,
    },
    {
        title: "News App",
        description: "It is modern news Web Application built using React and Tailwind. The news app has a vertical navbar which helps in viewing the news according to the categories listed in it. The news is fetched from the NewsApi website. It has an infinte scroll page which is implemented by using the InfiniteScroll component. The project wasn't hosted on any platform beacause the News Api was restricted for localhost request only.",
        techStack: "React and Tailwind",
        link: 'https://drive.google.com/file/d/1bEDYEcwZk8dzNaPEScedy6ucP3huytsG/view',
        githubLink: 'https://github.com/dan1sh15/News-App',
        img: news,
    },
    {
        title: "Quote Generator",
        description: "This project generates random quotes on click of new quote button.",
        techStack: "HTML, CSS and JavaScript",
        link: "https://dan1sh15.github.io/Quote_Generator/",
        githubLink: "https://github.com/dan1sh15/Quote_Generator",
        img: quote,
    }, 
    {
        title: "Tic Tac Toe",
        description: "Tic Tac Toe game using HTML, CSS and JavaScript",
        techStack: "HTML, CSS and JavaScript",
        link: "https://dan1sh15.github.io/Tic-Tac-Toe-Game/",
        githubLink: "https://github.com/dan1sh15/Tic-Tac-Toe-Game",
        img: ticTacToe,
    }
]

export default projects;
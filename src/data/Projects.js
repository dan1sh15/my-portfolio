import weather from "../assets/weather.jpg";
import password from "../assets/password.jpg";
import news from "../assets/quote.png";
import quote from "../assets/quotes.jpg";
import ticTacToe from "../assets/tic-tac-toe.jpg";

const projects = [
    {
        title: "Weather App",
        description: "A Weather app which shows the weather of your current location and has a search weather option for different cities. I have used Openweather api for fetching weather data.",
        techStack: "HTML, CSS and JavaScript",
        link: 'https://dan1sh15.github.io/Weather-App/',
        githubLink: 'https://github.com/dan1sh15/Weather-App',
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
        description: "It is modern news web application which is build by using React and Bootstrap. The news app has a navbar which helps in viewing the news according to the categories listed in it. The news is fetched from the NewsApi website.",
        techStack: "React",
        link: 'https://github.com/dan1sh15/React-NewsMonkey-App',
        githubLink: 'https://github.com/dan1sh15/React-NewsMonkey-App',
        img: news,
    },
    {
        title: "Quote Generator",
        description: "This project generates random quotes on click of new quote button.",
        techStack: "HTML, CSS and JavaScript",
        link: "https://github.com/dan1sh15/Quote_Generator",
        githubLink: "https://dan1sh15.github.io/Quote_Generator/",
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
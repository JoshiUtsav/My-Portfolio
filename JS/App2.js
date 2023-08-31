const projects = {
  Webapp: [
    { name: 'ChatApp', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/ChatApp", live: "https://conversa-0091.onrender.com/" }, // ChatApp
    { name: 'Music Player', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/Music-player", live: "https://music-player-utsav.netlify.app/" }, // Music Player
    { name: 'WeatherApp', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/weatherApp", live: "" }, // Weather App
    { name: 'Portfolio', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/Portfolio", live: "https://utsav-joshi.netlify.app/" }, // Portfolio
    { name: 'Amazon-clone', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "", live: "" }, // Amazon Clone
    { name: 'Quiz-App', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/QnA/tree/master/Frontend/Projects/Knowledge/QnA", live: "qna-9w28.onrender.com" }, // QnA
    { name: 'Quote Generator', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/quote-generator.github.io", live: "https://quote-generator-utsav.netlify.app/" }, // Quote generator
    { name: 'Rock-paper-scissor', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/Rock-paper-scissor", live: "https://rock-paper-scissors-utsav.netlify.app/" }, // Game
    { name: 'Infinity Scroll', Banner: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png', github: "https://github.com/JoshiUtsav/Infinity-scroll", live: "https://infinity-scroll-utsav.netlify.app/" }, // Infinity Scroll
  ]
};

Array.from(document.getElementsByClassName('Banner')).forEach((e, i) => {
  e.getElementsByClassName('projectName')[0].innerText = projects.Webapp[i].name;
  e.getElementsByTagName('img')[0].src = projects.Webapp[i].Banner;
  e.getElementsByTagName('a')[0].href = projects.Webapp[i].live;
  e.getElementsByClassName('githubbutton').href = projects.Webapp[i].github;
});
// right arrow 
const rightArrow = document.getElementById('right');
rightArrow.addEventListener('click', () => {
  document.querySelector(".right-1").style.width = "100%";
  document.querySelector(".right-2").style.width = "100%";
  function after() {
    setInterval(() => {
      location.href = "Index.html";
    }, 2000);
  }
  after();
})

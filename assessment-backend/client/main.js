const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const friendsBtn = document.getElementById("friendsButton");
const currentEnemies = document.getElementById("enemies");
const submitEnemies = document.querySelector(".enemy");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data);});
};

const getFriend = () => {
    axios.get("http://localhost:4000/api/friends/").then(res => {
        const data = res.data;
        alert(data);
    });
};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
friendsBtn.addEventListener('click', getFriend)
currentEnemies.addEventListener('click', getEnemies);
submitEnemies.addEventListener('submit', addEnemy);


let complimentBtn = document.getElementById("complimentButton");
let fortuneBtn = document.getElementById("fortuneButton");
let friendsBtn = document.getElementById("createfriend");


const getCompliment = (evt) => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data
            alert(data)})
}

const getFortune = (evt) => {
    axios.get("http://localhost:4000/api/fortune")
    .then( res => {
        const data = res.data
        alert(data)})
}

const createFriend = (evt) => {
    axios.post("http://localhost:4000/api/friends").then(res => {
        const data = res.data;
        alert(data);
    });
}



complimentBtn.addEventListener("click", getCompliment)
fortuneBtn.addEventListener("click", getFortune)
friendsBtn.addEventListener("click", createFriend)
// currentEnemies.addEventListener('click', getEnemies);
// submitEnemies.addEventListener('submit', addEnemy);


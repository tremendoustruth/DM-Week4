let complimentBtn = document.getElementById("complimentButton");
let fortuneBtn = document.getElementById("fortuneButton");
let makefriend = document.querySelector(".friend");
let deletefriend = document.querySelector(".deleteid");
let forgivefriend = document.querySelector(".forgive");

const getCompliment = (evt) => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data
            alert(data)})
}

const getFortune = (e) => {
    axios.get("http://localhost:4000/api/fortune")
    .then( res => {
        const data = res.data
        alert(data)})
}

const createFriend = (friend) => {
    axios.post("http://localhost:4000/api/friends", friend).then(res => {
        alert("Congratulations! You've added a new friend. Check the server logs if you don't believe me.")})
}

const deleteFriend = (e) => {
    let id  = document.querySelector(".testing").value
    axios.delete(`http://localhost:4000/api/friends/${id}`).then(res => {
        alert("No more friend")})
}

const forgiveFriend = (e) => {
    let id  = document.querySelector(".friendid").value  
    axios.put(`http://localhost:4000/api/friends/${id}`, rating).then(res => {
        alert("you have forgiven your friend")})
}

function friendHandler(e) {
    e.preventDefault()
    let name = document.querySelector(".name")
    let rating = document.querySelector(".rating")
    let friendObj = {
        name: name.value,
        rating: parseInt(rating.value), 
    }
    createFriend(friendObj)
}


complimentBtn.addEventListener("click", getCompliment)
fortuneBtn.addEventListener("click", getFortune)
makefriend.addEventListener("submit", friendHandler)
deletefriend.addEventListener("submit", deleteFriend)
forgivefriend.addEventListener("submit", forgiveFriend)
// currentEnemies.addEventListener('click', getEnemies);
// submitEnemies.addEventListener('submit', addEnemy);


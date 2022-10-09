let complimentBtn = document.getElementById("complimentButton");
let fortuneBtn = document.getElementById("fortuneButton");
let makefriend = document.querySelector(".friend");
let deletefriend = document.querySelector(".deleteid");
let updatefriend = document.querySelector(".update");

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

const updateFriend = (e) => {
    let id  = document.querySelector(".friendid").value
    let newRating = document.querySelector(".newrating").value
    axios.put(`http://localhost:4000/api/friends/${id}`, newRating).then(res => {
        alert("success, your friend has a new rating")})
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
updatefriend.addEventListener("submit", updateFriend)
// currentEnemies.addEventListener('click', getEnemies);
// submitEnemies.addEventListener('submit', addEnemy);


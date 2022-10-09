let friends = [ 
    {"id": 1, "name": "Amy", "rating": 5},
    {"id": 2, "name": "Betty", "rating": 8},
    {"id": 3, "name": "Carl", "rating": 2}, 
    {"id": 4, "name": "David", "rating": 9},
    {"id": 5, "name": "Ellen", "rating": 4}
]
let id = 4
let newRating  = 5
for (friend of friends){
        if(friend.id===id){friend.rating = newRating}}
console.log(friends)

let enemies = [
    {"id": 1, "name": "Obliterator", "status": "at large"},
    {"id": 2, "name": "Defenestrator", "status": "at large"},
    {"id": 3, "name": "Primiton", "status": "at large"},
    {"id": 4, "name": "Disemboweler", "status": "at large"},
    {"id": 5, "name": "Absurdifier", "status": "at large"},
 ]
let compliments = [
    "Gee, you're a smart cookie!", 
    "Cool shirt!", 
    "Your Javascript skills are stellar.",
    "Your beauty soothes the hearts of all who encounter it."
]
let fortunes = [
    "A gambler will not only lose what he has but what he doesn't have.",
    "A faithful friend is a strong defense.",
    "A friend only asks for your time not your money.",
    "A light heart carries you through all hard times.",
    "All will go well with your new project."
]

globalID = 6

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
        console.log(randomCompliment);
    },
    getFortune: (req, res) => {
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
        console.log(randomFortune);
    },
    getFriends: (req, res) => {
        // select a friend
        let randomIndex = Math.floor(Math.random() * friends.length);
        let myFriend = friends[randomIndex];
        res.status(200).send(myFriend);
        console.log(myFriend);
    },
    createFriend: (req, res) => {
        let { name, rating } = req.body
        let newFriend = {
            id: globalID,
            name,
            rating
        }   
        friends.push(newFriend)
        res.status(200).send(friends)
        globalID++
        console.log(friends)
    },
    deleteFriend: (req, res) => {
        //user makes a delete request with friend ID
        let id = req.params.id
        console.log(id);
        let index = friends.findIndex(friend => friend.id === +id)
        console.log(index)
        friends.splice(index, 1)
        res.status(200).send(friends)
        console.log(friends)
    },
    forgiveFriend: (req, res) => {
        let id = req.params.id
        console.log(id);
        let newRating = 5 //forgiving friend resets them to a neutral 5 rating
        for (friend of friends){
            if(friend.id===id){friend.rating = newRating}
        }
        res.status(200).send(friends)
        console.log(friends)
    }
}

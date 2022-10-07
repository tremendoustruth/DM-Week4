
const enemy_set = [
    {name: "Destroyer", status: "terminated"},
    {name: "Monster", status: "at large"},
    {name: "Barbarian", status: "at large"},
    {name: "Defenestrator", status: "terminated"},
];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
        console.log("testing compliment");
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A gambler will not only lose what he has but what he doesn't have.",
            "A faithful friend is a strong defense.",
            "A friend only asks for your time not your money.",
            "A light heart carries you throuh all hard times.",
            "All will go well with your new project."
        ];
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
        console.log("testing fortune");
    },

    getFriend: (req, res) => {
        const friends = [
            "Amy",
            "Betty",
            "Carl",
            "David",
            "Ellen"
        ];
        // select a new friend
        let randomIndex = Math.floor(Math.random() * friends.length);
        let newFriend = friends[randomIndex];
        res.status(200).send(newFriend);
        console.log("testing friends");
    }
}

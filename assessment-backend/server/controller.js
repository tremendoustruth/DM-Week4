



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const wisdom4u = [
            "A friend only asks for your time, not your money.",
            "A dubious friend may be an enemy in camouflage.",
            "A gambler not only will lose what he has, but will lose what he doesn't have.",
            "Allow compassion to guide your decisions.",
            "An inch of time is an inch of gold.",
            "Be careful, or you could fall for some tricks today."
        ];
        let randomi = Math.floor(Math.random()*wisdom4u.length);
        let randomFortune = wisdom4u[randomi];
        console.log(randomFortune);
        res.status(200).send(randomFortune);
    }
}
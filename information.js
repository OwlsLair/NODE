const cowsay = require("cowsay");

const self = {
    name: "Robin TORRES",
    campus: "Bordeaux",
}

const message = () => {
    console.log(cowsay.say({
        text : `Hello, I'm ${self.name} from ${self.campus} campus !`,
        e : "oO",
        T : "U "
    }));
}

module.exports = message;
const { User } = require("./User");
const { Card } = require("./Card");
const { Attack } = require("./Attack");
const { Deck } = require("./Deck");
// import the rest of your models above

User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

//set up the associations here

// and then export them all below
module.exports = { User, Card, Attack, Deck };

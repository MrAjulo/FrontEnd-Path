// start of the team 
const team = {
    _players: [
        {firstName: 'Paul', lastName: 'Pogba', age: 25},
        {firstName: 'Marcus', lastName: 'Rashford', age: 20},
        {firstName: 'Odion', lastName: 'Ighalo', age: 30},
    ],
    _games: [
        {opponent: 'Spurs', teamPoints: 3, opponentPoints: 6 },
        {opponent: 'Wolves', teamPoints: 4, opponentPoints: 0 },
        {opponent: 'Arsenal', teamPoints: 2, opponentPoints: 1},
    ],

    // add get method 
    get players() {
        return this._players;
    },

    get games() {
        return this._games
    },

    //add methods to create new players 
    addPlayers(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    //Creating addGame Method
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        return this.games.push(game);
    }
};

team.addPlayers('Harry', 'Maguire', 27);
team.addPlayers('David', 'De Gea', 30),
team.addPlayers('Aaron', 'WanBissaka', 20);

console.log(team._players);

team.addGame('City', 0, 0);
team.addGame('Chelsea', 2, 1);
team.addGame('West Ham', 5, 2);

console.log(team._games)
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        if(typeof value === 'number') {
            this._numberOfStudents = value
        }
        else {
            console.log('Invalid input: number of Students must be set to a Number');
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents}, typically between the ages of ${this._level}.`)
    }

    static pickSubstituteTeacher(substituteTeachers){
        let randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    
    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportTeams) {
        super(name, 'high', numberOfStudents);
        this._sportTeams = sportTeams;
    }

    get sportTeams() {
        return this._sportsTeams;
    }
}

const discoveryHouse = new PrimarySchool ('Discovery House', 1000, 'Student must be picked up by a parent, guardian, or a family member over the age of 13.')

discoveryHouse.quickFacts();

const sub = School.pickSubstituteTeacher(['Paul Pogba', 'Mason Greenwood', 'Odion Ighalo', 'Juan Mata', 'David Telles', 'Mike Phellan'])

const meadowHall = new HighSchool('Meadow Hall', 3500, 'Basket Ball');
meadowHall.sportTeams;
meadowHall.quickFacts();
console.log(meadowHall.sportTeams)

console.log(discoveryHouse.pickUpPolicy);
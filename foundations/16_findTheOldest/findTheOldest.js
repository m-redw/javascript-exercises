const findTheOldest = function(people) {
    const oldestList = people.toSorted((a, b) => {
        let person1Age;
        let person2Age;

        if (a.yearOfDeath) {
            person1Age = a.yearOfDeath - a.yearOfBirth;
        } else {
            person1Age = (new Date()).getFullYear() - a.yearOfBirth;
        }
        
        if (b.yearOfDeath) {
            person2Age = b.yearOfDeath - b.yearOfBirth;
        } else {
            person2Age = (new Date()).getFullYear() - b.yearOfBirth;
        }
        
        if (person1Age < person2Age) {
            return -1;
        } else {
            return 1;
        }
    });
    
    return oldestList[oldestList.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;

// Iteration 1: Names and Input


let hacker1 = "Hector";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Paul";
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals


    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
    else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else if (hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length === hacker2.length} characters!.`)
    }

// Iteration 3: Loops
let newHacker = "";
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
  newHacker += hacker1[i].toUpperCase() + " "
}
console.log(newHacker)

let oldHacker = "";
for (let j = hacker2.length -1 ; j >= 0; j--) {

  oldHacker += hacker2[j].toUpperCase() + " "
}
console.log(oldHacker)

console.log(`The ${hacker1} name goes first.`) 
console.log(`Yo, the ${hacker2} goes first, definitely.`) 
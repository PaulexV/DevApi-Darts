var lodash = require('lodash')

const finalScore = 301
let throws = []
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,50]
let zones = [1,2,3,'bull']
let win = 0


while (win == 0){

function gameStatus (throws,finalScore){
    var status = lodash.sum(throws)
    var result = finalScore - status
    

    if (result < 0){
        console.log('vous avez dépassez 301, dernier lancé annulé')
        throws.pop()
    }
    else if (result != 0 ){
        console.log(`il manque ${result} pour gagner `)
        throwDart()
    }

    else {
        console.log('vous avez gagnez')
        win = 1
    }



}

function throwDart() {

    let randomValue = numbers[Math.floor(Math.random() * numbers.length)];
    let randomZones = zones[Math.floor(Math.random() * zones.length)];
    let result;

    if (randomZones == 'bull' ){
        throws.push(50)
    }
    else{
        result = randomValue * randomZones
        throws.push(result)
    }
    console.log(throws)
}
gameStatus(throws,finalScore)

}
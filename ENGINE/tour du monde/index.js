var lodash = require('lodash')

const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let goodHits = [0]
let lastHit

arr.slice(-1)[0]



while (lodash.isEqual(goodHits,numbers) == false){
    

    function gameStatus(){
        if (lodash.sum(goodHits) != lastHit || lodash.sum(goodHits) != 20){
            console.log(`vous n'avez pas toucher la bonne zone`)
            goodHits.pop()
            console.log(goodHits)
            throwDart()
            
        }
        else if (lodash.sum(goodHits) == 20){
            console.log(goodHits)
            console.log('gg ')
            win = 1
        }


    }

    function throwDart(){
        let randomValue = numbers[Math.floor(Math.random() * numbers.length)];
        // console.log(randomValue)
        goodHits.push(randomValue)
        lastHit = randomValue
    }

    gameStatus()
}
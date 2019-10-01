//Problem 1
//a.

let num = 65
while(num >= 1){
    console.log(num)
    num--
}

//b.

for(num = 20; num >= 1; num --){
    console.log(num)
}



//Problem 2
//a.

let max = 20
let low = 0
while(low <= max){
    if(low % 2 === 0){

        console.log(low + " is even")  
    }
    low ++
}

//b.

for(max = 0; max <= 20; max++ ){
    if(low % 2 === 0){
        console.log(max + " is even") 
    }
}
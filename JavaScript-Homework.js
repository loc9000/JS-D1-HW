//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    x = (dog_string.toLowerCase())
    for(var i of dog_names){
        y = (i.toLowerCase())
    if(x.includes(y)){
        console.log('Matched dog_name')
    } else{
        console.log('No Matches');
    }
}    
}
// Terminal test
findWords()


//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let[idx,val] of arr.entries()){
        if(idx%2 == 0){
            arr.splice(idx, 1, 'even index')
        }
    }
    console.log(arr) 
    }

// Terminal test
replaceEvens(Given_arr)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

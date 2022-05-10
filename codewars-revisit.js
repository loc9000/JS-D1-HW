// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    console.log(x.split(' ').join(""))
}

// Tests
x = "8 j 8   mBliB8g  imjB8B8  jl  B"
// x = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"
// x = "8aaaaa dddd r     "
noSpace(x)


// Invert values
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

function invert(lst){
    newList = []
    for(let[idx,val] of lst.entries()){
        newList.push(val * -1)
    }
    console.log(newList)
}

// Test
// lst = [1, 2, 3, 4, 5]
lst = [1, -2, 3, -4, 5]
invert(lst)

//Create List
const cats = ["Milo", "Otis", "Garfield"]

//Destructively Append
function destructivelyAppendCat(addEnd){
    return cats.push(addEnd)
}

//Destructively Prepend
function destructivelyPrependCat(addFront){
    return cats.unshift(addFront)
}

//Destructively Remove Last
function destructivelyRemoveLastCat(){
    return cats.pop([-1])
}

//Destructively Remove First
function destructivelyRemoveFirstCat(){
    return cats.shift([0])}

//Nondestructive Append
function appendCat(newAdd){
    let newCatsAdd=[...cats,newAdd]
    return newCatsAdd
}

//Nondestructive Prepend
function prependCat(addNew){
    let newAddCats=[addNew,...cats]
    return newAddCats
}
    
//Nondestructively Remove Last
function removeLastCat(){
    let newCatsDel= cats.slice(0,cats.length -1)
    return newCatsDel
}

function removeFirstCat(){
    let newDelCats= cats.slice(1, cats.length)
    return newDelCats
}
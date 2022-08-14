// Write your solution 
const cats = ["Milo", "Otis", "Garfield"];
    function appendCat(name) {
        const appNewCat=[...cats, name]
        return appNewCat;
    }
    function prependCat(name) {
        const prepNewCat=[name, ...cats]
        return prepNewCat
    }
       

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return Ralph
}
function destructivelyPrependCat(Bob) {
        cats.unshift(Bob)
        return Bob
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return name

}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return name
}

function removeLastCat(Garfield) {
    return cats.slice(0,cats.length-1)
    }

function removeFirstCat() {
        return cats.slice(1)
    }

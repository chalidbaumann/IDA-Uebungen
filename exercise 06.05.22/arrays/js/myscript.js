console.log('Hello World')

let number = 9
let string = 'string'

console.log(number.toString())
console.log(string)




// arrays

let array = [3, 4, 5, 6, 7, 14, 50, 9]
console.log(array.length)



// "for" 
//wiederholt Funktion
// for (let i = 0; i < array.length; i += 2){
//      //console.log('for loop in position: ');
//      //console.log(i)
//      //console.log('show array in position')
//      //console.log(array [i])
//      console.log('showing array in position:' + i)
//      console.log(array[i])
//     }


//cmd +shift+7 für mehrere Zeilen in Kommentar setzten


//length ist property from ray
// console.log(array.length)





//hw to fill an array with random values
let empty_array = []

let number_of_items = 50

for(let i = 0; i < number_of_items; i++){
    let random_value = Math.random() * 1000
    empty_array.push(random_value)
}

console.log(empty_array)



// let's see what objects are

let object = {
    x: 100,
    y: 200,
    width: 100,
    height: 300
}


let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)

console.log(object)







function request_cat_facts(){

let base_url = 'https://cat-fact.herokuapp.com'

let query = '/facts'


//nimmt Adresse extern oder intern
fetch(base_url + query) //schickt request an server
.then(function (response){ //warten bis erster response kommt, server antwortet wenn ok oder nicht, wenn ok werden packete gedownloaded
    return response.json()//warten bis alle daten zurück kommen, response als json zeigen
})
.then(function (data){ //bauen, what do we do with the collected information 
   build_facts(data)
    // here we can build another function

})
.catch(function (error){
    console.log(error)
})
}








// //let url = 'https://cataas.com/cat'

// let base_url = 'https://cat-fact.herokuapp.com'

// let query = '/facts'


// //nimmt Adresse extern oder intern
// fetch(base_url + query) //schickt request an server
// .then(function (response){ //warten bis erster response kommt, server antwortet wenn ok oder nicht, wenn ok werden packete gedownloaded
//     return response.json()//warten bis alle daten zurück kommen, response als json zeigen
// })
// .then(function (data){ //bauen, what do we do with the collected information 
//    build_facts(data)
//     // here we can build another function

// })
// .catch(function (error){
//     console.log(error)
// })



function build_facts (data){
    //let javascript mess with your html class
    let cat_facts_div = document.querySelector('.cat-facts')
    console.log(data)
    for(let i = 0; i < data.length; i++){
    let data_point = data[i]
   // console.log(data_point)
   //display only the text
   console.log(data_point['text'])
   //build a virtual div in javascript
   let cat_fact = document.createElement('div')
   // text to do it
   cat_fact.textContent = data_point['text']
   // add it to the html element that we grabbed above
   cat_facts_div.appendChild(cat_fact)
}
}


function request_coffee(){
let base_url = 'https://coffee.alexflipnote.dev'
let query = '/random.json'

fetch(base_url + query)
.then(
    function(response){
        return response.json()
    }
)
.then(
    function(data) {
        build_coffee(data)
    }
)
.catch(
    function (error) {
        console.log(error)
    }
)
}


function build_coffee(data){
    console.log(data)
}
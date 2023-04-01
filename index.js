
//increment the count varibiale when the button is clicked
// change the count-el in the HTML to reflect the new count 



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



console
//  camelCase -- capitalize second letter of the second word
let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0 

function increment() {
    count =count + 1 
    countEl.textContent=count
  
}

// 1. Create a function, save(), which logs out the count when it's called and also save previous counts


function save() {
    let countStr=count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0 // to display 0 on html page. However memory still picks up count from where it left off unless we reinitialze the count to 0 as below
      count=0  // returns the count arithmetic to 0 after it has been saved  and starts counting again  
    console.log(count)
    
}



















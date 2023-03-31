## PASSENGER COUNTER APP

* This is the beginning of my learning journey of frontend software engineering for blockchain development.

* As a pilot,  I decided to code along with [Per Harald Borgen](https://scrimba.com/learn/learnjavascript) toget to understand the various first principles of software engineering on the frontend. 

* Most of the work here is not my original work as I learn how to learn by getting my hands dirty and not parsing through tutorial docs and videos.


**Disclaimer** 
- This project is a practice project and should not be recognized as one of my portfolio projects..

### Learnings 
-  Create a function (you decide the name) that logs out the number 42 to the console
-  Call/invoke the function

``` 
function num() {
     console.log(42)
 }

num()
```

- Create function that adds laps times.
- Log the answer out 
- Call the function to display the answer
```
let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapsums() {
let totallaptimes=lap1 +lap2 + lap3


console.log(totallaptimes)
**OR**
    _console.log(lap1+lap2+lap3)_
}

lapsums()
```

- Create a function that increments the lapsCompleted variable with one
- Run it three times 


```let lapscompleted = 0 
function incrementLap() {
    lapscompleted = lapscompleted+1
}

incrementLap()
incrementLap()
incrementLap()


console.log(lapscompleted)
```

* #### Core Exercise

- increment the count varibiale when the button is clicked
- change the count-el in the HTML to reflect the new count 



- intialize the count as 0
- listen for clicks on the increment button
- increment the count variable when the button is clicked
- change the count-el in the HTML to reflect the new count


<Process exited with code 1
Uncaught ReferenceError ReferenceError: document is not defined
    at <anonymous> (undefined:15:13)
    at Module._compile (undefined:1275:14)
    at Module._extensions..js (undefined:1329:10)
    at Module.load (undefined:1133:32)
    at Module._load (undefined:972:12)
    at executeUserEntryPoint (undefined:83:12)
    at <anonymous> (undefined:23:47)
No debugger available, can not send 'variables'>

The above error is raised because the code is running in a non-browser environment, such as in a Node.js server-side application, and does not have access to the document object that is defined by the browser.


- Document Object Model - How you ask Javascript to modify a website
# LFG!!!!!


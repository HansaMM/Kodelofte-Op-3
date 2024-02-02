function myfunction() {
    console.log('Hello!');
}

myfunction()

const mybutton =  document.getElementById("Click-Me")

mybutton.addEventListener("Mauseenter", myfunction)

function withParameneters (name) {
    const greeting = "greeeting" + name
    console.log(greeting)
}

withParameneters (Hans)
withParameneters (Leo)

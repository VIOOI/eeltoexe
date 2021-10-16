let inpText = document.querySelector('#number')
        
document.querySelector('.grid').addEventListener('click', function (event) {
    if(event.target.classList.contains('itemNumber')){
        inpText.textContent = inpText.textContent + event.target.textContent
    }else if(event.target.classList.contains('del')){
        inpText.textContent = inpText.textContent.slice(0, -1)
    }else if(event.target.classList.contains('itemZnak')){
        provZnaka(event)
    }
    if(event.target.classList.contains('ravn')){
        let result2 = eval(inpText.textContent)
        inpText.textContent = result2
    }
})


function provZnaka(event) {
    let endZnak = inpText.textContent.slice(-1)
    switch (endZnak) {
            case "+":
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + event.target.textContent
                break;
            case "-":
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + event.target.textContent
                break;
            case "/":
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + event.target.textContent
                break;
            case "*":
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + event.target.textContent
                break;
            default:
                inpText.textContent = inpText.textContent + event.target.textContent
                break;
        }
}
document.onkeydown = function (event) {
    console.log(event);
    let result
    switch (event.key) {
        case "0":inpText.textContent = inpText.textContent + "0"
            break;
        case "1": inpText.textContent = inpText.textContent + "1"
            break;
        case "2": inpText.textContent = inpText.textContent + "2"
            break;
        case "3": inpText.textContent = inpText.textContent + "3"
            break;
        case "4": inpText.textContent = inpText.textContent + "4"
            break;
        case "5": inpText.textContent = inpText.textContent + "5"
            break; 
        case "6": inpText.textContent = inpText.textContent + "6"
            break;
        case "7": inpText.textContent = inpText.textContent + "7"
            break;
        case "8": inpText.textContent = inpText.textContent + "8"
            break;
        case "9": inpText.textContent = inpText.textContent + "9"
            break;
        case "Backspace": inpText.textContent = inpText.textContent.slice(0, -1)
            break;
        case "+": provZnakaKey("+")
            break;
        case "-": provZnakaKey("-")
            break; 
        case "/": provZnakaKey("/")
            break;
        case "*": provZnakaKey("*")
            break;
        case "=":
            result = eval(inpText.textContent)
            inpText.textContent = result
        case "Enter":
            result = eval(inpText.textContent)
            inpText.textContent = result
        default:
            break;

        function provZnakaKey(znak) {
            let endZnak = inpText.textContent.slice(-1)
            console.log(endZnak);
            if (endZnak === "+") {
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + znak
            }else if(endZnak === "-"){
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + znak
            }else if(endZnak === "/"){
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + znak
            }else if(endZnak === "*"){
                inpText.textContent = inpText.textContent.slice(0, -1)
                inpText.textContent = inpText.textContent + znak
            }else{
                inpText.textContent = inpText.textContent + znak
            }
        }
        
    }

}

// let gridItem = document.querySelectorAll('.lupa')
// for (let index = 0; index < gridItem.length; index++) {
//     const element = gridItem[index];
//     element.addEventListener('mousedown', function (event) {
//         inpText.style.fontSize = '50px'
//     })
//     element.addEventListener('mouseup', function (event) {
//         inpText.style.fontSize = '30px'
//     })
    
// }

console.log(inpText);
const resultel = document.getElementById("result")
const lengthel = document.getElementById("length")
const uppercaseel = document.getElementById("uppercase")
const lowercaseel = document.getElementById("lowercase")
const numberel = document.getElementById("number")
const symbolsel = document.getElementById("symbols")
const generateel = document.getElementById("generate")
const clipboardel = document.getElementById("clipboard")

const randomFnc = {
    lower: getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbols:getRandomSymbols
}

generateel.addEventListener("click", ()=>{
    const length = +lengthel.value
    const hasLower = lowercaseel.checked
    const hasUpper = uppercaseel.checked
    const hasNumbber = numberel.checked
    const hasSymbols = symbolsel.checked

    resultel.innerText = generatePassword(length, hasLower,hasUpper , hasSymbols, hasNumbber)
})



function generatePassword(length, lower, upper, symbols, number){
    let generatePassword = ''
    const typesCount = lower + upper + symbols + number
   
    const typesArr = [{lower}, {upper}, {symbols}, {number}] .filter(item => {
           return Object.values(item)[0]
        })
        console.log(typesArr)
  
    if(typesCount === 0){
        return ''
    }
    for( let i = 0 ; i < length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatePassword += randomFnc[funcName]()
        })
    }
    console.log(generatePassword)
    console.log(generatePassword.length)
    const finalpass = generatePassword.slice(0, length)
    return finalpass
}


function getRandomLower(){
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbols(){
    const symbols = '!@#$%^&*(){}=<>/.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

clipboardel.addEventListener("click",()=>{
    const text = document.createElement("textarea")
    const pass = resultel.innerText
    if(!pass){
        return
    }
    text.value = pass
    document.body.appendChild(text)
    text.select()
    document.execCommand("copy")
    text.remove()
    alert(`${pass}   copied to ClipBoard`)
})
// console.log(randomFnc.lo)

 // for (var key in typesArr) {
    //     alert("Key is " + key + ", value is" + typesArr[key]);
    //    }


     // const typesArr = [lowers = lower, uppers = upper, symbol = symbols, numbers = number]
    // .filter(item => {
    //     // console.log(Object.values(item))
    //     return item
    // //    return Object.values(item)[0]
    // })
    // console.log(Object.values(typesArr[0])[0])

      // typesArr.forEach(type =>{
    //     const funcName = Object.keys(type)[0]

    //     console.log(randomFnc[funcName]())
    //     // generatePassword += randomFnc[funcName]()
    // })

        // for( let i = 0 ; i < length; i += typesCount){
    //     typesArr.forEach(type =>{
    //         const funcName = type.keys
    //         console.log(funcName)
    //         // generatePassword += randomFnc[funcName]()
    //     })
    // }
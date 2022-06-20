const degrees = document.querySelector('.degrees') //Dane wejściowe z inputa
const firstMsg = document.querySelector('.firstPara') //Informacja w jakiej jednosce podajemy wartość
const secondMsg = document.querySelector('.secondPara') //Wynik 
const converter = document.querySelector('.convert') //Przycisk do konwertowania temperatur
const reset = document.querySelector('.rest') //Przycisk do resetowania 
const swaper = document.querySelector('.swap') //Przycisk do zamiany jednostek
const header = document.querySelector('h1') // Uchwyt do którego przypisujemy klasę

//Funkcja sprawdzająca na jakich jednostkach operujemy
const checkSituation = () => {
    if(degrees.value.length < 1){
        return
    }else if(header.className == ''){
        convertCelcToFahr()
    }else if(header.className == 'fahrToCelc'){
        convertFahrToCelc()
    }
}
//Funkcja do zamiany jednostek
const swapSituation = () => {
        if(header.className == ''){
            header.classList.add('fahrToCelc')
            firstMsg.textContent = 'Podaj temperaturę w stopniach Fahrenheita'
            secondMsg.textContent = ''
        }else if(header.className = 'fahrToCelc'){
            header.classList.remove('fahrToCelc')
            firstMsg.textContent = 'Podaj temperaturę w stopniach Celsjusza'
            secondMsg.textContent = ''
        }
}
//Funkcje konwerujące temperatury
const convertCelcToFahr = () => {
    let result = (Number(degrees.value) * 1.8 + 32).toFixed(1);
    secondMsg.textContent = `${degrees.value} stopni Celsjusza to ${result} stopni Fahrenheita`
    degrees.value = ''
}
const convertFahrToCelc = () => {
    let result = Number(degrees.value - 32)
    let result2 = (Number(result / 1.8)).toFixed(1)
    secondMsg.textContent = `${degrees.value} stopni Fahrenheita to ${result2} stopni Celsjusza`
    degrees.value = ''
}

converter.addEventListener('click', checkSituation)

//Nasłuchiwacz wraz z anonimową funkcją resetującą formularz
reset.addEventListener('click', () => {
    degrees.value = ''
    secondMsg.textContent = ''
})

swaper.addEventListener('click', swapSituation)
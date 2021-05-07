// function telefon() {
//     const tele = document.getElementById('tel').value
//     if(tele !== Number) {
//         alert ('Tylko cyfry')
//     }
//     else(tele === Number) 
//     console.log(tele)
// }

function imie() {
    const imie = document.getElementById('imie').value
    if(imie.length < 2) {
        alert ('Wpisałeś mniej niż dwa znaki')
    } else(imie.length > 2)
    console.log(imie)
}

function nazwisko() {
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.length < 3) {
        alert ('Wpisałeś mniej niż trzy znaki')
    } else(nazwisko.length > 2)
    console.log(nazwisko)
}

function fon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
             alert("Tylko cyfry")
             return
         }
    })
    console.log(num)
}

function email() {
    const email = document.getElementById('email').value
    if(email.search('@') === -1) {
    alert('niepoprawny email')}
    else{
    console.log(email)}
}

function mess() {
    const mess = document.getElementById('mess').value
    if(mess.length < 20) {
        alert ('Wpisałeś mniej niż dwadzieścia znaków')
    } else 
    console.log(mess)
    
}

function select() {
    const select = document.getElementById('pizza')
}


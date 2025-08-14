// Goal: Select the <li> that contains "About".
let parties = document.querySelector('.menu li:nth-child(2)')
console.log(parties.textContent)

// Goal: Select the tagline of the second profile.
let city = document.querySelector('.profile:nth-of-type(2) #tagline')
console.log(city.textContent)

let youdaone = document.querySelector('#blog article:nth-of-type(1) h2')
console.log(youdaone.textContent)
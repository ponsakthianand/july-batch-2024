// string
// boolean
// number
// undefined
// null
// Object


let area = "Mogappair"
let areaNumber = 12738
let isValid = true
let country
let continent = null

let object = {
  area: "Mogappair",
  areaNumber: 12738,
  isValid: true,
  country,
  continent: null
}

let = ['1', 2, { name: 'name' }]

const newArray = [
  {
    area: "Mogappair",
    areaNumber: 12738,
    isValid: true,
    country,
    continent: null
  },
  {
    area: "Chennai",
    areaNumber: 23127,
    isValid: false,
    country,
    continent: null
  },
  {
    area: "Ambattur",
    areaNumber: 312312,
    isValid: true,
    country,
    continent: null
  },
  {
    area: "Central",
    areaNumber: 23423,
    isValid: true,
    country,
    continent: null
  }
]

const SecondArray = [
  {
    area: "Mylapore",
    areaNumber: 12738,
    isValid: true,
    country,
    continent: null
  },
  {
    area: "Perambur",
    areaNumber: 23127,
    isValid: false,
    country,
    continent: null
  },
  {
    area: "Vadapalani",
    areaNumber: 312312,
    isValid: true,
    country,
    continent: null
  },
  {
    area: "Kodambakkam",
    areaNumber: 23423,
    isValid: true,
    country,
    continent: null
  }
]

const joinArrayConcat = newArray.concat(SecondArray)

const joinArray = [...newArray, ...SecondArray]

const spreadObject = { ...object }

//process object data using spread operator
const changeAreaName = { ...object, area: 'Padi', areaNumber: 2 }


//preocess object data from array using spread
const arrayProcess = newArray.map((item) => {
  const updateAreaNumer = item.area === "Mogappair" ? 1000000000 : item.areaNumber
  return {
    ...item,
    areaNumber: updateAreaNumer
  }
})


console.log('arrayCheck', arrayProcess);


const a = 1
const b = 6
const c = 3

let cityA = 'Chennai'

let cityB = 'Madurai'

let about = ''

//"My City is Madurai Chennai in Tamilnadu"
about = "My City is " + cityA + ' ' + cityB + " in Tamilnadu"
console.log(about);
about = `My City is ${cityA} ${cityB} in Tamilnadu`
console.log(about);

// current Date
console.log(new Date());


// spread operators


// console.log(a + b * c / b);
// console.log((a + b * c) / b);


function normalFunction() {
  return (a + b * c) / b
}


const arrowFunction = (valueA, valueB, valueC) => {
  const cat = 3
  return ((valueA + valueB * valueC) / cat)
}


// traditional method
if (a !== 1) {
  console.log(normalFunction())
} else if (b === 2) {
  console.log(arrowFunction(10, 30, 50))
} else {
  console.log('Skip');
}

// ternary opration
const valueX = (a === 1) ? normalFunction() : (b === 2) // just if and else

const loggingData = (a === 1) ? normalFunction() : (b === 2) ? arrowFunction(10, 30, 50) : 'Skip'; // if elseif and else

console.log(loggingData)


//Switch case
switch (3) {
  case 1:
    console.log(false);
    break;
  case 2:
    console.log(true);
    break;
  default:
    console.log('Nothing doing');
    break;
}



const aValue = 1
const bValue = 6
const cValue = 3

// Comparison
if (aValue === 1 && bValue === 5) {
  console.log(normalFunction())
} else if (aValue === 2 || bValue === 6) {
  console.log(arrowFunction(10, 30, 50))
} else {
  console.log('Skip');
}



// const _name = 'sakthi'

// let city = 'Chennai'
// console.log(city)
// city = "Madurai"

// console.log(city)



// Document

// console.log('rrrr', document);


function changeLogoFilter() {
  const element = document.getElementById("invertLogo")
  element.classList.remove('logo')
}

function activeFunction() {
  const element = document.getElementById("menu")
  element.classList.add('active')
}

function deactiveFunction() {
  const element = document.getElementById("menu")
  element.classList.remove('active')
}
const input = document.getElementById('weight')
const planets = document.getElementById('planets')
const calculateBtn = document.getElementById('calculateBtn')
const output = document.getElementById('output')


const planetImages = {
    Mercury: "images/m1.gif",
    Venus: 'images/venus.gif',
    Earth: 'images/e1.gif',
    Mars: 'images/mars1.gif',
    Jupiter: 'images/j1.gif',
    Saturn: 'images/saturn.png',
    Uranus: 'images/u1.gif',
    Neptune: 'images/n1.gif',
    Pluto: 'images/P1.gif',
    Moon: 'images/moon.png',
    Sun: 'images/sun1.gif'
  }

calculateBtn.addEventListener('click', calculateWeight)

function calculateWeight() {
    const mass = Number(input.value)
    const planet = planets.value
    let gravity = 0
    const earthGravity = 9.81

    switch (planet) {
        case 'Mercury':
            gravity = 3.7
            break
        case 'Venus':
            gravity = 8.87
            break
        case 'Earth':
            gravity = 9.81;
            break;
        case 'Mars':
            gravity = 3.711;
            break;
        case 'Jupiter':
            gravity = 24.79;
            break;
        case 'Saturn':
            gravity = 10.44;
            break;
        case 'Uranus':
            gravity = 8.69;
            break;
        case 'Neptune':
            gravity = 11.15;
            break;
        case 'Pluto':
            gravity = 0.62;
            break;
        case 'Moon':
            gravity = 1.62;
            break;
        case 'Sun':
            gravity = 274;
            break
        default:
            output.innerHTML = 'Invalid';
            return;
    }

    const weight = ((mass * gravity)/earthGravity).toFixed(2)


    const planetImg = document.createElement('img')
    planetImg.src = planetImages[planet]
    planetImg.alt = planet
    planetImg.width = 200
    planetImg.height = 200
    planetImg.style.paddingLeft ='20px'
    
    


    output.innerHTML = `Weight on ${planet}: ${weight} Kg`
    output.appendChild(planetImg)
}

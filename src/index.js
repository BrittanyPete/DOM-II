import './less/index.less'

// Your code goes here!
const logoHeading = document.querySelector('h1.logo-heading');
const links = document.querySelectorAll('nav a');
const topImg = document.querySelector('header img');
const infoHeaders = document.querySelectorAll('.content-section h2');
const destImg = document.querySelector('.content-destination img');
const destinations = document.querySelectorAll('.destination h4');



logoHeading.addEventListener('pointerover', evt => {
    logoHeading.style.color = 'purple';
    // console.log(`This ${evt} happened`);
});
logoHeading.addEventListener('pointerout', evt => {
    logoHeading.style.color = '';
    // console.log(`This ${evt} happened!`);
});


links.forEach( link => {
    link.addEventListener('click', evt => {
        alert(`You clicked the ${link.textContent} link.`)
    })
});

topImg.addEventListener('wheel', evt => {
    topImg.style.border = '3px solid purple';
});


infoHeaders.forEach(header =>{
    header.addEventListener('mouseover', evt => {
        header.style.fontSize = '5rem';
})
    header.addEventListener('mouseleave', evt => {
        header.style.fontSize = '';
    })
});

destImg.addEventListener('dblclick', evt => {
    destImg.style.border = '10px dotted yellow';
});




document.addEventListener('gotpointercapture', evt => {
    console.log(`The ${evt.target.textContent} has been captured!`);
});

destinations.forEach(dest => {
    dest.addEventListener('pointerdown', evt => {
        dest.setPointerCapture(evt.pointerId);
    });
});


function getKey(key) {
    console.log(`${key.code}`);
 }
 
 document.addEventListener('keypress', getKey);
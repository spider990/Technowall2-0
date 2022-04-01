anime({
    targets: '.box',
    easing: 'easeInOutQuad',
    width: '100%',
    loop: true,
    backgroundColor: '#77f777',
    duration: 4000,
    direction: 'alternate'
})

anime({
    targets: '.box2',
    easing: 'easeInOutQuad',
    width: '100%',
    loop: true,
    backgroundColor: '#77f777',
    duration: 5000,
    direction: 'alternate'
})

anime({
    targets: '.box3',
    easing: 'easeInOutQuad',
    width: '100%',
    loop: true,
    backgroundColor: '#77f777',
    duration: 6000,
    direction: 'alternate'
})

const button = document.querySelector('.btn');

const mouseHoverAnimation = function() {
    anime({
        targets: '.btn',
        borderRadius: ['50%'],
    })
}

const mouseOutAnimation = function() {
    anime({
        targets: '.btn',
        borderRadius: ['10px'],
    })
}



button.addEventListener('mouseover', mouseHoverAnimation),
button.addEventListener('mouseout', mouseOutAnimation);

const button2 = document.querySelector('.btn2');

const mouseHoverAnimation1 = function() {
    anime({
        targets: '.btn2',
        borderRadius: ['50%'],
    })
};

const mouseOutAnimation1 = function() {
    anime({
        targets: '.btn2',
        borderRadius: ['10px'],
    })
}

button2.addEventListener('mouseover', mouseHoverAnimation1)
button2.addEventListener('mouseout', mouseOutAnimation1)

const button3 = document.querySelector('.btn3');

const mouseHoverAnimation2 = function() {
    anime({
        targets: '.btn3',
        borderRadius: ['50%'],
    })
};

const mouseOutAnimation2 = function() {
    anime({
        targets: '.btn3',
        borderRadius: ['10px'],
    })
}

button3.addEventListener('mouseover', mouseHoverAnimation2)
button3.addEventListener('mouseout', mouseOutAnimation2)

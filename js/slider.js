const slidersQty = 3;
var container = document.querySelector('.slider');
var controls = document.querySelectorAll('.slider-controls li');
var slides = document.querySelectorAll('.slide');
var interval = setInterval(showNext, 5000);

for(var i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function(e) {
        var id = this.id.split('-')[1];
        switchSlidesTo(id);
        clearInterval(interval)
        interval = setInterval(showNext, 5000);
    });
}

function switchSlidesTo(id) {
    container.querySelector('.slide.active').classList.remove('active');
    container.querySelector('li.active').classList.remove('active');
    slides[id].classList.add('active');
    controls[id].classList.add('active');
}

function showNext(){
    var currId = container.querySelector('li.active').id.split('-')[1];
    var nextId = (currId + 1) % slidersQty;
    switchSlidesTo(nextId);
}




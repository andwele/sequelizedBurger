var dogs = {
    raining: true,
    noise: 'woof',
    makeNoise: function() {
        console.log(this.noise);
    }
}
var cats = {
    raining: false,
    noise: 'meow',
    makeNoise: function() {
        console.log(this.noise)
    }
}

function massHysteria() {
    if (cats.raining && dogs.raining) {
        console.log('DOGS AND CATS LIVING TOGETHER!! MASS HYSTERIA!')
    }
}
cats.raining = true;

massHysteria();

dogs.makeNoise();


cats.makeNoise();
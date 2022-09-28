// Vars
// Number generator
var figures = 2; // Cantidad de cifras del número
var operator = "+"; // Operador
var first = Math.round(Math.random()*100, 0); // Número first del target
var second = Math.round(Math.random()*100, 0); // Número second del target
var tri = 0;
var score = 0;
var hiscore = 0;

// Functions
function provide(){ // Genera dos nuevos números aleatorios
    first = Math.round(Math.random()*100, 0);
    second = Math.round(Math.random()*100, 0); 

    return [
        first,
        second
    ]
}

function calc(first, second, tri){ // Response si el resultado enviado por el usuario es correcto
    var real_result = first+second;

    if(tri == ''){
        tri = 0;
    }

    var tried_result = tri;

    if(real_result != tried_result){
        var response = false;
    } else {
        var response = true;
    }

    $$('#response').set('text', response);


    return response;
}

function game_over(){
    score = 0;
    $$('#score').set('text', score);
}

function start(){

    provide();

    // var starting_counter = 5;
    // var interval = setInterval(function() {
    //     starting_counter--;

    //     var percentage = 100/5*starting_counter;
    //     $$('#time_barr').setStyle('width', percentage+'%');

    //     if (starting_counter == 0) {
    //         clearInterval(interval);
    //         game_over();
    //     }
    
    //     return starting_counter;
    
    // }, 1000);
}
//////

// Course
// Render
$$('#start').addEvent('click', function(event){
    game_over();
    start();

    $$('#send').set('text', 'SEND');
    $$('#first').set('text', first);
    $$('#second').set('text', second);

});

$$('#send').addEvent('click', function(event){

    var tri = $$('input[name=diana_input]').get('value')[0];
    var resulting = calc(first, second, tri);
    $$('input[name=diana_input]').set('value', '');

    if(resulting == true){
        score++

        if(score > hiscore){
            console.log("hi");
            hiscore = score;
            $$('#hiscore').set('text', hiscore);
        }

        provide();

        $$('#first').set('text', first);
        $$('#second').set('text', second);
        $$('#score').set('text', score);


    } else {
        $$('#send').set('text', '');
    }
});

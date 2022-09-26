// Vars
// Number generator
var figures = 2; // Cantidad de cifras del número
var operator = "+"; // Operador
var first = Math.round(Math.random()*100, 0); // Número first del target
var second = Math.round(Math.random()*100, 0); // Número second del target
var tri = 0;

// Functions
function calc(first, second, tri){
    
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

// Course
// Render
$$('#first').set('text', first);
$$('#second').set('text', second);

$$('#send').addEvent('click', function(event){
    
    var tri = $$('input[name=diana_input]').get('value')[0];

    var resulting = calc(first, second, tri);

    console.log(resulting);


})


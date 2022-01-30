//https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=1c9fa71af493c943fda07fac015535a6

let temp;
let p;

function setup(){
    createCanvas(600,600);
    setInterval(callAPI, 2000);
}

function callAPI(){
    loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=1c9fa71af493c943fda07fac015535a6', gotData);
}

function gotData(data){
    console.log(data);
    console.log(data.main.temp);
    temp = data.main.temp;
    
}

function draw(){
    background(200);
    noStroke();

    if( temp < 2.5){
        fill(0, 0, 255);
    }else{
        fill(255, 0, 0);
    }
    rect(0, 0, 100, 100);

    // createP(temp);
    p = createP(temp);
    p.style('font-size', '36px');
    p.position(20, 120);
}


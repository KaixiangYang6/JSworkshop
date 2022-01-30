let catApi = "https://api.thecatapi.com/v1/images/search?";

function setup() {
    noCanvas();
    loadJSON(catApi, gotData);
}

function gotData(data){
    console.log(data);
    console.log(data[0].url);
    createImg(data[0].url);
}

function draw(){

}

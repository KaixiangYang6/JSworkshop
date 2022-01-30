let classifier;
let video;
let resultsP;

function setup(){
    noCanvas();
    video = createCapture(VIDEO);//creating webcam input
    classifier = ml5.imageClassifier('MobileNet', video, modelReady);//setting "classifier" to be ML5 imageClassifier with Mobilenet(name of model), video as second argument, finally call a function called modelReady
    resultsP = createP('Loading model and video...');//Variable resultsP creates a text snippet
}

function modelReady(){
    console.log('Model Ready');//Print to console when this function runs- good for debugging
    classifyVideo();// Next, trigger function called calssifyVideo(we will create it next.)
}

function classifyVideo(){
    classifier. classify(gotResult);//Get a prediction = ML classification for the current video frame
    //Remember that in setup we have set the model to use video as its input.
}

function gotResult(err, results){
    resultsP.html(`${results[0].label } ${nf(results[0].confidence, 0, 2)}`);
    classifyVideo();
    /* Trigger the function with two arguments: either we get error or results
    Our old resultsP variable gets filled with new text
    `is for outputting a string, ${extracts data from our results array (see next slide)
    The results array is ordered by confidence, starting from index 0 
    [0] is thus our top result and we print its label + confidence
    Finally, call calssifyVideo again
    */
}


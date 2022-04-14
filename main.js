Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
console.log("ml5 version:",ml5.version)

teach_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eHYjx8H46/model.json",modelloaded)

function modelloaded(){
    console.log("moldel succes");
}


Webcam.attach("#camera")

function takeapic(){
Webcam.snap(function (picmall){
document.getElementById("result").innerHTML="<img id='mypic'src='"+picmall+"'/>";
});
}
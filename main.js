var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fahLxOqAk/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('ear')

        if (results[0].label == "Dog") {
            img.src = 'dog.jpg';
            dog = dog + 1;
        } else if (results[0].label == "Cat") {
            img.src = 'cat.jpg';
            cat = cat + 1;
        } else if (results[0].label == "Lion") {
            img.src = 'lion.jpg';
            lion = lion + 1;
        } else if (results[0].label == "Cow") {
            img.src = 'cow.jpg';
            cow = cow + 1;
        } else {
            img.src = 'ear.png';
        }
    }
}
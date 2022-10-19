data = [
  {
    image: "static/images/angry_4.jpg",
    answer: "Angry",
    opt1: "Angry",
    opt2: "Sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/disguest_5.jpg",
    answer: "Disguest",
    opt1: "Angry",
    opt2: "Sad",
    opt3: "Disguest",
    opt4: "Excited",
  },
  {
    image: "static/images/excited.jpg",
    answer: "Excited",
    opt1: "Angry",
    opt2: "Sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/fear.jpg",
    answer: "Fear",
    opt1: "Angry",
    opt2: "Sad",
    opt3: "Fear",
    opt4: "Excited",
  },
  {
    image: "static/images/happy_9.jpg",
    answer: "Happy",
    opt1: "Angry",
    opt2: "Sad",
    opt3: "Fear",
    opt4: "Happy",
  },
  {
    image: "static/images/nuetral_3.jpg",
    answer: "Nuetral",
    opt1: "Nuetral",
    opt2: "Sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/sad_5.jpg",
    answer: "Sad",
    opt1: "Nuetral",
    opt2: "Sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/surprise_4.jpg",
    answer: "Surprise",
    opt1: "Nuetral",
    opt2: "Sad",
    opt3: "Happy",
    opt4: "Surprise",
  },
  {
    image: "static/images/blue.jpeg",
    answer: "Blue",
    opt1: "Red",
    opt2: "Green",
    opt3: "Blue",
    opt4: "Yellow",
  },
  {
    image: "static/images/cat.jpeg",
    answer:"Cat",
    opt1: "Cat",
    opt2: "Dog",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/images/crow.jpeg",
    answer: "Crow",
    opt1: "Red",
    opt2: "Green",
    opt3: "Parrot",
    opt4: "Crow",
  },
  {
    image: "static/images/giraffe.jpeg",
    answer: "Giraffe",
    opt1: "Giraffe",
    opt2: "Green",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/images/parrot.jpeg",
    answer: "Parrot",
    opt1: "Giraffe",
    opt2: "Parrot",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/images/pigeons.jpeg",
    answer: "Pigeon",
    opt1: "Pigeon",
    opt2: "Green",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/images/red.jpeg",
    answer: "Red",
    opt1: "Blue",
    opt2: "Green",
    opt3: "Red",
    opt4: "Lotus",
  },
  {
    image: "static/images/rose.jpeg",
    answer: "Rose",
    opt1: "Red",
    opt2: "Green",
    opt3: "Rose",
    opt4: "Lotus",
  },
  {
    image: "static/images/sunflower.jpeg",
    answer: "Sunflower",
    opt1: "Sunflower",
    opt2: "Blue",
    opt3: "Rose",
    opt4: "Lotus",
  },
  {
    image: "static/images/yellow.jpeg",
    answer: "Yellow",
    opt1: "Red",
    opt2: "Green",
    opt3: "Rose",
    opt4: "Yellow",
  },
  {
    image: "static/images/green.jpeg",
    answer: "Green",
    opt1: "Red",
    opt2: "Green",
    opt3: "Rose",
    opt4: "Yellow",
  },
  {
    image: "static/images/jasmine.jpeg",
    answer: "Jasmine",
    opt1: "Red",
    opt2: "Jasmine",
    opt3: "Rose",
    opt4: "Yellow",
  },
  {
    image: "static/images/lion.jpeg",
    answer: "Lion",
    opt1: "Lion",
    opt2: "Green",
    opt3: "Crow",
    opt4: "Yellow",
  },
];
document.getElementById("img").src = data[0]["image"];
document.getElementById("opt11").textContent = data[0]["opt1"];
document.getElementById("opt22").textContent = data[0]["opt2"];
document.getElementById("opt33").textContent = data[0]["opt3"];
document.getElementById("opt44").textContent = data[0]["opt4"];
document.getElementById("opt1").value = data[0]["opt1"];
document.getElementById("opt2").value = data[0]["opt2"];
document.getElementById("opt3").value = data[0]["opt3"];
document.getElementById("opt4").value = data[0]["opt4"];
score = 0;
index = 0;
function validate() {
  var elm = document.getElementsByName("rad");
  if (
    elm[0].checked == true ||
    elm[1].checked == true ||
    elm[2].checked == true ||
    elm[3].checked == true
  ) {
    next();
  } else {
    window.alert("choose answer");

    return false;
  }

  return true;
}

function next() {
  if (index < data.length) {
    var ans = document.getElementsByName("rad");
    ans.forEach((val) => {
      if (val.checked == true) {
        if (data[index]["answer"] == val.value) {
          score++;
          console.log("score");
          console.log(score);
        }
      }
      document.getElementById('opt1').checked =false
      document.getElementById('opt2').checked =false
      document.getElementById('opt3').checked =false
      document.getElementById('opt4').checked =false
      

    });
    

    if (index == data.length-1) {
      console.log(score);
      console.log("data length");
      console.log(data.length);
      if (score == data.length) {
        console.log(score);
        console.log("data length");
        console.log(data.length);
        window.alert("you are successfully completed training");
        window.location.href='home'
      } else {
        window.alert(
          "you are not completed training  \n please repeat the training"
        );
         window.location.href='training'
      }
    } else {
      document.getElementById("img").src = data[index+1]["image"];
      document.getElementById("opt11").textContent = data[index+1]["opt1"];
      document.getElementById("opt22").textContent = data[index+1]["opt2"];
      document.getElementById("opt33").textContent = data[index+1]["opt3"];
      document.getElementById("opt44").textContent = data[index+1]["opt4"];
      document.getElementById("opt1").value = data[index+1]["opt1"];
      document.getElementById("opt2").value = data[index+1]["opt2"];
      document.getElementById("opt3").value = data[index+1]["opt3"];
      document.getElementById("opt4").value = data[index+1]["opt4"];
    }
    index++
  }
}

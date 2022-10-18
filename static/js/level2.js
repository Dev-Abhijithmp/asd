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
    opt2: "sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/fear.jpg",
    answer: "Fear",
    opt1: "Angry",
    opt2: "sad",
    opt3: "Fear",
    opt4: "Excited",
  },
  {
    image: "static/images/happy_9.jpg",
    answer: "Happy",
    opt1: "Angry",
    opt2: "sad",
    opt3: "Fear",
    opt4: "Happy",
  },
  {
    image: "static/images/nuetral_3.jpg",
    answer: "Nuetral",
    opt1: "Nuetral",
    opt2: "sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/sad_5.jpg",
    answer: "Sad",
    opt1: "Nuetral",
    opt2: "sad",
    opt3: "Happy",
    opt4: "Excited",
  },
  {
    image: "static/images/surprise_4.jpg",
    answer: "Surprise",
    opt1: "Nuetral",
    opt2: "sad",
    opt3: "Happy",
    opt4: "Surprise",
  },
  {
    image: "static/image/blue.jpeg",
    answer: "Blue",
    opt1: "Red",
    opt2: "Green",
    opt3: "Blue",
    opt4: "Yellow",
  },
  {
    image: "static/image/cat.jpeg",
    answer: "Cat",
    opt1: "Cat",
    opt2: "Dog",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/image/crow.jpeg",
    answer: "Crow",
    opt1: "Red",
    opt2: "Green",
    opt3: "Parrot",
    opt4: "Crow",
  },
  {
    image: "static/image/giraffe.jpeg",
    answer: "Giraffe",
    opt1: "Giraffe",
    opt2: "Green",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/image/parrot.jpeg",
    answer: "Parrot",
    opt1: "Giraffe",
    opt2: "Parrot",
    opt3: "Lion",
    opt4: "Lotus",
  },
  {
    image: "static/image/pigeons.jpeg",
    answer: "Giraffe",
    opt1: "Giraffe",
    opt2: "Green",
    opt3: "Lion",
    opt4: "Lotus",
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
    });

    if (index == data.length) {
      console.log(score);
      console.log("data length");
      console.log(data.length);
      if (score == data.length) {
        console.log(score);
        console.log("data length");
        console.log(data.length);
        window.alert("you are successfully completed training");
        // window.location.href='home'
      } else {
        window.alert(
          "you are not completed training  \n please repeat the training"
        );
        //  window.location.href='training'
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

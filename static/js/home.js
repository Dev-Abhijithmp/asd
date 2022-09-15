
var rawdata = document.getElementById("data").textContent;


var data = JSON.parse(rawdata);
console.table(data);

let n = 0
let score = 0
let qndata = []
for (const i of data) {
  console.table(i)
}

document.getElementById("qn").innerHTML = data[0]["fields"]["question"]
document.getElementById("num").innerHTML = " " + data.length + " "

function calcscore() {
  console.log(data);

  n++;
  if (n <= data.length) {
    var ans = document.getElementsByName("ans");
    ans.forEach((val) => {
      if (val.checked == true) {
        if (data[n - 1]["fields"]["answer"] == val.value) {
          score++;
        }

        qndata.push({
          question: data[n - 1]["fields"]["question"],
          helpdata: data[n - 1]["fields"]["helpdata"],
          answer: val.value,
        });

        
      }
    });
    document.getElementById("no").checked = true

    if (n < data.length) {
      document.getElementById("qn").innerHTML = data[n]["fields"]["question"]
    } else {
      document.getElementById("btn").innerHTML = "Submit"

    }
    for (const i of qndata) {
        console.table(i);
      }
  } else {
    
    // var xhttp = new XMLHttpRequest()
    // xhttp.open("POST",'score')
    // xhttp.setRequestHeader("Content-Type", "application/json");
    senddata =JSON.stringify(qndata)
    // console.log(senddata)
    // xhttp.s({'data':senddata})
    $.ajax({
        type: 'POST',
        url: '/score',
        data: {
            'data':senddata
        },
    });

    
    // location.href = "score/" + score;
  }

  console.log("iteration value : ", n)
  console.log("score = ", score);
}

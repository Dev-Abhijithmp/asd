

data =[
    {
        'image':'static/images/angry_4.jpg',
        'answer':'Angry',
        'opt1':'Angry',
        'opt2':"Sad",
        'opt3':"Happy",
        'opt4':"Excited"

    },
    {
        'image':'static/images/disguest_5.jpg',
        'answer':'Disguest',
        'opt1':'Angry',
        'opt2':"Sad",
        'opt3':"Disguest",
        'opt4':"Excited"

    }, {
        'image':'static/images/excited.jpg',
        'answer':'Excited',
        'opt1':'Angry',
        'opt2':"sad",
        'opt3':"Happy",
        'opt4':"Excited"

    },
    {
        'image':'static/images/fear.jpg',
        'answer':'Fear',
        'opt1':'Angry',
        'opt2':"sad",
        'opt3':"Fear",
        'opt4':"Excited"

    },
    {
        'image':'static/images/happy_9.jpg',
        'answer':'Happy',
        'opt1':'Angry',
        'opt2':"sad",
        'opt3':"Fear",
        'opt4':"Happy"

    },{
        'image':'static/images/nuetral_3.jpg',
        'answer':'Nuetral',
        'opt1':'Nuetral',
        'opt2':"sad",
        'opt3':"Happy",
        'opt4':"Excited"

    },
    {
        'image':'static/images/sad_5.jpg',
        'answer':'Sad',
        'opt1':'Nuetral',
        'opt2':"sad",
        'opt3':"Happy",
        'opt4':"Excited"

    },
    {
        'image':'static/images/surprise_4.jpg',
        'answer':'Surprise',
        'opt1':'Nuetral',
        'opt2':"sad",
        'opt3':"Happy",
        'opt4':"Surprise"

    },
]
document.getElementById('img').src=data[0]['image']
document.getElementById('opt11').textContent=data[0]['opt1']
document.getElementById('opt22').textContent=data[0]['opt2']
document.getElementById('opt33').textContent=data[0]['opt3']
document.getElementById('opt44').textContent=data[0]['opt4']
document.getElementById('opt1').value =data[0]['opt1']
document.getElementById('opt2').value=data[0]['opt2']
document.getElementById('opt3').value=data[0]['opt3']
document.getElementById('opt4').value=data[0]['opt4']
score = 0
index =0
function validate(){
    
        var elm = document.getElementsByName('rad')
        if (elm[0].checked==true || elm[1].checked ==true|| elm[2].checked ==true|| elm[3].checked ==true) {
            next()
          
            
            
        } else {
            window.alert("choose answer")
            
            return false
            
        }

        
    
    return true
}

function next() {
    if (index<data.length) {
        
        var ans = document.getElementsByName("rad");
    ans.forEach((val) => {
      if (val.checked == true) {
        if (data[index]["answer"] == val.value) {
          score++;
          console.log("score")
          console.log(score)
        }  
      }
    });
    index++

if (index==data.length) {
    if (score==data.length) {
        window.alert("you are successfully completed training")
        window.location.href='home'
        
    } else {
        window.alert("you are not completed training  \n please repeat the training")
        window.location.href='training'
        
    }
    
}else{
document.getElementById('img').src=data[index]['image']
document.getElementById('opt11').textContent=data[index]['opt1']
document.getElementById('opt22').textContent=data[index]['opt2']
document.getElementById('opt33').textContent=data[index]['opt3']
document.getElementById('opt44').textContent=data[index]['opt4']
document.getElementById('opt1').value =data[index]['opt1']
document.getElementById('opt2').value=data[index]['opt2']
document.getElementById('opt3').value=data[index]['opt3']
document.getElementById('opt4').value=data[index]['opt4']
}


    




        
}

    
}
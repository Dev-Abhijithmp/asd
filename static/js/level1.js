


data=[
    {
        'image':'static/images/angry_1.jpg',
        'emotion':'Angry'
    },
    {
        'image':'static/images/angry_2.jpg',
        'emotion':'Angry'
    },
    {
        'image':'static/images/disguest_2.jpg',
        'emotion':'Disguest'
    },
    {
        'image':'static/images/disguest_4.jpg',
        'emotion':'Disguest'
    },
    {
        'image':'static/images/fear_1.jpg',
        'emotion':'Fear'
    },
    {
        'image':'static/images/fear_2.jpg',
        'emotion':'Fear'
    },
    {
        'image':'static/images/happy_4.jpg',
        'emotion':'Happy'
    },
    {
        'image':'static/images/happy_5.jpg',
        'emotion':'Happy'
    },
    {
        'image':'static/images/nuetral_1.jpg',
        'emotion':'Nuetral'
    },
    {
        'image':'static/images/nuetral_2.jpg',
        'emotion':'Nuetral'
    },
    {
        'image':'static/images/sad_1.jpg',
        'emotion':'Sad'
    },
    {
        'image':'static/images/sad_2.jpg',
        'emotion':'Sad'
    },
    {
        'image':'static/images/surprise_1.jpg',
        'emotion':'Surprise'
    },
    {
        'image':'static/images/surprise_2.jpg',
        'emotion':'Surprise'
    },
   
    {
        'image':'static/images/blue.jpeg',
        'emotion':'Blue'
    },
    {
        'image':'static/images/cat.jpeg',
        'emotion':'Cat'
    },{
        'image':'static/images/crow.jpeg',
        'emotion':'Crow'
    },{
        'image':'static/images/giraffe.jpeg',
        'emotion':'Giraffe'
    },{
        'image':'static/images/green.jpeg',
        'emotion':'Green'
    },{
        'image':'static/images/jasmine.jpeg',
        'emotion':'Jasmine'
    },{
        'image':'static/images/lion.jpeg',
        'emotion':'Lion'
    },{
        'image':'static/images/lotus.jpeg',
        'emotion':'Lotus'
    },{
        'image':'static/images/parrot.jpeg',
        'emotion':'Parrot'
    },{
        'image':'static/images/pigeons.jpeg',
        'emotion':'Pigeon'
    },{
        'image':'static/images/red.jpeg',
        'emotion':'Red'
    },{
        'image':'static/images/rose.jpeg',
        'emotion':'Rose'
    },{
        'image':'static/images/sunflower.jpeg',
        'emotion':'Sunflower'
    },
    {
        'image':'static/images/yellow.jpeg',
        'emotion':'Yellow'
    },
]

document.getElementById('img').src = data[0]['image']
document.getElementById('emotion').innerHTML = data[0]['emotion']
index =1
console.log(data[0]['image'])
function next() {
    
    if (index< data.length) {
        document.getElementById('img').src = data[index]['image']
        document.getElementById('emotion').innerHTML = data[index]['emotion']
        if (index==data.length-1) {
            
            document.getElementById('l2').classList.remove('display')
            
        }
        index++
        
    }
   

    
}
function prev() {
    
    if (index>0) {
        
        if (index ==data.length -1) {
            document.getElementById('l2').className ='display button2'
            
            
        }
        index--
        document.getElementById('img').src = data[index]['image']
        document.getElementById('emotion').innerHTML = data[index]['emotion']
        
        
    }
    
}
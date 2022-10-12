


data=[
    {
        'image':'static/images/angry_1.jpg',
        'emotion':'angry'
    },
    {
        'image':'static/images/angry_2.jpg',
        'emotion':'angry'
    },
    {
        'image':'static/images/disguest_2.jpg',
        'emotion':'disguest'
    },
    {
        'image':'static/images/disguest_4.jpg',
        'emotion':'disguest'
    },
    {
        'image':'static/images/fear_1.jpg',
        'emotion':'fear'
    },
    {
        'image':'static/images/fear_2.jpg',
        'emotion':'fear'
    },
    {
        'image':'static/images/happy_4.jpg',
        'emotion':'happy'
    },
    {
        'image':'static/images/happy_5.jpg',
        'emotion':'happy'
    },
    {
        'image':'static/images/nuetral_1.jpg',
        'emotion':'nuetral'
    },
    {
        'image':'static/images/nuetral_2.jpg',
        'emotion':'nuetral'
    },
    {
        'image':'static/images/sad_1.jpg',
        'emotion':'sad'
    },
    {
        'image':'static/images/sad_2.jpg',
        'emotion':'sad'
    },
    {
        'image':'static/images/surprise_1.jpg',
        'emotion':'surprice'
    },
    {
        'image':'static/images/surprise_2.jpg',
        'emotion':'surprice'
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
        index++
        
    }
    console.log("next")
    console.log(index)

    
}
function prev() {
    
    if (index>0) {
        index--
        document.getElementById('img').src = data[index]['image']
        document.getElementById('emotion').innerHTML = data[index]['emotion']
        
        
    }
    console.log("prev")
    console.log(index)
}
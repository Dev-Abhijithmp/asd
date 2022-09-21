

function validate(){
    for (let index = 1; index <=20; index++) {
        var elm = document.getElementsByName('ans'+index)
        if (elm[0].checked==true || elm[1].checked ==true) {
            
            
        } else {
            window.alert("answer all the questions")
            
            return false
            
        }

        
    }
    return true
}
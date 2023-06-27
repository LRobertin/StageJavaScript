function init(){
    var x = document.getElementsByTagName('footer')[0]
    var currentDate = new Date().toISOString()
    x.innerHTML = currentDate
    console.log(x)
}

document.addEventListener('DOMContentLoaded', function(evt){
    console.log(evt)
    init()
})
function init(){
    var x = document.getElementsByTagName('footer')[0]
    var currentDate = new Date().toISOString()
    var style = x.style
    x.innerHTML = currentDate
    style.textDecoration='underline'
    style.fontStyle='italic'
    style.backgroundColor='rgb(128,128,128,0.1)'
    console.log(x)
}

document.addEventListener('DOMContentLoaded', function(evt){
    console.log(evt)
    init()
})

/*
*/
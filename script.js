window.onscroll = function(){scrol()};
function lan(){
    document.getElementById("drop").classList.toggle("lan");
}
function scrol(){
    if(document.documentElement.scrollTop > 300){
        document.getElementById("conH1").style.display = "block";    
    }
    if(document.documentElement.scrollTop > 600){
        document.getElementById("colCard").style.display = "block";
        document.getElementById("or").style.display = "block";
        document.getElementById("ol").style.display = "block";

    }
}
function ol(){
    document.getElementById("colCard1").style.display = "block";
    document.getElementById("colCard").style.display = "none";
    document.getElementById("colCard2").style.display = "none";
}
function or(){
    document.getElementById("colCard2").style.display = "block";
    document.getElementById("colCard").style.display = "none";
    document.getElementById("colCard1").style.display = "none";
}

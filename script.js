window.onscroll = function(){scrol(),scr()};
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
    let i,card;
    if(document.documentElement.scrollTop > 900){
        card = document.getElementsByClassName("card")
        for(i = 0; card.length < 4; i++){
            card[i].style.display = "block";
        }    
    }
}
function ol(){
    document.getElementById("colCard").style.display = "none";
    document.getElementById("colCard1").style.display = "block";
}
function or(){
    document.getElementById("colCard").style.display = "none";
    document.getElementById("colCard2").style.display = "block";
}



function scr(){
    if (document.documentElement.scrollTop > 50){
        document.getElementById("nav").style.padding = "1px";
        document.getElementById("logo").style.fontSize = "50px";
        document.getElementById("logo").style.padding = "15px";

    }
    else{
        document.getElementById("nav").style.padding = "30px";
        document.getElementById("logo").style.fontSize = "60px";
    }
}
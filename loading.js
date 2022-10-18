var link = ['m','o','n','s','o','o','n','.','e','p','i','z','y','.','c','o','m'];
var a = -1;

window.onload = function(){
    const loading = setInterval(() => {
        search();
    }, 333);
}

function search(){
    if(a<0){
        document.getElementById('search').focus();
        a++;
    }else
    if(a<17){
        document.getElementById('search').value = document.getElementById('search').value + link[a];
        a++;
    }else{
        // clearInterval(loading);
        document.getElementsByClassName('searchButton')[0].style.backgroundColor = '#176f7a';
        setTimeout(() => {
            window.open('http://monsoon.epizy.com', '_self');
        }, 500);
    }
}
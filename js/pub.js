$('#search-btn').click(function(){$('.search').slideToggle()});
$('#menu').click(function(){$('.nav').slideToggle()});

(function(){
    var content = document.getElementById('packup-content');
    var btn = document.getElementById('packup-btn');
    var window_height = window.innerHeight * 1.2;
    if (content.offsetHeight >= window_height) {
        content.style.height=window_height+'px';
        content.style.overflow='hidden';
        btn.onclick=function(){
            content.style.height='auto';
            btn.style.display='none';
        }
    } else {
        btn.style.display='none';
    }
}());
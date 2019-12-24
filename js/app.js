var carte = document.querySelector('#carte')
var paths = carte.querySelectorAll('.carte__image.a')
var links = carte.querySelectorAll('.carte__liste a')

// Polyfill du for each
if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this,callback)
    }
}

var activeArea = function (id){

    carte.querySelectorAll('.is-active').forEach(function (item){
            item.classList.remove('is-active')
    })
    if(id !== undefined){
        document.querySelector('#list-' + id).classList.add('is-active')
        document.querySelector('#region-'+ id).classList.add('is-active')
    }
}

paths.forEach(function(path) {
    path.addEventListener('mouseenter',function(e) {

        var id = this.id.replace('region-','')
        activeArea(id)      
        })
        
        
    })


links.forEach(function(link){
    link.addEventListener('mouseenter',function(){
        var id = this.id.replace('list-','')
        activeArea(id)
    })
})

paths.forEach(function(path){
    path.addEventListener('mouseenter',function(){
        var id =this.id.replace('region-','')
        activeArea(id)
    })
})

carte.addEventListener('mouseleave', function(){
    activeArea()
})


// updated 2019
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);




//  old version / jquery
//
// function expand() {
//   $(".search").toggleClass("close");
//   $(".input").toggleClass("square");
//   if ($('.search').hasClass('close')) {
//     $('input').focus();
//   } else {
//     $('input').blur();
//   }
// }
// $('button').on('click', expand);
//

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 4000) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

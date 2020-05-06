var elem = document.querySelector('.pills');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.25;
	elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});

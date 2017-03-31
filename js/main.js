(function(){
	"use strict";

	var accordionItem = document.querySelectorAll('.accordion section');

	for (var i = 0; i < accordionItem.length; i++) {
		accordionItem[i].addEventListener('click', function() { addEvent(event, this) }, false);
	}

	function addEvent(e, target) {
		if (!target.classList.contains('show')) {
			for (var i = 0; i < accordionItem.length; i++) {
				accordionItem[i].classList.remove('show');
			}
			target.classList.add('show');
		}
	}

})();
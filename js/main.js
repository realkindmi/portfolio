document.addEventListener('DOMContentLoaded', function(){
	//progress
	window.onscroll = function () {
		progressBar()
		initFn();
	};

	function progressBar() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementsByClassName('progress_bar')[0].style.width = scrolled + '%';
	}

	//scroll
	var initFn = function(){
		var scrollTop = document.documentElement.scrollTop;
		var index = 0;
		document.querySelectorAll('#wrap > section').forEach((element)=> {
			var top_distance = element.offsetTop;
		
			if ( (top_distance - 500) <= scrollTop ) {
                document.querySelectorAll('#wrap > section')[index].classList.add('active');
					
				index++;
			}
		});
		
	}
	initFn();
	
	//hamburger menu
	var burger = document.querySelector('.btn_menu');
	var gnb = document.querySelector('.gnb_menu');

	burger.addEventListener('click', function(e){
		e.preventDefault();
		toggleClass();
		
		if(burger.classList.contains('active')){
			gnb.style.maxHeight = '100vh';
		} else {
			gnb.style.maxHeight = '0';
		}
	});
	
	gnb.addEventListener('click', function(e){
		toggleClass();
		if(burger.classList.contains('active')){
			gnb.style.maxHeight = '100vh';
		} else {
			gnb.style.maxHeight = '0';
		}
	});
	
	function toggleClass() {
		burger.classList.toggle('active');
	};
	
	//link	
	document.querySelector('.gnb_menu').addEventListener('click', e=>{
		e.preventDefault();
		
		var menuHeight = document.querySelector('.header').offsetHeight;
		var id_value = e.target.dataset.link;
		var location = document.querySelector(id_value).offsetTop;
		
		console.log(menuHeight);

		window.scrollTo({top:location - menuHeight, behavior:'smooth'});
	});
});
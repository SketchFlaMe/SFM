  effect = 0


  
    var swiper = new Swiper('.swiper-container', {
	  loop: true,
	  speed: 2500,
      slidesPerView: 'auto',
      spaceBetween: 30,
	  centeredSlides : true,
	  watchSlidesProgress : true,
	  autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
	  on: {
	    setTranslate: function(){
			slides = this.slides
			for(i=0; i< slides.length; i++){
				slide = slides.eq(i)
				progress = slides[i].progress
				//slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
				    slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
					
					
						slide.css('opacity',(1-Math.abs(progress)/6));
					    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)'); 
					
				}	
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}
		},
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	
	pe = document.getElementById('progressEffect');
	pe.onchange = function(){ 
	    effect = this.value
		swiper.update();	
	}
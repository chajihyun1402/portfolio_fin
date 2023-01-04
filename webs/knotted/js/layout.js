

		/*
		if(window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
		*/

		/*	
			function wheel (event) { 
				
				var delta = 0;
				if(event.wheelDelta) delta = event.wheelDelta / 120;
				else if (event.detail) delta = -event.detail / 3;		
				console.log("dd?????? ==", event.detail);
				console.log("event.wheelDelta ==", event.wheelDelta);
			} 	
			
		$('html, body').on('mousewheel DOMMouseScroll', wheel);
		*/

		$(function () {

			var current;
			var setLayout = function () {
				var winSctop = $(window).scrollTop();
				var totalHeight = 0;
				for (var z = 0; z < $(".box").length; z++) {
					totalHeight = totalHeight + $(".box").eq(z).outerHeight();
					// console.log(totalHeight)

					if (totalHeight > winSctop) {
						current = z;
						break;
					}
				}
				
				
					
					for (var i = 0; i < $(".box").length; i++) {
						$("header").removeClass("co" + i);
					}

					$("header").addClass("co" + current);
					$("header .header-inner > nav > .navlist > li").removeClass("on");
					$("header .header-inner > nav > .navlist > li").eq(current).addClass("on");
				
			}



			setLayout();





			var pshparell = {}
			pshparell.winHT = $(window).height();
			pshparell.distance = pshparell.winHT;
			pshparell.count = current;
			pshparell.mnoving = false;
			pshparell.length = $(document).find(".box").length;

			$(".box").each(function (index, element) {

				$(element).on("mousewheel DOMMouseScroll", function (e) {
					//console.log($(this).html());

					// console.log("e ====", e);
					// console.log("originalEvent ====", e.originalEvent);

					e.preventDefault();

					var El = e.originalEvent;

					var delta = 0;

					if (El.wheelDelta) {
						delta = event.wheelDelta / 120;
						//if (window.opera) delta = -delta;
					} else if (El.detail) delta = -El.detail / 3;

					//console.log("dd?????? ==", El.detail);
					//console.log("event.wheelDelta ==", event.wheelDelta);


					//console.log("next", $(window).scrollTop());
					//console.log("moveTop", moveTop);


					if (pshparell.mnoving == false) {
						pshparell.mnoving = true;

						// 마우스휠을 위에서 아래로			
						if (delta < 0) {

							//console.log("윈도우스크롤값 ====", $(window).scrollTop());
							//console.log("pshparell.distance? ====", pshparell.distance);
							//console.log("length?", pshparell.length-1);
							//console.log("movetop", $(this).offset().top);

							if ($(window).scrollTop() == pshparell.distance * (pshparell.length - 1)) {
								moveTop = $(this).offset().top;
							} else {
								moveTop = $(this).next().offset().top;
								pshparell.count++;
							}
							// 마우스휠을 아래에서 위로
						} else {
							if ($(window).scrollTop() < pshparell.distance) {
								moveTop = $(this).offset().top;
							} else {
								moveTop = $(this).prev().offset().top;
								pshparell.count--;
							}
						}

						// 헤더 함수 실행
						headAni();

						console.log("pshparell.count ===", pshparell.count);

						$("html,body").stop().animate({
							scrollTop: moveTop + 'px'
						}, {
							duration: 800, complete: function () {
								pshparell.mnoving = false;
							}
						});
					}
				});
			});





			// 헤더 함수 실행
			function headAni() {
				for (var i = 0; i < $(".box").length; i++) {
					$("header").removeClass("co" + i);
				}

				$("header").addClass("co" + pshparell.count);
				$("header .navlist > li").removeClass("on");
				$("header .navlist > li").eq(pshparell.count).addClass("on");
			}




			//var itemleng = $('.box').length;
			var scfunc = function (event) {
				event.preventDefault();
				var _this = $(this);
				var _thispt = $(this).parent();
				var _target = $(event).target;
				var _index = _thispt.index(_target);

				pshparell.count = _index;
				var scrollHT = pshparell.distance * pshparell.count;
				// console.log("scrollHT", scrollHT);

				headAni();

				$("html,body").stop().animate({ scrollTop: scrollHT + 'px' }, 500);
			};

			var parrelTrigger = $('.navlist > li > a');
			parrelTrigger.on("click", scfunc);


		})
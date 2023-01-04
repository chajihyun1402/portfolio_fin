
(function() { 
      
    let yOffset = 0; // javascript의 스크롤탑 window.pageYoffset대신 쓸 값
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전에 있는 스크롤 높이
    let currentScene = 0; // 현재 씬
    let enterNewScene = false; // 새로운 씬이 시작되면  true

    //  여기서부터는 나중에 표기 
    let acc = 0.2; 
    let delayedYOffset = 0;
    let rafId;
    let rafState;	
 
 
    const sceneInfo = [
        { 
            //색션 00
            type : 'sticky',
            heightNum : 2.1,
            scrollHeight : 0,
            objs : { 				
                container : document.querySelector(".box-0"),					
//					rgtBckimg01 : document.querySelector(".about .about-img .rgt-img .rgt-bck");
            },                        
        },
        { 
            //색션 00
            type : 'normal',
            heightNum : 5,
            scrollHeight : 0,
            objs : { 				
                container : document.querySelector(".box-1"),					
            },                        
        },
        { 
            //색션 00
            type : 'sticky',
            heightNum : 5,
            scrollHeight : 0,
            objs : { 				
                container : document.querySelector(".box-2"),					
                menuSet : document.querySelector(".menuset > div")
            }, 
            values : { 
                menuSet_translate_in: [0,-3500, {start: 0.2, end: 0.7}],
            }				
        },
//			{ 
//				
//				type : 'sticky',
//				heightNum : 5,
//				scrollHeight : 0,
//				objs : { 				
//					container : document.querySelector("#scroll-section-3"),
//					menuSet : document.querySelector(".menuset > div")
//				},    
//				values : { 
//					menuSet_translate_in: [0,-3450, {start: 0.2, end: 0.7}],
//				}
//				
//				
//            },
    ];
 
    // 레이아웃 설정
    function setLayout() { 		
        // 각 스크롤 섹션의 높이 세팅

        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
            } else if (sceneInfo[i].type === 'normal')  {
                
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            }
            
            
            
        }


        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for(let i = 0; i < sceneInfo.length; i++) { 
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight > yOffset) { 
               currentScene = i;			   	
               break;							   
            }			
        }
            
        console.log("currentScene ==", currentScene);

        document.body.setAttribute('id', `show-scene-${currentScene}`);
                    
    }

             function calcValues(values, currentYOffset) { 
                 let rv;
                 //현재씬에서 스크롤된 비율 구하기
                 //console.log(values);	
                 const scrollHeight = sceneInfo[currentScene].scrollHeight;
                 const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;					 		
                 if(values.length == 3) { 
                    //start ~ end 사이 애니메이션 실행
                        const partScrollStart = values[2].start * scrollHeight;
                        const partScrollEnd = values[2].end * scrollHeight;
                     const partScrollHeight = partScrollEnd - partScrollStart;
                     
                     if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { 
                         rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
                     } else if(currentYOffset < partScrollStart) { 
                         rv = values[0];
                     } else if(currentYOffset > partScrollEnd) { 
                         rv = values[1];
                     }
                     
                 } else { 
                     rv = scrollRatio * (values[1] - values[0]) + values[0];	   
                 }
                 
                 
                 return rv;
             }	




    function playAnimation() { 
        
                Element.prototype.setAttributes = function (attrs) {
                    for (var idx in attrs) {
                        if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
                            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop]}
                        } else if (idx == 'html') {
                            this.innerHTML = attrs[idx]
                        } else {
                            this.setAttribute(idx, attrs[idx]);
                        }
                    }
                };
        

        
                
        
                //console.log(yOffset);
                document.querySelectorAll("[data-ani=fade-up]").forEach(function(element, index) { 
                    let rect = element.getBoundingClientRect();
                    let offset = { 
                        top: rect.top + window.scrollY, 
                        left: rect.left + window.scrollX, 
                    };
                    
                    let realWindowHeight = window.innerHeight;

                    if((yOffset - 200) + realWindowHeight > offset.top ) { 
                        element.classList.add("animate-fadeup");
                    } else { 
                        element.classList.remove("animate-fadeup");
                    }
                })			
                document.querySelectorAll("[data-ani=fade-left]").forEach(function(element, index) { 
                    //console.log(element);
                    let rect = element.getBoundingClientRect();
                    let offset = { 
                        top: rect.top + window.scrollY, 
                        left: rect.left + window.scrollX, 
                    };
                    
                    let realWindowHeight = window.innerHeight;
                    //console.log("객체의 위치 ===" + offset.top);
                    //console.log("realWindowHeight ===" + realWindowHeight);
                    //console.log("스크롤 ===" + yOffset);

                    if((yOffset - 200) + realWindowHeight > offset.top ) { 
                        element.classList.add("animate-fadeleft");

                    } else { 
                        element.classList.remove("animate-fadeleft");
                    }						
                })
        
                document.querySelectorAll("[data-ani=fade-right]").forEach(function(element, index) { 
                    //console.log(element);
                    let rect = element.getBoundingClientRect();
                    let offset = { 
                        top: rect.top + window.scrollY, 
                        left: rect.left + window.scrollX, 
                    };
                    
                    let realWindowHeight = window.innerHeight;
                    //console.log("객체의 위치 ===" + offset.top);
                    //console.log("realWindowHeight ===" + realWindowHeight);
                    //console.log("스크롤 ===" + yOffset);

                    if((yOffset - 200) + realWindowHeight > offset.top ) { 
                        element.classList.add("animate-faderight");

                    } else { 
                        element.classList.remove("animate-faderight");
                    }						
                })
                
                
                 const objs = sceneInfo[currentScene].objs;
                 const values = sceneInfo[currentScene].values;
                 const currentYOffset = yOffset - prevScrollHeight;
                 const scrollHeight = sceneInfo[currentScene].scrollHeight;
                 const scrollRatio = (yOffset - prevScrollHeight) / scrollHeight; //yOffset / 현재 씬의 scrollHeight;	
                 
                 const totalScrollHeight = sceneInfo[0].scrollHeight + sceneInfo[1].scrollHeight + sceneInfo[2].scrollHeight;
                 const totalScrollRatio = yOffset / totalScrollHeight;
                 
                 const scene01_values = sceneInfo[1].values;					

        document.querySelector("#scroll-section-2 .menuset").setAttribute("style", 'opacity : 0');
        
                //console.log(yOffset);
                document.querySelectorAll("[data-ani=fade-up]").forEach(function(element, index) { 
                    //console.log(element);
                    let rect = element.getBoundingClientRect();
                    let offset = { 
                        top: rect.top + window.scrollY, 
                        left: rect.left + window.scrollX, 
                    };
                    
                    let realWindowHeight = window.innerHeight;
                    //console.log("객체의 위치 ===" + offset.top);
                    //console.log("realWindowHeight ===" + realWindowHeight);
                    //console.log("스크롤 ===" + yOffset);

                    if((yOffset - 100) + realWindowHeight > offset.top ) { 
                        element.classList.add("animate-fadeup");
                    }
//						} else { 
//							element.classList.remove("animate-fadeup");
//						}						
                })
                
        //document.querySelector("#scroll-section-2 .outer").setAttribute("style", 'display : none');
        switch(currentScene) { 
            case 0 :  
                console.log("scrollRatio ===", scrollRatio);
            break;
            case 1 :  
                console.log("scrollRatio ===", scrollRatio);
                //document.querySelector(".pageset .page.p2 .hd2").classList.add("animate-fadeup");
            break;
            case 2 :  
                
                document.querySelector("#scroll-section-2 .menuset").setAttribute("style", 'opacity : 1; visibility: visible;');					
                //document.querySelector("#scroll-section-2 .menuset").setAttribute("style", 'display : block');
                
                let menuSet_translate_in = calcValues(values.menuSet_translate_in, currentYOffset);
                
                console.log("scrollRatio ===", scrollRatio);
                
                
                if(scrollRatio <= 0.7) { 
                    //objs.messageA.style.opacity = messageA_opacity_in;

                    objs.menuSet.setAttribute("style", 'transform : translateX(' + menuSet_translate_in + 'px)');
                    
                    //objs.scene01FstCopy.style.setProperty('--gradient-progress', scene01FstCopy_out02 + '%');
                } else { 
                    
                }										
            break;
        }
    }
 
    function scrollLoop() { 
        prevScrollHeight = 0;
        enterNewScene = false
        for(let i = 0; i < currentScene; i++) { 
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        //console.log("prevScrollHeight ==", prevScrollHeight);
        //console.log("현재신의 스크롤하이트 ==", sceneInfo[currentScene].scrollHeight);
        //console.log("yOffset ==", yOffset);


        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) { 
            enterNewScene = true;
            currentScene++;		
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if(yOffset < prevScrollHeight) { 
            enterNewScene = true;
            if(currentScene === 0) return;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        //console.log(yOffset);
        if(enterNewScene) return;
        playAnimation();
    }


    window.addEventListener('scroll', () => { 
        yOffset = window.pageYOffset;
        scrollLoop();
    });     
 
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);     
 
 
 
})();













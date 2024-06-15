/***************************************************
スクロールマジックだ！
***************************************************/
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();


function vendorStart() {

  var userAgent = navigator.userAgent;
  if(userAgent.indexOf('Trident') !== -1) {
  objectFitImages();
  }


  /***************************************************
  スクロールマジックだ！
  ***************************************************/
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();


$(function() {


  var fragranceNavi;

       var w = $(window).width();
       if (w <= 767) {
           if (fragranceNavi) {
               return;
           } else {
             //SP 香りスライダー




               fragranceNavi = new Swiper('.fragrance-navigation-swiper-container', {
                     speed:2000,
                     slidesPerView: 1.85,
                     spaceBetween: 10,
                     centeredSlides: true,
                     watchOverflow: true,
                     setWrapperSize: true,
                     cssWidthAndHeight: true,
                     visibilityFullFit: true,
                     virtualTranslate: false,
                     grabCursor: true,
               });
           }
       } else {
           if (fragranceNavi) {
               swiper.destroy();
               fragranceNavi = undefined;
           }
       }
   //$(window).on('resize', function(){});

    /***************************************************
    PRODUCT 詳細
    ***************************************************/
    if ($('.itemdetail-bxslider').length) {
      //SP スライダー

      var slider = $('#itemdetail-bxslider').bxSlider({
	    pagerCustom: '#itemdetail-slider-wrapper',
	    //slideWidth: 400,
	    controls: false,
	    auto: false, //should be set to true
	    autoHover: true,
	    pause: 2000,
      easing: 'ease-in-out',
      mode:"fade",
      captions: false
	   });
      $('#itemdetail-bxslider').bxSlider({
        auto: false, //should be set to true
      });

    	$('#itemdetail-bx-pager a').on('mouseenter', function(e) {
    		slider.goToSlide(this.getAttribute('data-slide-index'));
    		//slider.stopAuto();
    	});

    	$('#itemdetail-bx-pager a').on('mouseleave', function(e) {
    		//slider.startAuto();
    	});

    }

});

/***************************************************
TOP PAGE START
***************************************************/
$("#top-topic").each(function(i) {
  var tl = new TimelineMax();
  tl.to(this, .5, {
    className: "+=is-active",
  });
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    reverse: false
  }).setTween(tl).addTo(controller)
});

$("#top-concept").each(function(i) {
  var tl = new TimelineMax();
  tl.to(this, .5, {
    className: "+=is-active",
  });
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: .65,
    reverse: false
  }).setTween(tl).addTo(controller)
});

  /***************************************************
  CONCEPT START
  ***************************************************/

  if ($('.parallax').length) {
    Parallax.init('.parallax');
  }

  $("#concept-area").each(function(i) {
    var tl = new TimelineMax();
    tl.to(this, .5, {
      className: "+=is-active",
    });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .5,
      reverse: false
    }).setTween(tl).addTo(controller)
  });
  $("#rule-area").each(function(i) {
    var tl = new TimelineMax();
    tl.to(this, .5, {
      className: "+=is-active",
    });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .65,
      reverse: false
    }).setTween(tl).addTo(controller)
  });
  $("#power-area").each(function(i) {
    var tl = new TimelineMax();
    tl.to(this, .9, {
      className: "+=is-active",
    });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .75,
      reverse: false
    }).setTween(tl).addTo(controller)
  });



  if ($('#concept-header').length) {

    $('#concept-header a[href*="#"]').on('click',function() {
      var speed = 650;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 100;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

    tl.to("#concept-header", .75, {
        autoAlpha: 1,
        delay:.5,
        className: "+=is-load",
        ease: RoughEase.easeIn
      })
      tl.to("#concept-header", .75, {
          className: "+=is-loaded",
          ease: RoughEase.easeIn
        })

      .to("#concept-header .page-header-title", .75, {
        autoAlpha: 1,
        ease: RoughEase.easeIn
      })
      .to("#concept-header .concept-header-list li:nth-child(1)", .75, {
        autoAlpha: 1,

      })
      .to("#concept-header .concept-header-list li:nth-child(2)", .75, {
        autoAlpha: 1,

      },3.75
    )


  }

  var conceptAreaTtl = TweenMax.staggerFromTo(".concept-area-title span", 3, {
      autoAlpha: 0,
      //y: 15,
      //skewY: '2.5deg'
    }, {
      autoAlpha: 1,
      y: 0,
      skewY: '0deg'
    }, .15);
  new ScrollMagic.Scene({
      triggerElement: '#concept-area',
      reverse: false,
      triggerHook: .5
    })
    .setTween(conceptAreaTtl).addTo(controller)


      var conceptAreaText = TweenMax.staggerFromTo(".concept-area-text-fadeUp span", 1, {
          autoAlpha: 0,
          y: 30,
        }, {
          autoAlpha: 1,
          y: 0,
        }, .15);
      new ScrollMagic.Scene({
          triggerElement: '.concept-area-text-fadeUp',
          reverse: false,
          triggerHook: .35
        })
        .setTween(conceptAreaText).addTo(controller)


        var conceptPowerText = TweenMax.staggerFromTo(".concept-power-text-fadeUp span", 1, {
            autoAlpha: 0,
            y: 30,
          }, {
            autoAlpha: 1,
            y: 0,
          }, .25);
        new ScrollMagic.Scene({
            triggerElement: '.concept-power-text-fadeUp',
            reverse: false,
            triggerHook: .5
          })
          .setTween(conceptPowerText).addTo(controller)


          var conceptRuleRightDetail = TweenMax.staggerFromTo(".rule-right-detail-fadeUp span", 1, {
              autoAlpha: 0,
              y: 15,
            }, {
              autoAlpha: 1,
              y: 0,
            }, .15);
          new ScrollMagic.Scene({
              triggerElement: '.rule-right-detail-fadeUp',
              reverse: false,
              triggerHook: .75
            })
            .setTween(conceptRuleRightDetail).addTo(controller)



  /***************************************************
  CONCEPT END
  ***************************************************/
  $(function() {


$('.tab_area .tab-item').on('click',function() {
 //.index()を使いクリックされたタブが何番目かを調べ、
//	indexという変数に代入します。
 var index = $('.tab_area .tab-item').index(this);
 //コンテンツを一度すべて非表示にし、
 $('.content_area').css('display','none');
 $('.content_area').fadeOut();
 //クリックされたタブと同じ順番のコンテンツを表示します。
 $('.content_area').eq(index).delay(1250).fadeIn();
 //タブについているクラスselectを消し、
 $('.tab_area .tab-item').removeClass('active');
 //クリックされたタブのみにクラスselectをつけます。
 $(this).addClass('active');



 if (index == 0) {

     $('.tab_area .tab-item:nth-child(4)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(5)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(6)').removeClass('active not-active');


   $('.tab_area .tab-item:nth-child(2)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(3)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(1)').removeClass('not-active');




 } else if(index == 1) {


     $('.tab_area .tab-item:nth-child(4)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(5)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(6)').removeClass('active not-active');



   $('.tab_area .tab-item:nth-child(1)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(3)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(2)').removeClass('not-active');




 }else if(index == 2) {


     $('.tab_area .tab-item:nth-child(4)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(5)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(6)').removeClass('active not-active');



   $('.tab_area .tab-item:nth-child(1)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(2)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(3)').removeClass('not-active');


 }

 if (index == 3) {

    $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
    $('.tab_area .tab-item:nth-child(2)').removeClass('active not-active');
    $('.tab_area .tab-item:nth-child(3)').removeClass('active not-active');



     $('.tab_area .tab-item:nth-child(5)').addClass('not-active');
     $('.tab_area .tab-item:nth-child(6)').addClass('not-active');
     $('.tab_area .tab-item:nth-child(4)').removeClass('not-active');


 } else if(index == 4) {



     $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(2)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(3)').removeClass('active not-active');

   $('.tab_area .tab-item:nth-child(4)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(6)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(5)').removeClass('not-active');



 }else if(index == 5) {


     $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(2)').removeClass('active not-active');
     $('.tab_area .tab-item:nth-child(3)').removeClass('active not-active');



   $('.tab_area .tab-item:nth-child(4)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(5)').addClass('not-active');
   $('.tab_area .tab-item:nth-child(6)').removeClass('not-active');



 }






 });


     //location.hashで#以下を取得 変数hashに格納
     var hash = location.hash;
     //hashの中に#tab～が存在するか調べる。
     hash = (hash.match(/^#tab\d+$/) || [])[0];

     //hashに要素が存在する場合、hashで取得した文字列（#tab2,#tab3等）から#より後を取得(tab2,tab3)
    if($(hash).length){
     var tabname = hash.slice(1) ;
     } else{
     // 要素が存在しなければtabnameにtab1を代入する
  var tabname = "tab1";
   }
     //コンテンツを一度すべて非表示にし
     $('.content_area').css('display','none');
     $('.content_area').fadeOut();


     //一度タブについているクラスselectを消し、
     $('.tab_area .tab-item').removeClass('active');

     var tabno = $('.tab_area .tab-item#' + tabname).index();

     //クリックされたタブと同じ順番のコンテンツを表示します。
     $('.content_area').eq(tabno).delay(1250).fadeIn();

     //クリックされたタブのみにクラスselectをつけます。
     $('.tab_area .tab-item').eq(tabno).addClass('active');

     if (tabno == 0) {

       $('.tab_area .tab-item:nth-child(2)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(1)').removeClass('not-active');




     } else if(tabno == 1) {





       $('.tab_area .tab-item:nth-child(1)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(2)').removeClass('not-active');




     }else if(tabno == 2) {






       $('.tab_area .tab-item:nth-child(1)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(2)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').removeClass('not-active');


     }

     if (tabno == 3) {


       $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
       $('.tab_area .tab-item:nth-child(2)').removeClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').removeClass('not-active');


         $('.tab_area .tab-item:nth-child(5)').addClass('not-active');
         $('.tab_area .tab-item:nth-child(6)').addClass('not-active');
         $('.tab_area .tab-item:nth-child(4)').removeClass('not-active');


     } else if(tabno == 4) {


       $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
       $('.tab_area .tab-item:nth-child(2)').removeClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').removeClass('not-active');


       $('.tab_area .tab-item:nth-child(4)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(6)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(5)').removeClass('not-active');



     }else if(tabno == 5) {



       $('.tab_area .tab-item:nth-child(1)').removeClass('active not-active');
       $('.tab_area .tab-item:nth-child(2)').removeClass('not-active');
       $('.tab_area .tab-item:nth-child(3)').removeClass('not-active');

       $('.tab_area .tab-item:nth-child(4)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(5)').addClass('not-active');
       $('.tab_area .tab-item:nth-child(6)').removeClass('not-active');



     }


  });





    if ($('.fv-swiper-container').length) {
      var interleaveOffset = 1;
      var swiperOptions = {
        loop: true,
        autoplay: {
          delay: 2500,
          reverseDirection: true,
          disableOnInteraction: false,
        },
        reverseDirection: true,
        speed: 1500,
        grabCursor: false,
        watchSlidesProgress: true,
        mousewheelControl: false,
        keyboardControl: true,
        pagination: {
          el: '.fv-swiper-pagination',
          type: 'bullets',
        },
        on: {
          slideChange: function() {
            $(function() {
              //$('div.swiper-num .current').text(swiperNew.realIndex + 1);
              //$('div.swiper-num .total').text(swiperNew.slides.length - 2);
              if ($('#progress').length) {
                //slide_progress();
              }
            });
          },
          progress: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              var slideProgress = swiper.slides[i].progress;
              var innerOffset = swiper.width * interleaveOffset;
              var innerTranslate = slideProgress * innerOffset;
              swiper.slides[i].querySelector(".slide-inner").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }
          },
          touchStart: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },
          setTransition: function(speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + "ms";
              swiper.slides[i].querySelector(".slide-inner").style.transition =
                speed + "ms";
            }
          }
        }
      };
      var swiperFV = new Swiper(".fv-swiper-container", swiperOptions);

    }
$(function() {
    if ($('.headline-slider').length) {

        //SP スライダー
        $('.headline-slider').bxSlider({
          auto: true,
          easing: 'ease-in-out',
          speed:1500,
          mode: 'fade',
          adaptiveHeight: true,
          captions: false,
          pager: false,
          controls: false,


        });


    }
});

    if ($('.topic-swiper-container').length) {
      var topicproduct = new Swiper('.topic-swiper-container', {
        loop: false,
        speed:1500,
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 2,
        centeredSlides: false,
        grabCursor: false,
        navigation: {
          nextEl: '.topic-next',
          prevEl: '.topic-prev'
        },
        pagination: {
          el: '.topic-swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          767: {
            loop: false,
              slidesPerGroup: 1,
            slidesPerView: 1.25,
            spaceBetween: 20,
            centeredSlides: false,

          },
        }
      });
    }

    if ($('.fragrance-swiper-container').length) {
      var interleaveOffset = 1;
      var fragranceswiperOptions = {
        autoplay: {
          delay: 2500,
          reverseDirection: false,
          disableOnInteraction: false,
        },
        loop:true,
        speed: 2000,
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        watchOverflow: true,
        setWrapperSize: true,
        cssWidthAndHeight: true,
        visibilityFullFit: true,
        virtualTranslate: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChange: function() {
            $(function() {

              tl.fromTo('.swiper-slide-active .product-select-catchcopy', 1, {
                x: -30,
              }, {
                x: 0,

              });
            /*
              tl.fromTo('.swiper-slide-active .catchcopy', 1, {
                x: -30,
              }, {
                x: 0,

              });
              */
            });
          },

        }
      };
      var fragranceproduct = new Swiper(".fragrance-swiper-container", fragranceswiperOptions);

    }
    if ($('.otherproduct-swiper-container').length) {
      var otherproduct = new Swiper('.otherproduct-swiper-container', {
        //loop: true,
        /*
        autoplay: {
          delay: 2500,
          reverseDirection: false,
          disableOnInteraction: false,
        },
        */
        speed:1500,
        spaceBetween: 7,
        slidesPerView: 3,
        centeredSlides: true,
        watchOverflow: true,
        setWrapperSize: true,
        cssWidthAndHeight: true,
        visibilityFullFit: true,
        virtualTranslate: false,

        navigation: {
          nextEl: '.otherproduct-next',
          prevEl: '.otherproduct-prev'
        },
        breakpoints: {
          767: {
            spaceBetween: 2,
            slidesPerView: 1.5,
            spaceBetween: 2,
          }
        }
      });
    }
    if ($('.relatedproduct-swiper-container').length) {
      var otherproduct = new Swiper('.relatedproduct-swiper-container', {
        //loop: true,
        /*
        autoplay: {
          delay: 2500,
          reverseDirection: false,
          disableOnInteraction: false,
        },
        */
        speed:1500,
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerView: 3.75,
        centeredSlides: true,
        watchOverflow: true,
        setWrapperSize: true,
        cssWidthAndHeight: true,
        visibilityFullFit: true,
        virtualTranslate: false,
        grabCursor: false,
        navigation: {
          nextEl: '.relatedproduct-next',
          prevEl: '.relatedproduct-prev'
        },
        breakpoints: {
          767: {
            slidesPerView: 1.75,
            spaceBetween: 10,
          }
        }
      });
    }



$(function() {


  if($('.slideUp').length){
    $(".slideUp").each(function() {
      var tl = new TimelineMax();
      tl.fromTo(this, 1, {
        autoKill: false,
      }, {
        autoKill: false,
        className: "+=slideUp-on",
      });

      new ScrollMagic.Scene({
          triggerElement: this,
          duration:400,
          reverse: false,
          triggerHook: .85
        })
        .setTween(tl).addTo(controller)

    });
  }
  if($('.fadeIn').length){
      $(".fadeIn").each(function() {
        var tl = new TimelineMax();
        tl.fromTo(this, 1, {
          autoKill: false,
        }, {
          autoKill: false,
          className: "+=fadeIn-on",
        });
        new ScrollMagic.Scene({
            triggerElement: this,
            duration:400,
            reverse: false,
            triggerHook: .85
          })
          .setTween(tl).addTo(controller)
      });
  }
  if($('.fadeUp').length){
      $(".fadeUp").each(function() {
        var tl = new TimelineMax();
        tl.fromTo(this, 1, {
          autoKill: false,
        }, {
          autoKill: false,
          className: "+=fadeUp-on",
        });
        new ScrollMagic.Scene({
            triggerElement: this,
            duration:400,
            reverse: false,
            triggerHook: .85
          })
          .setTween(tl).addTo(controller)
      });
  }
  if($('.scaleUp').length){
      $(".scaleUp").each(function() {
        var tl = new TimelineMax();
        tl.fromTo(this, 1, {
          autoKill: false,
        }, {
          autoKill: false,
          className: "+=scaleUp-on",
        });
        new ScrollMagic.Scene({
            triggerElement: this,
            duration:400,
            reverse: false,
            triggerHook: .85
          })
          .setTween(tl).addTo(controller)
      });
  }


  if ($('.fadeUpY').length) {
      $(".fadeUpY").css({
        opacity: 0
      }).each(function(i) {
        var fadeUpY = new ScrollMagic.Scene({
          triggerElement: this,
          reverse: false,
          triggerHook: .85,
        })
        fadeUpY.setVelocity(this, {
            opacity: 1,
            translateY: 0
          }, {
            duration: 1250,
            delay: 50 * i,
          })
          .addTo(controller);
      });
  }




  /***************************************************
  モーダルウィンドウ
  ***************************************************/
  if ($('#js-modal-open').length) {
    $('#js-modal-open').on('click', function() {
      $('.modal-wrapper').addClass('active');
    });
    $('#js-modal-close,.modal-wrapper').on('click', function() {
      $('.modal-wrapper').removeClass('active');
    });
  }

  /***************************************************
  ヘッダー
  ***************************************************/
  if ($('#site-header').length) {
    $(window).on( 'scroll', function() {
      var startPos = 0,winScrollTop = 0;
      winScrollTop = $(this).scrollTop();
      if ( 650 < winScrollTop ) {
        $( '#site-header' ).addClass( 'js-fixed' ).removeClass( 'js-end' );
      } else if (winScrollTop >= 650){
        $( '#site-header' ).addClass( 'js-end' ).removeClass( 'js-fixed' );
      }　else if (winScrollTop >= 50){
        $( '#site-header' ).addClass( 'js-end' ).removeClass( 'js-fixed' );
      }　
      else {
        $( '#site-header' ).removeClass( 'js-end' ).removeClass( 'js-fixed' );
      }
    });
  }


  /***************************************************
  SHOPLIST
  ***************************************************/
  if ($('#shoplist-info-list').length) {
    $('#shoplist-info-list a[href*="#"]').on('click',function() {
      var speed = 650;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 100;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  }

})

  /********************************
  メディアクエリ
  *********************************/
  var mql = window.matchMedia('screen and (max-width: 767px)');
  function checkBreakPoint(mql) {
    if (mql.matches) {


      if($('.newslist-tag-button').length){
        $(function() {
          //$('.accordion-button').prev().hide();
          $('.newslist-tag-button').on('click',function () {
            $('.newslist-tag-navigation').toggleClass('open');
              return false;
            });
          });
        }


      if($('.accordion-button').length){
        $(function() {
          $('.accordion-button').prev().hide();
          $('.accordion-button').on('click',function () {
              if ($(this).prev().is(':hidden')) {
                  $(this).prev().slideDown();
                  $(this).text('CLOSE').addClass('close');
              } else {
                  $(this).prev().slideUp();
                  $(this).text('READ MORE').removeClass('close');
              }
            });
          });
        }


      //SP 関連ニュース
      if ($('.relatednews-swiper-container').length) {
          var relatednews = new Swiper('.relatednews-swiper-container', {
                //loop: true,
                autoplay: {
                  delay: 2500,
                  reverseDirection: false,
                  disableOnInteraction: false,
                },
                speed:1500,
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
                watchOverflow: true,
                setWrapperSize: true,
                cssWidthAndHeight: true,
                visibilityFullFit: true,
                virtualTranslate: false,
                grabCursor: true,
                navigation: {
                  nextEl: '.relatednews-next',
                  prevEl: '.relatednews-prev'
                },
              });
      }

      //SP PRODUCT詳細 関連スライダー
      if ($('.relatedproduct-no-slider').length) {
        var relatedSpProduct = new Swiper('.relatedproduct-no-slider', {

          slidesPerView: 1,
          slidesPerView: 1.5,
          spaceBetween: 10,
          speed:1500,
          centeredSlides: true,
          watchOverflow: true,
          setWrapperSize: true,
          cssWidthAndHeight: true,
          visibilityFullFit: true,
          virtualTranslate: false,
          grabCursor: false,
          navigation: {
            nextEl: '.relatedproduct-next',
            prevEl: '.relatedproduct-prev'
          },
          breakpoints: {
            767: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            }
          }
        });
      }



      } else {



        $(function() {
          /***************************************************
          PRODUCT 詳細
          ***************************************************/
          if ($('.main-navigation').length) {
            $('.main-navigation li.category-menu').mouseover(function(e) {
              $('.sub-menu li').addClass('active');
            })
            $('.main-navigation li.category-menu').mouseout(function(e) {
                $('.sub-menu li').removeClass('active');
            })
          }


        })
      }
  }

  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);


/********************************************************************************************************************************
end vendor function
************************************************************************************************************************************/
}




/********************************
メディアクエリ
*********************************/
var mql = window.matchMedia('screen and (max-width: 767px)');
function checkBreakPoint(mql) {
  if (mql.matches) {

      /***************************************************
      アコーディオン
      ***************************************************/
      if ($('.acc-toggle').length) {
        function accordionAll() {
        $(this).toggleClass("active").next('.acc-item').slideToggle();
        }
        $(".acc-toggle").click(accordionAll);
      }
      /***************************************************
      SP ハンバーガーメニュー
      ***************************************************/

      if ($('#menu-toggle').length) {
        function menu() {
          $(this).toggleClass('js-sp-menu');
          $('#main-navigation').toggleClass('js-sp-menu');
        }
        $("#menu-toggle").click(menu);


      }

      /***************************************************
      グルーバルメニュー
      ***************************************************/

      if ($('#main-navigation').length) {
        function menuSub() {
          $('#menu-toggle').removeClass('js-sp-menu');
          $('#main-navigation').removeClass('js-sp-menu');
        }
        //$("#main-navigation li:not(.category-menu) >a,.site-logo a").click(menuSub);

        $("#main-navigation li:not(.category-menu) a,.site-logo a").click(menuSub);
      }





    } else {



    }


}

mql.addListener(checkBreakPoint);
checkBreakPoint(mql);

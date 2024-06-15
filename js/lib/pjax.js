

$(function() {

  var links = document.querySelectorAll('a[href]');
  var cbk = function(e) {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', cbk);
  }

  var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * この関数はページ遷移が始まったらすぐに自動的に呼び出されます。
     * this.newContainerLoadingは新しいコンテナのローディングを示すpromiseです。
     * (barba.jsには便利なPromiseのpolyfillもあります。)
     */

    // ローディングが終わるとすぐに、
    // 古いページをフェードアウトさせて、新しいページをフェードインします
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainerは古いコンテナのHTMLElementです。
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainerは新しいコンテナのHTMLElementです。
     * この段階でnewContainerはDOM上に含まれています。
     * (#barba-container内にあり、visibility: hiddenです。)
     * メモ：newContainerはnewContainerLoadingを解決した後に利用できます。
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 850, function() {
      /**
       * 遷移が終了したら.done()を呼び出すのを忘れないでください！
       * .done()は自動的にDOMから古いコンテナを削除します。
       */


      _this.done();
    });
  }
});

/**
 * 次に、Barbaに作成した遷移処理を指定します。
 */

Barba.Pjax.getTransition = function() {
  /**
   * ここでロジックと遷移処理を指定できます！
   * 例えばページ毎や、リンク毎に別の遷移処理を指定することができます。
   */


  return FadeTransition;
};


  var init = function() {
    events();
    Barba.Pjax.getTransition();
    Barba.Pjax.start();
    Barba.Prefetch.init();

  };

  var events = function() {

    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, barbaContainer, newPageRawHTML) {
    if (Barba.HistoryManager.history.length === 1) {  // ignore when it's first view
        return;
    }
    // get body element
    var $body = $('body');
    // change body class
    $body.removeClass();
    $body.addClass(newPageRawHTML.match(/<body.+?class="([^""]*)"/i)[1]);
});

    Barba.Dispatcher.on('linkClicked', function(HTMLElement, MouseEvent) {
      $(function() {

        //document.body.classList.add('is-transition-start');
      });
    });
    Barba.Dispatcher.on('initStateChange', function(currentStatus) {
      $(function() {
        /*
        setTimeout(function() {
          document.body.classList.remove('is-transition-start');
        }, 1500);
        */
        document.body.scrollTop = 0;
        $(window).scrollTop(0);
      });
    });

    //
    // ページ読み込み後にCSSアニメーション用のクラスを削除
    //
    Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container, newPageRawHTML,prevStatus) {


      /*
      document.body.classList.remove('is-transition-start');
      $(function() {
        setTimeout(function() {
          document.body.classList.remove('is-change-start');
        }, 1500);
      });
      */vendorStart();
    });

    //
    // 各ページごとに処理を実行したい場合
    //


  };


  init();

});

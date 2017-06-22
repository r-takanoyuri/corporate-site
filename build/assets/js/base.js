/*
 * base.js
 *
 */


/*=============== TOP ================*/
$(document).on('ready', function() {
    var windowW = $(window).width();
    var windowH = $(window).height();
    var headerH = $('#header').height();
    // 画面サイズ取得（メイン画像）
    $('.js-topMedia-height').css({
        'height': windowH - headerH
    });
});


/*=============== COMMON ================*/
// ページ上部ボタン
$(function() {
    var footerAnker = '.js-footer-anker',
        $footerAnker = $(footerAnker);
        $footerAnker.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                $footerAnker.stop().animate({
                    'bottom': '180px'
                }, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                $footerAnker.stop().animate({
                    'bottom': '-100px'
                }, 200);
            }
        }
    }),
    //スクロールしてトップ
    $footerAnker.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

// アンカーリンク
// header固定分ずれ解消
$(document).on('ready', function() {
    var h = $('#header').height(),
        t = h;
    $(".js-anchorLink").click(function() {
        var o = $(this).attr("href"),
            n = $("#" == o || "" == o ? "body" : o),
            e = n.offset().top;
        $("html, body").animate({
            scrollTop: e
        }, 300, "swing")
    })
    
    var n = $(location).attr("href");
    // 別ページからの遷移
    if (n.indexOf("?id=") == -1){
    } else {
        var e = n.split("?id="),
            i = "#" + e[e.length - 1],
            h = $('#header').height(),
            t = h;
            l = $(i),
            a = l.offset().top;
        $("html, body").animate({
            scrollTop: a
        }, 300, "swing")
    }
});


$(function() {
    /**
     * hover(マウスオーバーの処理, マウスアウトの処理)
     */
    // マウスが乗った時の処理
    $("li").hover(function() {
        // this = "li"

        // body内の最後に#tooltipを追加
        $("body").append('<div id="tooltip"><p></p></div>');

        // ツールチップのp要素にアイコンのalt属性の値を設定
        $("#tooltip p").html($(this).children()/*liの子要素*/.attr("alt"));

        // ツールチップを非表示
        $("#tooltip").hide();

        // ツールチップ縦位置：アイコンの縦位置 - ツールチップ自身の高さ - 三角形の高さ
        $("#tooltip").css(
            // ツールチップ縦位置
            "top",
            // アイコンの縦位置 - 角丸四角形の高さ - 三角形の高さ
            $(this).offset().top - $("#tooltip").height() - 18
        );

        // ツールチップ横位置：アイコンの横位置 - ツールチップの幅 / 2
        $("#tooltip").css(
            // ツールチップ横位置
            "left",
            // アイコンの横位置 - ツールチップの幅 / 2
            $(this).offset().left - ($("#tooltip").width() - $(this).width()) / 2
        );

        // ツールチップの表示
        $("#tooltip").fadeIn();


    // マウスが離れたときの処理
    }, function() {
        $("#tooltip").remove();
    });
});
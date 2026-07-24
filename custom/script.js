$(function() {

    let size;

    let tooltipSize = "tooltip-s";

    $(".resizer a").click(function() {
        // body要素にクラスが付いていれば削除

        // 選択したリサイズボタンのテキスト内容を取得
        size = $(this).html();
        console.log(size);

        // リンクのデフォルト動作を無効化
        return false;
    });

    /**
     * hover(マウスオーバーの処理, マウスアウトの処理)
     */
    // マウスが乗った時の処理
    $(".content li").hover(function() {

        if(size == "S") { // テキストが「S」の場合            
            tooltipSize = "tooltip-s";
        } else if(size == "M") {  // テキストが「M」の場合
            tooltipSize = "tooltip-m";
        } else if(size == "L") {  // テキストが「L」の場合
            tooltipSize = "tooltip-l";
        }

        console.log(tooltipSize);

        
        $("body").append(`<div id="${tooltipSize}"><p></p></div>`);


        $(`#${tooltipSize} p`).html($(this).children().attr("alt"));

        // ツールチップを非表示
        $(`#${tooltipSize}`).hide();

        // ツールチップ縦位置：アイコンの縦位置 - ツールチップ自身の高さ - 三角形の高さ
        $(`#${tooltipSize}`).css(
            // ツールチップ縦位置
            "top",
            // アイコンの縦位置 - 角丸四角形の高さ - 三角形の高さ
            $(this).offset().top - $(`#${tooltipSize}`).height() - 18
        );

        // ツールチップ横位置：アイコンの横位置 - ツールチップの幅 / 2
        $(`#${tooltipSize}`).css(
            // ツールチップ横位置
            "left",
            // アイコンの横位置 - ツールチップの幅 / 2
            $(this).offset().left - ($(`#${tooltipSize}`).width() - $(this).width()) / 2
        );

        // ツールチップの表示
        $(`#${tooltipSize}`).fadeIn();


    // マウスが離れたときの処理
    }, function() {
        $(`#${tooltipSize}`).remove();
    });
});
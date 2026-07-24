$(function() {
  // リサイズボタンをクリック
  $(".resizer a").click(function() {
    // body要素にクラスが付いていれば削除
    $("body").removeClass();

    // 選択したリサイズボタンのテキスト内容を取得
    let size = $(this).html();

    if(size == "S") { // テキストが「S」の場合
      // body要素に.fontSmallを追加
      $("body").addClass("fontSmall");
    } else if(size == "M") {  // テキストが「M」の場合
      // body要素に.fontMediumを追加
      $("body").addClass("fontMedium");
    } else {  // テキストが「L」の場合
      // body要素に.fontLargeを追加
      $("body").addClass("fontLarge");
    }

    // リンクのデフォルト動作を無効化
    return false;
  });
});
//  ハンバーガーメニュー
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

// #page-topをクリックした際の設定
$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

var slider;
var sliderFlag = false;
var breakpoint = 768; //768px以下の場合

function sliderSet() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint && !sliderFlag) {
    //768px以上は1行でスライダー表示
    slider = $(".slider").bxSlider({
      touchEnabled: false, //リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
      mode: "vertical", //縦スライド指定
      controls: false, //前後のコントロールを表示させない。
      auto: "true", //自動的にスライド
      pager: false, //ページ送り無効化
    });
    sliderFlag = true;
  } else if (windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider(); //bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
    sliderFlag = false;
  }
}

$(window).on("load resize", function () {
  sliderSet();
});

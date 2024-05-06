//ヘッダーのドロップダウンメニュー開閉
$(function () {
  $(".p-header__item").hover(function () {
    $(this).children(".p-header__sub-items").stop().slideToggle(200);
  });
});

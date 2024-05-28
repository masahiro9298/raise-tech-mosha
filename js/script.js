$(document).ready(function () {
  // ヘッダーのドロップダウンメニュー開閉
  $(function () {
    $(".p-header__item").hover(function () {
      $(this).children(".p-header__sub-items").stop().slideToggle(200);
    });
  });

  // ハンバーガーメニューの開閉
  $(function () {
    $(".p-hamburger").on("click", function () {
      const $hamburger = $(".p-hamburger");
      const $headerItems = $(".p-header__items");
      const $hasChildrenLinks = $(".p-header__link.has-children");

      if ($headerItems.is(":visible")) {
        $hamburger.removeClass("is-open");
        $headerItems.slideUp(200, function () {
          $headerItems.removeClass("is-open");
          $hasChildrenLinks.removeClass("is-open");
        });
      } else {
        $hamburger.addClass("is-open");
        $headerItems.slideDown(200, function () {
          $headerItems.addClass("is-open");
          $hasChildrenLinks.addClass("is-open");
        });
      }
    });
  });
});

$(document).on("scroll", function(){

    const $header = $(".fixedHeader");
    const $headerWrap = $(".fixedHeaderWrap")
    const $logo = $(".logo img")
    const $items = $(".items a p")
    const $itemsLi = $(".items li")

    if ($(document).scrollTop() > 300) {
$header.addClass("fixedHeaderScroll")
$headerWrap.addClass("fixedHeaderWrapScroll")
$logo.addClass("imgScroll")
$items.addClass("pScroll")
$itemsLi.addClass('liScroll')

} else {
    $header.removeClass("fixedHeaderScroll")
    $headerWrap.removeClass("fixedHeaderWrapScroll")
    $logo.removeClass("imgScroll")
    $items.removeClass("pScroll")
    $itemsLi.removeClass('liScroll')
    
}

});



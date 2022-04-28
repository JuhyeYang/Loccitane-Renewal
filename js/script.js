$(document).ready(function () {
    $('.m-menu-btn').click(function () {
        // console.log(1)
        $('.m-menu-pop-wrap').addClass('show')
    })
    $('.close-btn').click(function () {
        $('.m-menu-pop-wrap').removeClass('show')
    })
}) 

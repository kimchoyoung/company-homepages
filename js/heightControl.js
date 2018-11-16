

let status2 = 'init';

function heightControl(){
    let $footer = $('div.row-footer');
    let $footer_height = $footer.height();
    let $height = $('div.height-cal').height();
    let $browser_height = window.innerHeight;

    if ($height+$footer_height > $browser_height && status2 !=='relative') {
        $footer.addClass('row-footer-relative');
        $footer.removeClass('row-footer-absolute');
        status2 = 'relative';
    }else if($height+$footer_height <= $browser_height && status2 !=='absolute'){
        $footer.addClass('row-footer-absolute');
        $footer.removeClass('row-footer-relative');
        status2 = 'absolute';
    }
}


$(function(){
    heightControl();
});

$(window).resize(heightControl);


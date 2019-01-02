let status2 = 'init';

function heightControl(idx){
    let $footer = $('div.row-footer');
    let $footer_height = $footer.height();
    let $height_cal = $('div.height-cal');
    let $height =$height_cal.eq(idx).height();
    let $browser_height = window.innerHeight;



//    console.log($footer_height+$height, $browser_height);
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
    heightControl(0);
});

//$(window).resize(heightControl);



declare var $: any;

// export const isTokenExpired = () => {

//     let tokenExp = Date.parse(localStorage.getItem(DBkeys.TOKEN_CREATED_TIME));
//     let currenTime = Date.now();
//     if (tokenExp < currenTime) {
//         return false;
//     }
//     return true;
// }

export const openSideNavbar = ()=>{
    $('#slide-submenu').on('click',function() {			        
        $(this).closest('.list-group').fadeOut('slide',function(){
            $('.mini-submenu').fadeIn();	
        });
        
      });

    $('.mini-submenu').on('click',function(){		
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
    });
}
export const fnHorizentalScroll = () => {
    $('#carouselExample').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
}
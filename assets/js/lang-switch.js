function enActions() {
    $('link[href="assets/css/styleAR.css"]').attr('href', 'assets/css/styleEN.css');
    document.title = "Henawy For Hookah $ Tobacco";
    $(".navbar-brand.our_logo").html('<img src="assets/images/logo-en.png" alt="" />');
    $(".nav.navbar-nav").attr('class', 'nav navbar-nav navbar-right');
    $(".nav.navbar-nav").html('<li><a href="#slider">Home</a></li><li><a href="#products">Our Products</a></li><li><a href="#portfolio">Portfolio</a></li><li><a href="#footer_widget">Contact Us</a></li><li><button id="lang" onclick="checkLang()">ع</button></li>');
    $(".call_us_text.phone_info").parent().attr('class', 'col-md-5 col-sm-12 text-right pull-right');
    $(".main_slider_content.wow.zoomIn").html("<h1>Al-Henawy</h1><p>For Hookah & Tobacco</p><p>Khalil Ma'moan Authorized Retailer</p>");
    $(".single_abouts_text.wow.slideInRight").html("<h2>Our Products</h2><p>Khalil Ma'moan Authorized Retailer Red Sea</p><p>We have all types of Shisha / Hookah and all types of Egyptian and Exported Tobacco</p>");
    $(".head_title.text-center").html("<h2>Portfolio</h2>");
    $(".single_widget").first().html('<h2>Contact Us</h2><div class="single_widget_info"><ul><li class="phone_info"><i class="fa fa-phone-square" aria-hidden="true"></i><span> (+20) 115 2229 330 , (+20) 122 6349 299</span></li><li class="facebook_page"><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i> Follow Our Facebook Page</a></li><li><i class="fa fa-map-marker" aria-hidden="true"></i> <span>Chery St., Behind McDonalds, Hurghada</span></li></ul></div>');
    $(".single_widget:eq( 1 )").html('<h2>Menu</h2><div class="single_widget_info"><ul class="footer_menu"><li><a href="#slider"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li><li><a href="#products"><i class="fa fa-fire" aria-hidden="true"></i>Our Products</a></li><li><a href="#portfolio"><i class="fa fa-camera" aria-hidden="true"></i>Portfolio</a></li></ul></div>');
    $(".copyright").html('<p>Developed By<a href="http://raptors.tech"> Raptors LLC </a>All Rights Reserved</p>');
    $('.single_widget_form').html('<img src="assets/images/Henawy-logo-footer-en.png">');
}

function arActions() {
    $('link[href="assets/css/styleEN.css"]').attr('href', 'assets/css/styleAR.css');
    document.title = "الحناوي لتجارة الشيشة و المعسل";
    $(".navbar-brand.our_logo").html('<img src="assets/images/logo-ar.png" alt="" />');
    $(".nav.navbar-nav").attr('class', 'nav navbar-nav navbar-left');
    $(".nav.navbar-nav").html('<li><a href="#slider">الرئيسية</a></li><li><a href="#products">منتجاتنا</a></li><li><a href="#portfolio">معرضنا</a></li><li><a href="#footer_widget">اتصل بنا</a></li><li><button id="lang" onclick="checkLang()">EN</button></li>');
    $(".call_us_text.phone_info").parent().attr('class', 'col-md-5 col-sm-12 text-left');
    $(".main_slider_content.wow.zoomIn").html('<h1>الحناوي</h1><p>لتجارة الشيشة و المعسل</p><p>توكيل خليل مأمون</p>');
    $(".single_abouts_text.wow.slideInRight").html('<h2>منتجاتنا</h2><p>توكيل معتمد خليل مأمون البحر الأحمر</p><p>يوجد لدينا جميع أنواع الشيشة العادي منها والفاخر ومستلزماتها كما يوجد لدينا جميع أنواع المعسل المحلي منها والمستورد </p>');
    $(".head_title.text-center").html("<h2>معرضنا</h2>");
    $(".single_widget").first().html('<h2>اتصل بنا</h2><div class="single_widget_info"><ul><li class="phone_info"><i class="fa fa-phone-square" aria-hidden="true"></i><span> (+20) 115 2229 330 , (+20) 122 6349 299</span></li><li class="facebook_page"><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i> تابعوا صفحتنا على الفيسبوك</a></li><li><i class="fa fa-map-marker" aria-hidden="true"></i> <span>شارع شيري , خلف مطعم ماكدونالدز , الغردقة</span></li></ul></div>');
    $(".single_widget:eq( 1 )").html('<h2>القائمة</h2><div class="single_widget_info"><ul class="footer_menu"><li><a href="#slider"><i class="fa fa-home" aria-hidden="true"></i>الرئيسية</a></li><li><a href="#products"><i class="fa fa-fire" aria-hidden="true"></i>منتجاتنا</a></li><li><a href="#portfolio"><i class="fa fa-camera" aria-hidden="true"></i>معرضنا</a></li></ul></div>');
    $(".copyright").html('<p>تم بواسطة شركة<a href="http://raptors.tech"> Raptors LLC </a>جميع الحقوق محفوظة</p>');
    $('.single_widget_form').html('<img src="assets/images/Henawy-logo-footer-ar.png">');
}

checkLang();

function checkLang() {
    var langVal = $("#lang-val").val();
    langVal++;
    $("#lang-val").val(langVal);
    if (langVal % 2 === 0) {
        arActions();
    } else {
        enActions();
    }
    $('.nav a').bind('click', function() {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}

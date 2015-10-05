$(function(){

    $(".oyun-alt a, .tabGezme a").on("click", function(){
        alert("Henüz aktif değil :(");
        return false;
    });

    //tab haber
    $.fn.tabHaber = function() {

        $(".tabHaberMenu li").removeClass("aktif");
        $(".tabHaberMenu li:first").addClass("aktif");
        $(".tabHaberIcerik").hide();
        $(".tabHaberIcerik:first").show();

        $(".tabHaberMenu li").each(function() {
            var tip = $(this).attr("datatype");
            $(".tabHaberAlt ul").append('<li datatype="'+tip+'"><a href="#"></a></li>');
            $(".tabHaberAlt ul li:first").addClass("aktif");
        });

        $(".tabHaberMenu li").on("click", function(){
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabHaberMenu li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabHaberAlt li").removeClass("aktif").eq(index).addClass("aktif");
                $(".tabHaberIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

        $(".tabHaberAlt li").on("click", function() {
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabHaberAlt li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabHaberMenu li").removeClass("aktif").eq(index).addClass("aktif");
                $(".tabHaberIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

    }
        $(".tabHaber").tabHaber();

    //vip firmalar
    $.fn.vip = function() {

        var emlakLi = $(".firma-listele li").size(),
            emlakWidth = 158,
            emlakToplam = emlakLi*emlakWidth,
            emlakDeger = 0;

        $("ul.firma-listele").css("width",emlakToplam+"px");

        $(".firma-sag a.left").on("click", function(){
            if(emlakDeger>0) {
                emlakDeger--;
                yeniEmlak = emlakWidth*emlakDeger;
                $("ul.firma-listele").stop().animate({
                    marginLeft: "-"+yeniEmlak+"px"
                }, 500);
            }
            return false;
        });

        $(".firma-sag a.right").on("click", function(){
            if(emlakDeger < emlakLi-4) { //başlangıçta 4 li gösterildiği için..
                emlakDeger++;
                yeniEmlak = emlakWidth*emlakDeger;
                $("ul.firma-listele").stop().animate({
                    marginLeft: "-"+yeniEmlak+"px"
                }, 500);
            }
            return false;
        });

    };
        $(".vip-firmalar").vip();

    //tab sinema
    $.fn.tabSinema = function() {

        $(".tabSinemaBaslik li").removeClass("aktif");
        $(".tabSinemaBaslik li:first").addClass("aktif");
        $(".tabSinemaIcerik").hide();
        $(".tabSinemaIcerik:first").show();

        $(".tabSinemaBaslik li").each(function() {
            var tip = $(this).attr("datatype");
            $(".tabSinemaAlt ul").append('<li datatype="'+tip+'"><a href="#"></a></li>');
            $(".tabSinemaAlt ul li:first").addClass("aktif");
        });

        $(".tabSinemaBaslik li").on("click", function(){
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabSinemaBaslik li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabSinemaAlt li").removeClass("aktif").eq(index).addClass("aktif");
                $(".tabSinemaIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

        $(".tabSinemaAlt li").on("click", function(i,e) {
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabSinemaAlt li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabSinemaBaslik li").removeClass("aktif").eq(index).addClass("aktif");

                $(".tabSinemaIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

    }
        $(".tabSinema").tabSinema();

    //tab etkinlik
    $.fn.tabEtkinlik = function() {

        $(".tabEtkinlikBaslik li").removeClass("aktif");
        $(".tabEtkinlikBaslik li:first").addClass("aktif");
        $(".tabEtkinlikIcerik").hide();
        $(".tabEtkinlikIcerik:first").show();

        $(".tabEtkinlikBaslik li").each(function() {
            var tip = $(this).attr("datatype");
            $(".tabEtkinlikAlt ul").append('<li datatype="'+tip+'"><a href="#"></a></li>');
            $(".tabEtkinlikAlt ul li:first").addClass("aktif");
        });

        $(".tabEtkinlikBaslik li").on("click", function(){
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabEtkinlikBaslik li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabEtkinlikAlt li").removeClass("aktif").eq(index).addClass("aktif");
                $(".tabEtkinlikIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

        $(".tabEtkinlikAlt li").on("click", function() {
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype"),
                    index = $(this).index();
                $(".tabEtkinlikAlt li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabEtkinlikBaslik li").removeClass("aktif").eq(index).addClass("aktif");
                $(".tabEtkinlikIcerik").hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

    }
        $(".tabEtkinlik").tabEtkinlik();

    //emlak
    $.fn.emlak = function() {

        /*
             $(".tabEmlakBaslik a.right").css({
             "opacity":"0.5",
             "pointer-events":"none",
             "cursor":"default"
             });
         */

        var emlakLi = $(".tabEmlakIcerik ul li").size(),
            emlakWidth = 166,
            emlakToplam = emlakLi*emlakWidth,
            emlakDeger = 0;

        $(".tabEmlakIcerik ul").css("width",emlakToplam+"px");


        $(".tabEmlakBaslik li.emlakBtn").removeClass("aktif");
        $(".tabEmlakBaslik li.emlakBtn:first").addClass("aktif");
        $(".tabEmlakIcerik ul li").show();

        $(".tabEmlakBaslik li.emlakBtn").on("click", function(e){
            if(!$(this).hasClass("aktif")) {
                var tip = $(this).attr("datatype");
                $(".tabEmlakIcerik ul").css("margin-left","0px");
                    /*yeniLi = emlak_kiralik,
                    yeniToplam = emlakWidth*yeniLi;
                $(".tabEmlakIcerik ul").css("width",yeniToplam+"px");*/
                $(".tabEmlakBaslik li").removeClass("aktif");
                $(this).addClass("aktif");
                $(".tabEmlakIcerik ul li").hide();
                $("." + tip).fadeIn();
            }
            e.preventDefault();
        });

        $(".tabEmlakBaslik a.right").on("click", function(){
            if (emlakDeger < emlakLi - 6) { //başlangıçta 6 li gösterildiği için..
                 emlakDeger++;
                 yeniEmlak = emlakWidth * emlakDeger;
                 $(".tabEmlakIcerik ul").stop().animate({
                 marginLeft: "-" + yeniEmlak + "px"
                 }, 500);
             }
            return false;
        });

        $(".tabEmlakBaslik a.left").on("click", function(){
            if(emlakDeger>0) {
                emlakDeger--;
                yeniEmlak = emlakWidth*emlakDeger;
                $(".tabEmlakIcerik ul").stop().animate({
                    marginLeft: "-"+yeniEmlak+"px"
                }, 500);
            }
            return false;
        });

    };
        $(".tabEmlak").emlak();

    //şehir fırsatları
    $.fn.sehirFirsatlari = function() {

        var sehirLi    = $(".sehir-firsatlari ul li").length,
        sehirWidth     = 344,
        toplamSehirWidth = sehirWidth * sehirLi,
        sehirDeger     = 0;

        $(".sehir-firsatlari ul").css("width", toplamSehirWidth + "px");

        $(".sehir-firsatlari .left").click(function(){
            if(sehirDeger > 0) {
                sehirDeger--;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $(".sehir-firsatlari ul").animate({marginLeft: "-" + yeniSehirWidth + "px"}, 500);
            }
            return false;
        });

        $(".sehir-firsatlari .right").click(function(){
            if(sehirDeger < sehirLi - 1) {
                sehirDeger++;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $(".sehir-firsatlari ul").animate({marginLeft: "-" + yeniSehirWidth +"px"}, 500);
            }
            return false;
        });

    };
        $(".sehir-firsatlari").sehirFirsatlari();

    //blog
    $.fn.blog = function() {

        var sehirLi    = $(".blog-icerik ul li").length,
            sehirWidth     = 323,
            toplamSehirWidth = sehirWidth * sehirLi,
            sehirDeger     = 0;

        $(".blog-icerik ul").css("width", toplamSehirWidth + "px");

        $(".blog-alt .left").click(function(){
            if(sehirDeger > 0) {
                sehirDeger--;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $(".blog-icerik ul").animate({marginLeft: "-" + yeniSehirWidth + "px"}, 500);
            }
            return false;
        });

        $(".blog-alt .right").click(function(){
            if(sehirDeger < sehirLi - 1) {
                sehirDeger++;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $(".blog-icerik ul").animate({marginLeft: "-" + yeniSehirWidth +"px"}, 500);
            }
            return false;
        });

    };
        $(".blog").blog();

    //günlük burç
    $.fn.gunlukBurc = function() {

        var burcLi          = $(".gunluk-burc ul li").length,
            burcWidth       = 344,
            toplamBurcWidth = burcWidth * burcLi,
            burcDeger       = 0;

        $(".gunluk-burc ul").css("width", toplamBurcWidth + "px");

        $(".gunluk-burc .burcBtn.left").click(function(){
            if(burcDeger > 0) {
                burcDeger--;
                yeniWidthBurc = burcWidth * burcDeger;
                $(".gunluk-burc ul").animate({marginLeft: "-" + yeniWidthBurc + "px"}, 500);
            }
            return false;
        });

        $(".gunluk-burc .burcBtn.right").click(function(){
            if(burcDeger < burcLi - 1) {
                burcDeger++;
                yeniWidthBurc = burcWidth * burcDeger;
                $(".gunluk-burc ul").animate({marginLeft: "-" + yeniWidthBurc + "px"}, 500);
            }
            return false;
        });

    };
        $(".gunluk-burc").gunlukBurc();

    //slider
    $.fn.slider = function() {

        var resim = $("ul.sliderResim li"),
            link  = $("ul.sliderButton li");
        resim.filter(":not(:first)").hide();
        link.filter(":first").addClass("aktif");
        link.on("mouseover",function(){
            var indis = $(this).index();
            resim.stop().hide().eq(indis).fadeIn();
            link.removeClass("aktif").eq(indis).addClass("aktif");
        });

    };
        $(".slider").slider();

    //yorum
    $.fn.yorum = function () {

        $(".yorumlarBaslik ul li:first").addClass("aktif");
        $(".yorumYaz").hide();
        $(".yorumlarBaslik ul li:first").click(function () {
            $(this).addClass("aktif");
            $(".yorumlarBaslik ul li:last").removeClass("aktif");
            $(".yorumlarIcerik").show();
            $(".yorumYaz").hide();
            return false;
        });
        $(".yorumlarBaslik ul li:last").click(function () {
            $(this).addClass("aktif");
            $(".yorumlarBaslik ul li:first").removeClass("aktif");
            $(".yorumlarIcerik").hide();
            $(".yorumYaz").show();
            return false;
        });

    };
        $("#yorumlar").yorum();

    //giriş yap - kayıt ol
    $.fn.uye = function() {

        $(".tabGirisKayit ul li:first").addClass("aktif");
        $(".giris").hide();
        $(".tabGirisKayit ul li:first").click(function(){
            $(this).addClass("aktif");
            $(".tabGirisKayit ul li:last").removeClass("aktif");
            $(".giris").hide();
            $(".kayit").show();
            return false;
        });
        $(".tabGirisKayit ul li:last").click(function(){
            $(this).addClass("aktif");
            $(".tabGirisKayit ul li:first").removeClass("aktif");
            $(".giris").show();
            $(".kayit").hide();
            return false;
        });

    };
        $(".giris-kayit").uye();

});
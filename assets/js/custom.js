/*
	Abdullah Kahriman
	29.03.2016
*/

$(function () {

    var _3002Portal = {};

    _3002Portal.init = function () {
        _3002Portal.tabHaber(); //tab haber
        _3002Portal.vipFirmalar(); //vip firmalar
        _3002Portal.tabSinema(); //tab sinema
        _3002Portal.tabEtkinlik(); //tab etkinlik
        _3002Portal.sehirFirsatlari(); //şehir fırsatları
        _3002Portal.blog(); //blog
        _3002Portal.gunlukBurc(); //günlük burç
        _3002Portal.slider(); //slider
        _3002Portal.yorum(); //yorum
        _3002Portal.uye(); //giriş yap - kayıt ol
        _3002Portal.oyunlar(); //oyunlar
        _3002Portal.topList(); //tab top listesi
    };

    //tab haber
    _3002Portal.tabHaber = function () {

        var haberMenu = $('.tabHaberMenu'),
            haberIcerik = $('.tabHaberIcerik'),
            haberAlt = $('.tabHaberAlt');

        haberMenu.find('li').removeClass('aktif');
        haberMenu
            .find('li')
            .filter(':first')
            .addClass('aktif');
        haberIcerik.hide();
        haberIcerik.filter(':first').show();

        //haber menü li'lerini döngüye sok (kaç adet menü varsa o kadar ikon ekleyecek)
        haberMenu.find('li').each(function () {
            var tip = $(this).attr('datatype');
            haberAlt
                .find('ul')
                .append('<li datatype="' + tip + '"><a href="#"></a></li>');
            haberAlt
                .find('ul li')
                .filter(':first')
                .addClass('aktif');
        });

        haberMenu.find('li').on('click', function () {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    index = $(this).index();

                haberMenu.find('li').removeClass('aktif');
                $(this).addClass('aktif');
                haberAlt.find('li').removeClass('aktif').eq(index).addClass('aktif');
                haberIcerik.hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

        haberAlt.find('li').on('click', function () {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    index = $(this).index();

                haberAlt.find('li').removeClass('aktif');
                $(this).addClass('aktif');
                haberMenu.find('li').removeClass('aktif').eq(index).addClass('aktif');
                haberIcerik.hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

    };

    //vip firmalar
    _3002Portal.vipFirmalar = function () {

        var vipLi = $('.firma-listele li').length,
            vipWidth = 158,
            vipToplam = vipLi * vipWidth,
            vipDeger = 0;

        $('ul.firma-listele').css('width', vipToplam + 'px');

        $('.firma-sag a.left').on('click', function () {
            if (vipDeger > 0) {
                vipDeger--;
                yeniVip = vipWidth * vipDeger;
                $('ul.firma-listele').stop().animate({
                    marginLeft: '-' + yeniVip + 'px'
                }, 500);
            }
            return false;
        });

        $('.firma-sag a.right').on('click', function () {
            if (vipDeger < vipLi - 4) { //başlangıçta 4 li gösterildiği için..
                vipDeger++;
                yeniVip = vipWidth * vipDeger;
                $('ul.firma-listele').stop().animate({
                    marginLeft: '-' + yeniVip + 'px'
                }, 500);
            } else {
                vipDeger = 0;
                $('ul.firma-listele').stop().animate({
                    marginLeft: 0 + 'px'
                }, 500);
            }
            return false;
        });

    };

    //tab sinema
    _3002Portal.tabSinema = function () {

        var tabSinemaBaslik = $('.tabSinemaBaslik'),
            tabSinemaIcerik = $('.tabSinemaIcerik'),
            tabSinemaAlt = $('.tabSinemaAlt');

        tabSinemaBaslik.find('li').removeClass('aktif');
        tabSinemaBaslik.find('li').filter(':first').addClass('aktif');
        tabSinemaIcerik.hide();
        tabSinemaIcerik.filter(':first').show();

        tabSinemaBaslik.find('li').each(function () {
            var tip = $(this).attr('datatype');
            tabSinemaAlt.find('ul').append('<li datatype="' + tip + '"><a href="#"></a></li>');
            tabSinemaAlt.find('ul li').filter(':first').addClass('aktif');
        });

        tabSinemaBaslik.find('li').on('click', function () {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    index = $(this).index();

                tabSinemaBaslik.find('li').removeClass('aktif');
                $(this).addClass('aktif');

                tabSinemaAlt
                    .find('li')
                    .removeClass('aktif')
                    .eq(index)
                    .addClass('aktif');

                tabSinemaIcerik.hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

        tabSinemaAlt.find('li').on('click', function (i, e) {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    index = $(this).index();
                tabSinemaAlt.find('li').removeClass('aktif');
                $(this).addClass('aktif');
                tabSinemaBaslik.find('li').removeClass('aktif').eq(index).addClass('aktif');
                tabSinemaIcerik.hide();
                $("." + tip).fadeIn();
            }
            return false;
        });

    }

    //tab etkinlik
    _3002Portal.tabEtkinlik = function () {

        var tabEtkinlikBaslik = $('.tabEtkinlikBaslik'),
            tabEtkinlikIcerik = $('.tabEtkinlikIcerik'),
            tabEtkinlikAlt = $('.tabEtkinlikAlt');

        tabEtkinlikBaslik.find('ul li').filter(':first').addClass('aktif');
        tabEtkinlikIcerik.find('ul li').hide();
        tabEtkinlikIcerik.find('ul li').filter('.tab_konser').show();

        tabEtkinlikBaslik.find('ul li').each(function () {
            var tip = $(this).attr('datatype');
            tabEtkinlikAlt.find('ul').append('<li datatype="' + tip + '"><a href="#"></a></li>');
            tabEtkinlikAlt.find('ul li').filter(':first').addClass('aktif');
        });

        tabEtkinlikBaslik.find('ul li').on('click', function () {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    indis = $(this).index();

                tabEtkinlikBaslik.find('ul li').removeClass('aktif');
                $(this).addClass('aktif');
                tabEtkinlikAlt.find('ul li').removeClass('aktif');
                tabEtkinlikAlt.find('ul li').eq(indis).addClass('aktif');
                tabEtkinlikIcerik.find('ul li').hide().filter('.' + tip).fadeIn(500);
            }
            return false;
        });

        tabEtkinlikAlt.find('ul li').on('click', function () {
            if (!$(this).hasClass('aktif')) {
                var tip = $(this).attr('datatype'),
                    indis = $(this).index();

                tabEtkinlikAlt.find('ul li').removeClass('aktif');
                $(this).addClass('aktif');
                tabEtkinlikBaslik.find('ul li').removeClass('aktif');
                tabEtkinlikBaslik.find('ul li').eq(indis).addClass('aktif');
                tabEtkinlikIcerik.find('ul li').hide().filter('.' + tip).fadeIn(500);
            }
            return false;
        });

    };

    //şehir fırsatları
    _3002Portal.sehirFirsatlari = function () {

        var sehirLi = $('.sehir-firsatlari ul li').length,
            sehirWidth = 344,
            toplamSehirWidth = sehirWidth * sehirLi,
            sehirDeger = 0;

        $('.sehir-firsatlari ul').css('width', toplamSehirWidth + 'px');

        $('.sehir-firsatlari .left').click(function () {
            if (sehirDeger > 0) {
                sehirDeger--;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $('.sehir-firsatlari ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniSehirWidth + 'px' }, 500);
            }
            return false;
        });

        $('.sehir-firsatlari .right').click(function () {
            if (sehirDeger < sehirLi - 1) {
                sehirDeger++;
                yeniSehirWidth = sehirWidth * sehirDeger;
                $('.sehir-firsatlari ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniSehirWidth + 'px' }, 500);
            } else {
                sehirDeger = 0;
                $('.sehir-firsatlari ul')
                    .stop()
                    .animate({ marginLeft: 0 + 'px' }, 500);
            }
            return false;
        });

    };

    //blog
    _3002Portal.blog = function () {

        var blogLi = $('.blog-icerik ul li').length,
            blogWidth = 323,
            toplamBlogWidth = blogWidth * blogLi,
            blogDeger = 0;

        $('.blog-icerik ul').css('width', toplamBlogWidth + 'px');

        $('.blog-alt ul li.left').on('click', function () {
            if (blogDeger > 0) {
                blogDeger--;
                yeniBlogWidth = blogWidth * blogDeger;
                $('.blog-icerik ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniBlogWidth + 'px' }, 500);
            }
            return false;
        });

        $('.blog-alt ul li.right').on('click', function () {
            if (blogDeger < blogLi - 1) {
                blogDeger++;
                yeniBlogWidth = blogWidth * blogDeger;
                $('.blog-icerik ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniBlogWidth + 'px' }, 500);
            } else {
                blogDeger = 0;
                $('.blog-icerik ul')
                    .stop()
                    .animate({ marginLeft: 0 + 'px' }, 500);
            }
            return false;
        });

    };

    //günlük burç
    _3002Portal.gunlukBurc = function () {

        var burcLi = $('.gunluk-burc ul li').length,
            burcWidth = 344,
            toplamBurcWidth = burcWidth * burcLi,
            burcDeger = 0;

        $('.gunluk-burc ul').css('width', toplamBurcWidth + 'px');

        $('.gunluk-burc .burcBtn.left').click(function () {
            if (burcDeger > 0) {
                burcDeger--;
                yeniWidthBurc = burcWidth * burcDeger;
                $('.gunluk-burc ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniWidthBurc + 'px' }, 500);
            }
            return false;
        });

        $('.gunluk-burc .burcBtn.right').click(function () {
            if (burcDeger < burcLi - 1) {
                burcDeger++;
                yeniWidthBurc = burcWidth * burcDeger;
                $('.gunluk-burc ul')
                    .stop()
                    .animate({ marginLeft: '-' + yeniWidthBurc + 'px' }, 500);
            } else {
                burcDeger = 0;
                $('.gunluk-burc ul')
                    .stop()
                    .animate({ marginLeft: 0 + 'px' }, 500);
            }
            return false;
        });

    };

    //slider
    _3002Portal.slider = function () {

        var resim = $('ul.sliderResim li'),
            link = $('ul.sliderButton li');

        resim.filter(':not(:first)').hide();
        link.filter(':first').addClass('aktif');

        link.on('mouseover', function () {
            var indis = $(this).index();
            resim.stop().hide().eq(indis).fadeIn(500);
            link.removeClass('aktif').eq(indis).addClass('aktif');
        });

    };

    //yorum
    _3002Portal.yorum = function () {

        var yorumlarBaslik = $('.yorumlarBaslik'),
            yorumYaz = $('.yorumYaz'),
            yorumlarIcerik = $('.yorumlarIcerik');

        yorumlarBaslik.find('ul li').filter(':first').addClass('aktif');
        yorumYaz.hide();

        yorumlarBaslik.find('ul li').filter(':first').click(function () {
            $(this).addClass('aktif');
            yorumlarBaslik.find('ul li').filter(':last').removeClass('aktif');
            yorumlarIcerik.show();
            yorumYaz.hide();
            return false;
        });

        yorumlarBaslik.find('ul li').filter(':last').click(function () {
            $(this).addClass('aktif');
            yorumlarBaslik.find('ul li').filter(':first').removeClass('aktif');
            yorumlarIcerik.hide();
            yorumYaz.show();
            return false;
        });

    };

    //giriş yap - kayıt ol
    _3002Portal.uye = function () {

        var tabGirisKayit = $('.tabGirisKayit'),
            giris = $('.giris'),
            kayit = $('.kayit');

        tabGirisKayit.find('ul li').filter(':first').addClass('aktif');
        giris.hide();

        tabGirisKayit.find('ul li').filter(':first').click(function () {
            $(this).addClass('aktif');
            tabGirisKayit.find('ul li').filter(':last').removeClass('aktif');
            giris.hide();
            kayit.show();
            return false;
        });

        tabGirisKayit.find('ul li').filter(':last').click(function () {
            $(this).addClass('aktif');
            tabGirisKayit.find('ul li').filter(':first').removeClass('aktif');
            giris.show();
            kayit.hide();
            return false;
        });

    };

    //oyunlar
    _3002Portal.oyunlar = function () {

        var oyunLi = $('.oyunlar-icerik ul li').length,
            oyunHeight = 122,
            toplamOyunWidth = oyunHeight * oyunLi,
            oyunDeger = 0;

        $('.oyunlar-icerik ul').css('height', toplamOyunWidth + 'px');

        $('.oyunlar .oyun-alt ul li.left').on('click', function () {
            if (oyunDeger > 0) {
                oyunDeger--;
                yeniHeightOyun = oyunHeight * oyunDeger;
                $('.oyunlar-icerik ul').stop().animate({
                    marginTop: '-' + yeniHeightOyun + 'px'
                }, 500);
            }
            return false;
        });

        $('.oyunlar .oyun-alt ul li.right').click(function () {
            if (oyunDeger < oyunLi - 6) {
                oyunDeger++;
                yeniHeightOyun = oyunHeight * oyunDeger;
                $('.oyunlar-icerik ul').stop().animate({
                    marginTop: '-' + yeniHeightOyun + 'px'
                }, 500);
            } else {
                oyunDeger = 0;
                $('.oyunlar-icerik ul').stop().animate({
                    marginTop: 0 + 'px'
                }, 500);
            }
            return false;
        });

    };

    //tab top listesi
    _3002Portal.topList = function () {
        var li = $('.tabTopList ul li');
        var icerik = $('.topListIcerik');


        li.removeClass('aktif');
        li.filter(':first').addClass('aktif');
        icerik.hide();
        icerik.filter(':first').show();

        li.on('click', function () {
            li.removeClass('aktif');
            $(this).addClass('aktif');
            icerik.hide();
            icerik.eq($(this).index()).fadeIn(500);
            return false;
        });
    }

    //_3002Portal initialize
    _3002Portal.init();

    //tab emlak
    var adet;
    var deger = 0;

    function emlak() {

        //debugger;

        var kiralikToplam = $('.tabEmlakIcerik ul li.emlak_kiralik').length, //kaç adet kiralık var?
            satilikToplam = $('.tabEmlakIcerik ul li.emlak_satilik').length, //kaç adet satılık var?
            tumuToplam = $('.tabEmlakIcerik ul li').length, //satılık ve kiralık dahil toplam kaç adet var?
            btn = $(".tabEmlakBaslik ul li.emlakBtn"), //tümü, kiralık, satılık btn
            left = $('.tabEmlakBaslik ul li.left'), //left icon
            right = $('.tabEmlakBaslik ul li.right'), //right ikon
            width = 166; //1 li'nin geniliği

        //sayfa yüklendiğinde ilk olarak tüm li'ler etkilensin
        $('.tabEmlakIcerik ul').css('width', (tumuToplam * width) + 'px');
        deger = 0;
        $('.tabEmlakIcerik ul').css('margin-left', '0');
        adet = tumuToplam;

        btn.removeClass('aktif'); //emlak butonlarının aktif class'larını sil
        btn.filter(':first').addClass('aktif'); //emlak butonlarının ilkine aktif class'ı ata

        btn.on('click', function () {
            var val = $(this).attr('datatype'); //tipi ne? : kiralik, satılık vb.
            btn.removeClass('aktif'); //aktif class'larını sil
            $(this).addClass('aktif'); //tıklanana aktif class'ı ata
            $('.tabEmlakIcerik ul li').hide(); //tüm li'leri gizle
            $('.tabEmlakIcerik ul li').filter('.' + val).fadeIn(); //tıklanan li'ye ait verileri getir
            $('.tabEmlakIcerik ul').css({
                'width': (($('.tabEmlakIcerik ul li').filter('.' + val).length) * width) + 'px'
            });//ul nesnesinin genişliğini kaç adet satılık, kiralık, tümü(kiralık ve satılık) varsa width ile çarp ve toplam genişliği ayarla

            if (val == "emlak_tumu") {
                deger = 0;
                $('.tabEmlakIcerik ul').css('margin-left', '0');
                adet = tumuToplam;
            } else if (val == "emlak_kiralik") {
                deger = 0;
                $('.tabEmlakIcerik ul').css('margin-left', '0');
                adet = kiralikToplam;
            } else if (val == "emlak_satilik") {
                deger = 0;
                $('.tabEmlakIcerik ul').css('margin-left', '0');
                adet = satilikToplam;
            }
            return false;
        });

        //right ikonuna tıklandığında
        right.on("click", function () {
            if (deger < adet - 6) {
                deger++;
                yeniToplam = width * deger;
                $(".tabEmlakIcerik ul").stop().animate({
                    marginLeft: "-" + yeniToplam + "px"
                }, 500);
            }
            return false;
        });

        //left ikonuna tıklandığında
        left.on('click', function () {
            if (deger > 0) {
                deger--;
                yeniToplam = width * deger;
                $(".tabEmlakIcerik ul").stop().animate({
                    marginLeft: "-" + yeniToplam + "px"
                }, 500);
            }
            return false;
        });

    };

    emlak(); //emlak fonksiyonu initialize

});

$(window).load(function () {
    $('.fixed').load('fixed.html')
});
window.onload = function(e) {
 M.toast({html: '<span class="toast--content"><i class=\"material-icons left red-text\">block</i>Indisponible jusqu\'au 20 août </span><i class=\"material-icons right grey-text\" onclick=\'M.Toast.getInstance(this.parentElement).dismiss();\'>clear</i>', classes: ['rounded', 'toast'], displayLength: Infinity});


  ScrollReveal().reveal('.js-article-left', {reset: true, delay: 150, origin: 'left', distance: '50px'});
  ScrollReveal().reveal('.js-article-right', {reset: true, delay: 150, origin: 'right', distance: '50px'});
  ScrollReveal().reveal('#return-to-top', {reset: true});

  //Carousel init and auto slide
  M.Carousel.init(document.querySelectorAll('.carousel'), {
    fullWidth: true,
    indicators: true
  });

  //Modal init
  M.Modal.init(document.querySelectorAll('.modal'));

  window.addEventListener("resize", siteFooter);

  siteFooter();

  function siteFooter() {
    var siteFooterHeight = window.getComputedStyle(document.getElementById('site-footer')).height;
    document.getElementById('site-content').style.marginBottom = siteFooterHeight;
  }



  //Footer goes up when scrolled in
  var atBottom = false;
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY +1) >= document.body.offsetHeight) {
      atBottom = true;
      document.getElementById('site-footer').style.zIndex = 10;
      document.getElementById('return-to-top').style.zIndex =100;
    }else{
      if(atBottom){
        atBottom = false;
        document.getElementById('site-footer').style.zIndex = -1;
      }
    }
  };



  //Captcha validation
  document.getElementById("contactForm").addEventListener("submit",function(evt){
    var response = grecaptcha.getResponse();
    if(response.length == 0)
    {
      //reCaptcha not verified
      M.toast({html: '<span>❌  Captcha non vérifié ! </span>'});
      evt.preventDefault();
      return false;
    }

    M.toast({html: '<span>✔️  Formulaire envoyé !</span>'});
  });

}

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener("resize", function(){    setTimeout(function(){ siteCarousel(); }, 2000);});

    setTimeout(function(){ siteCarousel(); }, 2000);

    function siteCarousel(){
      var items = document.querySelectorAll('.carousel-item>.container');
      var maxHeight = 0;

      for(var i = 0; i < items.length ; i++){
        var height = parseInt(window.getComputedStyle(items[i]).height);
        if(height > maxHeight){
          maxHeight = height;
        }
      }
      document.getElementsByClassName('carousel')[0].style.height = (maxHeight+67)+'px';
    }


    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);


    tooltips = document.querySelectorAll('.material-tooltip');
    // Malt
    tooltips[0].style.backgroundColor= "#FF396C";
    tooltips[0].style.color= "white";

    // LD
    tooltips[1].style.backgroundColor= "#0077B5";
    tooltips[1].style.color= "white";

    // GH
    tooltips[2].style.backgroundColor= "#24292E";
    tooltips[2].style.color= "white";

    // AL
    tooltips[3].style.backgroundColor= "#F9F9FA";
    tooltips[3].style.color= "black";

    // FB
    tooltips[4].style.backgroundColor= "#4267B2";
    tooltips[4].style.color= "white";

    // Mail
    tooltips[5].style.backgroundColor= "#F9F9FA";
    tooltips[5].style.color= "black";
  });

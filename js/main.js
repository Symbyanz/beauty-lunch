$(document).ready( function(){

  $('.nav__open,.nav').click(function (event) {
    if ($(event.target).closest(".nav__item,.nav__close").length) {
      $('.nav').toggleClass('-active');
      return;
    }
    if ($(event.target).closest(".nav__container").length) {
      return;
    }
    $('.nav').toggleClass('-active');
  });

  $('.open').click(function() {
    $('body').css('overflow-y', 'hidden');
    $('.popup').fadeIn(400);
  });
  $('.close').click(function() {
    $('body').css('overflow-y', 'scroll');
    $('.popup').fadeOut(400);
  });



  $('button[href^="#"]').click(function() {
    var elementClick = $(this).attr("href");

    $('button.block_active').removeClass('block_active');
    $(this).addClass('block_active'); 

    var destination = $(elementClick).offset().top;
    $("html:not(:animated), body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $('.slider_one').slick({
    dots: true,
    infinite: false,
    arrows : false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.slider_two').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  let phonenumber = (inputtxt) => {
    var phoneno = /^(([0-9]){10})/;
    if (inputtxt.match(phoneno))
      return true;
    return false;
  }


  let data_validation = (name, phone) =>{
    if (name === undefined || phone === undefined) {
      alert("Произошла ошибка!");
      return false;
    }else if (/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(name.val()) ? false : true) {
      alert("Поле имя может содержать только буквенные значения");
      return false;
    }else if (name.val().length <= 3) {
      alert("Количество символов в поле имени должно быть больше 3");
      return false;
    } else if (name.val().length > 18) {
      alert("Количество символов в поле имени должно быть меньше 18");
      return false;
    } else if (!phonenumber(phone.val())) {
      alert("Введите корректный номер телефона");
      return false;
    }else{
      return true;
    }   
  }

  $('#phone').inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    autoUnmask: true,
  });

  $("#sendRequest").on('click', function() {
    let phone = $("#phone");
    let name = $("#name");
    let service = $("#service");
    if(data_validation(name, phone)){
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': name.val(), 'phone': phone.val(), 'service': service.val()},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone").val('');
          $("#name").val('');
          $('body').css('overflow-y', 'scroll');
          $('.popup').fadeOut(400);
        }
      });
    }
    return false;
  });

});
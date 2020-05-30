$(function(){
    var swiper = new Swiper('.swiper-container', {
        speed: 400,
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        autoplay: {
          delay: 2000,
        },
      });
      $('.venobox').venobox({
        autoplay:true,
        border: '10px',
      }); 
      $('.counter').counterUp();

      $('.datepicker').pickadate({monthsFull:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthsShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],weekdaysFull:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],weekdaysShort:["dom","lun","mar","mié","jue","vie","sáb"],today:"Hoy",clear:"Borrar",close:"Cerrar",firstDay:1,format:"dddd d !de mmmm !de yyyy",formatSubmit:"yyyy/mm/dd"}),jQuery.extend(jQuery.fn.pickatime.defaults,{clear:"Borrar"})
    
    }) 
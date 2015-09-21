 $(document).ready(function(){
          $(function() {


        $('#thumbs a').append('<img src="../img/next.png" class="glare" />');

        $('#carousel').carouFredSel({
          responsive: true,
          circular: false,
          auto: false,
          items: {
            visible: 1,
            width: 200,
            height: '56%'
          },
          scroll: {
            fx: 'directscroll'
          }
        });

        $('#thumbs').carouFredSel({
          responsive: true,
          circular: false,
          infinite: false,
          auto: false,
          prev: '#prev',
          next: '#next',
          items: {
            visible: {
              min: 2,
              max: 3
            },
            width: 250,
            height: '66%'
          }
        });

        $('#thumbs a').click(function() {
          $('#carousel').trigger('slideTo', '#' + this.href.split('#').pop());
          $('#thumbs a').removeClass('selected');
          $(this).addClass('selected');
          return false;
        });

      });

});

  $(function(){

    $('.pause').click(function(){   
       $("iframe").each(function() { 
         var src= $(this).attr('src');
           $(this).attr('src',src);  
});

   });
       });
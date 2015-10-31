function setupButtons()
{



  $(".btne10").click(function ()
  {
    $('.totalT').css("bottom", 13 + '%');
    $('.amountT').css("height", 13 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "229px",
      "left": "9px"
    });
  });


  $(".btne9").click(function ()
  {

    $('.totalT').css("bottom", 20 + '%');
    $('.amountT').css("height", 20 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "201px",
      "left": "9px"
    });
  });


  $(".btne8").click(function ()
  {
    $('.totalT').css("bottom", 28 + '%');
    $('.amountT').css("height", 28 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "183px",
      "left": "9px"
    });
  });

  $(".btne7").click(function ()
  {
    $('.totalT').css("bottom", 36 + '%');
    $('.amountT').css("height", 36 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "159px",
      "left": "9px"
    });

  });

  $(".btne6").click(function ()
  {
    $('.totalT').css("bottom", 43 + '%');
    $('.amountT').css("height", 43 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "140px",
      "left": "9px"
    });
  });

  $(".btne5").click(function ()
  {
    $('.totalT').css("bottom", 51 + '%');
    $('.amountT').css("height", 51 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "116px",
      "left": "9px"
    });

  });


  $(".btne4").click(function ()
  {
    $('.totalT').css("bottom", 65 + '%');
    $('.amountT').css("height", 65 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "74px",
      "left": "9px"
    });



  });

  $(".btne4a").click(function ()
  {
    $('.totalT').css("bottom", 58 + '%');
    $('.amountT').css("height", 58 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "93px",
      "left": "9px"
    });


  });

  $(".btne3").click(function ()
  {
    $('.totalT').css("bottom", 72 + '%');
    $('.amountT').css("height", 72 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "55px",
      "left": "9px"
    });

  });

  $(".btne2").click(function ()
  {
    $('.totalT').css("bottom", 80 + '%');
    $('.amountT').css("height", 80 + '%');
    $('.linha').css(
    {
      "background-image": "url(img/linha.png)",
      "top": "32px",
      "left": "9px"
    });


  });

  $(function ()
  {
    $("#tabs").tabs();
    $("#dicas").tabs();
  });

}

$(document).ready(setupButtons);
$(".easy a").click(function ()
{

  $(".easy a").css("font-size", "12px");
  $(this).css("font-size", "22px");


});
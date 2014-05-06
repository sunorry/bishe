$(function(){

  // nav click

  var ali = $('#nav li');
  var location = window.location.pathname;

  // if(location == '/reg') {
  //   ali.eq(2).addClass('active');
  // }
  switch(location) {
    case '/login':
      ali.eq(1).addClass('active').siblings().removeClass('active');
      break;
    case '/reg':
      ali.eq(2).addClass('active').siblings().removeClass('active');
      break;
    default:
      ali.eq(0).addClass('active').siblings().removeClass('active');
      break;
  }

});
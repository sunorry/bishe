$(function(){

  // nav click

  var ali = $('#nav li');
  var location = window.location.pathname;


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

  // load text.json for location
  $('.location').click({

  });


  function success(data){
    var arr = data.list;
    var combine = function(loc) {
      return [
        '<button type="button" data-toggle="modal" data-target="#location" class="btn btn-success">' + loc + '</button>'
      ]
    };
    var arr2 = [];
    for(var i=0; i<arr.length; i++) {
      arr2.push
    }
  }




  $.ajax({
    type: 'POST',
    url: '../fake/test.json',
    dataType: 'json',
    success: success,
    data:{name: 'location'}
  });
});
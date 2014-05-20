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


  function success(data){
    var arr = data.list;
    var combine = function(loc) {
      return [
        '<button type="button" data-toggle="modal" data-target="#locModal" class="btn btn-success">' + loc + '</button>'
      ].join("");
    };
    var arr2 = [];
    for(var i=0; i<arr.length; i++) {
      arr2.push(combine(arr[i].name));
    }
    var html = arr2.join("");
    console.log(html)
    $('.location').html(html);
  }

  $('#chooseLoc').click(function() {
    $.ajax({
      url: '../fake/test.json',
      type: 'get',
      dataType: 'json',
      success: success,
      data:{name: 'location'}
    });
  });





});

// $(function() {
//   $('#btnSendInfo').click(function() {
//     alert("hello");
//   })

/*  $('#fullname').mouseover(function () {
    $(this).css('background-color', 'yellow');
  })
  $('#fullname').mouseleave(function () {
    $(this).css('background-color', 'white');
  })
  $('#email').mouseover(function () {
    $(this).css('background-color', 'yellow');
  })
  $('#email').mouseleave(function () {
    $(this).css('background-color', 'white');
  })
  $('#yloc').mouseover(function () {
    $(this).css('background-color', 'yellow');
  })
  $('#yloc').mouseleave(function () {
    $(this).css('background-color', 'white');
  })
  $('#inputtext').mouseover(function () {
    $(this).css('background-color', 'yellow');
  })
  $('#inputtext').mouseleave(function () {
    $(this).css('background-color', 'white');
  })



$('#robo1').mouseover(function () {
  $(this).css('background-color', 'yellow');
})
$('#robo1').mouseleave(function () {
  $(this).css('background-color', '#a9a9a9');
})


$('#robo2').mouseover(function () {
  $(this).css('background-color', 'yellow');
})
$('#robo2').mouseleave(function () {
  $(this).css('background-color', '#a9a9a9');
})

$('#robo3').mouseover(function () {
  $(this).css('background-color', 'yellow');
})
$('#robo3').mouseleave(function () {
  $(this).css('background-color', '#a9a9a9');
})


$('#i3').mousedown(function () {
  alert('i3 is good!');
})
$('#i4').mousedown(function () {
  alert('i4 is better!');
})
$('#i7').mousedown(function () {
  alert('i7 is best!');
})

/*$('#fieldSetCPU').mousedown(function () {
  alert('i7 is best!');
})*/



/*$('#8').mousedown(function () {
  alert('8 gb of ram is good!');
})
$('#16').mousedown(function () {
  alert('16 gb of ram is better!');
})

$('#vrh').mouseover(function () {
  alert('Have you used Google Cardboard?');
})
$('#3ds').mouseover(function () {
  alert('Get a new 3D tv!');
})
$('#ss').mouseover(function () {
  alert('Try out our surround sound!');
})
})
//alert= function() {};

/*for (var i=0;i<document.forms.length;i++) {
  var form = document.forms[i];
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var results = '';
   // loop through all checkboxes to see if checked
   var checkboxes = form.querySelectorAll("input[type='checkbox']");
   for(var k = 0; k < checkboxes.length; k++) {
     results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
   }
   // loop through all radio butotns to display value
   var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
   for(var m = 0; m < radiobuttons.length; m++) {
     results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
   }
   // alert results
   alert(results);
 });
}*/


//Search bar filter
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchbox');
  filter = input.value.toUpperCase();
  ul = document.getElementById('robotUl');
  li = document.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
      li[i].style.display = "";
    } else {
      li[i].style.display= "none";
    }
  }
}

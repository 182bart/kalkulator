var x = "";
var y = "";
var tab = [0];
var z = 0;

// funkcje
$(document).ready(function() {
  $("#l2").text(z);
})


function start() {
  console.log(z);
  var x = $(this).val();
  if (z == 0) {
    console.log("HALLO")
  }
  else if((z!=0)&& ($("kf").data("clicked",)
    ))
    {
      tab.splice(0, 99);
      tab.push(z);
      console.log("HAHA");
      console.log(tab);
      $("#l1").text(z);
      z=0;
    }

    else if((z!=0)&& ($(".knf").click(function() {
        $(this).data(".knf", true)
      })))
      {
      tab.splice(0, 99);
      console.log("BABA");

      z = 0;
      $("#l2").text(z);
    }


  var x = $(this).val();
  $("#l1").append(x);
  tab.push(x);
}



function fun2() {

  var y = tab.join("");
  z = eval(y);
  tab.splice(0, 99);
  $("#l2").text(z);
  tab.push(z);
}

function reset() {
  tab.splice(0, 99);
  tab.push(0);
  z = 0;
  $("#l1").text("");
  $("#l2").text(z);
}

$(".knf").click(function()
{
   $(this).data('clicked', true);
});

$(".knf").click(start);
$(".kf").click(start);
$("#kr").click(fun2);
$("#ac").click(reset);

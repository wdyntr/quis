// ==================================================
// Project Name  :  Quizo
// File          :  JS Base
// Version       :  1.0.0
// Author        :  jthemes (https://themeforest.net/user/jthemes)
// ==================================================
$(function(){
  "use strict";
  // ========== Form-select-option ========== //
  $(".step_1").on('click', function(){
    $(".step_1").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_2").on('click', function(){
    $(".step_2").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_3").on('click', function(){
    $(".step_3").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_4").on('click', function(){
    $(".step_4").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_5").on('click', function(){
    $(".step_5").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_6").on('click', function(){
    $(".step_6").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_7").on('click', function(){
    $(".step_7").removeClass("active");
    $(this).addClass("active");
  })
  $(".step_8").on('click', function(){
    $(".step_8").removeClass("active");
    $(this).addClass("active");
  })
  $(".step_9").on('click', function(){
    $(".step_9").removeClass("active");
    $(this).addClass("active");
  })
  $(".step_10").on('click', function(){
    $(".step_10").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_11").on('click', function(){
    $(".step_11").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_12").on('click', function(){
    $(".step_12").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_13").on('click', function(){
    $(".step_13").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_14").on('click', function(){
    $(".step_14").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_15").on('click', function(){
    $(".step_15").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_16").on('click', function(){
    $(".step_16").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_17").on('click', function(){
    $(".step_17").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_18").on('click', function(){
    $(".step_18").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_19").on('click', function(){
    $(".step_19").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_20").on('click', function(){
    $(".step_20").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_21").on('click', function(){
    $(".step_21").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_22").on('click', function(){
    $(".step_22").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_23").on('click', function(){
    $(".step_23").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_24").on('click', function(){
    $(".step_24").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_25").on('click', function(){
    $(".step_25").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_26").on('click', function(){
    $(".step_26").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_27").on('click', function(){
    $(".step_27").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_28").on('click', function(){
    $(".step_28").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_29").on('click', function(){
    $(".step_29").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_30").on('click', function(){
    $(".step_30").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_31").on('click', function(){
    $(".step_31").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_32").on('click', function(){
    $(".step_32").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_33").on('click', function(){
    $(".step_33").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_34").on('click', function(){
    $(".step_34").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_35").on('click', function(){
    $(".step_35").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_36").on('click', function(){
    $(".step_36").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_37").on('click', function(){
    $(".step_37").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_38").on('click', function(){
    $(".step_38").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_39").on('click', function(){
    $(".step_39").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_40").on('click', function(){
    $(".step_40").removeClass("active");
    $(this).addClass("active");
  });
  
  // ================== CountDown function ================
  $('.countdown_timer').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
        + '<div class="count_number">%S</div>'));
      });
    });
  });
  // =====================Progress Increment====================
  $(document).on( 'click', '#nextBtn', function(){
    var $progressbar = $('.count_progress');
    for (var i = 1; i<4; i++) {
      var className = 'clip-'+i;
      if ($progressbar.hasClass(className)) {
        $progressbar.removeClass(className).addClass('clip-'+(i+1));
        break;
      }
    }
  });
  // =====================Progress Decrement====================
  $(document).on( 'click', '#prevBtn', function(){
    var $progressbar = $('.count_progress');
    for (var i = 1; i<4; i++) {
      var className = 'clip-'+i;
      if ($progressbar.hasClass(className)) {
        $progressbar.removeClass(className).addClass('clip-'+(i+1));
        break;
      }
    }
  });
  
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("multisteps_form_panel");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    
    document.getElementById("nextBtn").innerHTML = "Next Question" + ' <span><i class="fas fa-arrow-right"></i></span>';
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("multisteps_form_panel");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    // document.getElementById("wizard").submit();
    document.getElementById("nextBtn").setAttribute("type", "submit")
    window.location.href = "final.html"

    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("multisteps_form_panel");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

// function move() {
//   var elem = document.getElementById("myBar");
//   var width = parseInt(elem.innerHTML);
//   var aim = width + 25;
//   var id = setInterval(frame, 25);
  
//   function frame() {
//     if (width >= aim) {
//       clearInterval(id);
//     } else if(width >= 100) {
//       width=0;
//       aim = 25;
//       elem.style.width = width + '%';
//       elem.innerHTML = width * 1 + '%';
//     } else {
//       width++;
//       elem.style.width = width + '%';
//       elem.innerHTML = width * 1 + '%';
//     }
//   }
// }

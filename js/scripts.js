  // Logo Blink
(function blink() { 
  $(".fa-heartbeat").fadeOut(500).fadeIn(500, blink); 
})();
  // Logo Blink

  // Hide Elements
$("#head2").hide();  $("#mID").hide();  $("#upperBody").hide();
$("#head3").hide();  $("#bID").hide();  $("#middleBody").hide();
$("#head4").hide();  $("#qID").hide();  $("#lowerBody").hide();
$("#head5").hide();  $("#bxID").hide();
$("#head6").hide();  $("#siID").hide();
$("#head7").hide();  $("#dID").hide();
  // Hide Elements

  // Intro to Info
$(function() {
  $("#start").click(function() {
  $("#head1").fadeOut(750);
  $("#head2").delay(750).slideDown(750);
  $("#h1").css("z-index", 0);
  $("#h2").css("z-index", 1);
  });
});
  // Intro to Info

  // Info to Download
$(function() {
  $(".fa-download").click(function() {
  $("#head2").fadeOut(750);
  $("#head3").delay(750).slideDown(750);
  $("#h2").css("z-index", 0);
  $("#h3").css("z-index", 1);
  });
});
  // Info to Download

  // Info to Symptoms
$(function() {
  $(".fa-user-md").click(function() {
  $("#head2").fadeOut(750);
  $("#head4").delay(750).slideDown(750);
  $("#h2").css("z-index", 0);
  $("#h4").css("z-index", 1);
  });
});
  // Info to Symptoms

  // Info to Hospitals
$(function() {
  $(".fa-hospital-o").click(function() {
  $("#head2").fadeOut(750);
  $("#head5").delay(750).slideDown(750);
  $("#h2").css("z-index", 0);
  $("#h5").css("z-index", 1);
  });
});
  // Info to Hospitals

  // Download to Info
$(function() {
  $("#back3").click(function() {
  $("#head3").fadeOut(750);
  $("#head2").delay(750).slideDown(750);
  $("#h3").css("z-index", 0);
  $("#h2").css("z-index", 1);
  $("#appInfo").text("");
  });
});
  // Download to Info

  // Symptom to Info
$(function() {
  $("#back4").click(function() {
  $("#head4").fadeOut(750);
  $("#myModal").fadeOut(750);
  $("#upperBody").slideUp();
  $("#middleBody").slideUp();
  $("#lowerBody").slideUp();
  $("#head2").delay(750).slideDown(750);
  $("#h4").css("z-index", 0);
  $("#h2").css("z-index", 1);
  });
});
  // Symptom to Info

  // Hospital to Info
$(function() {
  $("#back5").click(function() {
  $("#head5").fadeOut(750);
  $("#head2").delay(750).slideDown(750);
  $("#h5").css("z-index", 0);
  $("#h2").css("z-index", 1);
  $("#hospitalArea").val("");
  });
});
  // Hospital to Info

  // Processing
$(function() {
  $("#submit").click(function() {
  $("#head5").fadeOut(500);
  $("#head6").delay(500).fadeIn(500).fadeOut(1500);
  $("#head7").delay(1750).fadeIn(500);
  $("#h5").css("z-index", 0);
  $("#h7").css("z-index", 1);
  });
});
  // Processing

  // App Messages
var iosApp = "https://kevtlw.cloudant.com/hopecenter/apple";
var androidApp = "https://kevtlw.cloudant.com/hopecenter/android";

function iosApps(selector) {
  $.ajax({
    type: "GET",
    url: iosApp,
    success: function(data) {
      $("#appInfo").text(data.info);
    }
  });
}
function androidApps(selector) {
  $.ajax({
    type: "GET",
    url: androidApp,
    success: function(data) {
      $("#appInfo").text(data.info);
    }
  });
}
  // App Messages

  // Input Response
function forceLower(strInput) {
  strInput.value = strInput.value.toLowerCase();
}
  // Input Response

  // Hospital Results
function findInArea() { 
  var area = $("#hospitalArea").val();
  if (area == "manhattan") {
    $("#mID").show().css("z-index", 1);
  }
  else if (area == "brooklyn") {
    $("#bID").show().css("z-index", 1);
  }
  else if (area == "queens") {
    $("#1ID").show().css("z-index", 1);
  }
  else if (area == "bronx") {
    $("#bxID").show().css("z-index", 1);
  }
  else if (area == "staten island") {
    $("#siID").show().css("z-index", 1);
  }
  else {
    $("#dID").show();
  }
  $("#dID").text("Sorry, but HopeCenter is currently only available in the NYC boroughs.");
}
  // Hospital Results

  // Results to Hospitals
$(function() {
  $("#back7").click(function() {
  $("#head7").fadeOut(750);
  $("#head5").delay(750).slideDown(750);
  $("#h7").css("z-index", 0);
  $("#h5").css("z-index", 1);
  $("#mID").fadeOut(750);
  $("#bID").fadeOut(750);
  $("#qID").fadeOut(750);
  $("#bxID").fadeOut(750);
  $("#siID").fadeOut(750);
  $("#dID").fadeOut(750);
  $("#hospitalArea").val("");
  });
});
  // Results to Hospitals

  // Show Upper Body
$(function() {
  $("#upper").click(function() {
  $("#upperBody").slideToggle();
  $("#middleBody").slideUp();
  $("#lowerBody").slideUp();
  });
});
  // Show Upper Body

  // Show Middle Body
$(function() {
  $("#middle").click(function() {
  $("#middleBody").slideToggle();
  $("#upperBody").slideUp();
  $("#lowerBody").slideUp();
  });
});
  // Show Middle Body

  // Show Lower Body
$(function() {
  $("#lower").click(function() {
  $("#lowerBody").slideToggle();
  $("#upperBody").slideUp();
  $("#middleBody").slideUp();
  });
});
  // Show Lower Body

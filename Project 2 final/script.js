/* first text box */

function postToGoogle() {
  var field1 = $("[name='feed1']").val();

  var field2 = $("[name='feed2']").val();

  var field3 = $("[name='feed3']").val();

  var field4 = $("[name='feed4']").val();

  var field5 = $("[name='feed5']").val();

  $.ajax({
    url:
      "https://docs.google.com/forms/u/3/d/e/1FAIpQLSf7WLsoyLiS3SJO0Q5f7MZ7wFtzIS1EdbgKXkSapdrQYbyf1w/formResponse",
    data: {
      "entry.1807185177": field1,

      "entry.1931952031": field2,

      "entry.1837909928": field3,

      "entry.1471226374": field4,

      "entry.653364923": field5
    },
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //Success message
        alert("Success!");
      },
      200: function () {
        //Success Message
        alert("Success!");
      }
    }
  });
}

/*
$(document).ready(function() {
   $('#form').submit(function() {
     postToGoogle();
     return false;
   });
});
*/
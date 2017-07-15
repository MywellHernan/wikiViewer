//Iniciate jQuery
$(document).ready(function() {
  //run code when clicked
  $("#search").click(function() {
    //get search input
    var searchTerm = $("#searchTerm").val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        //wipe out content after every input
        $("#output").html('');
        //get link console.log(data[3][0]);
        //get heading console.log(data[1][0]);
        //get description console.log(data[2][0]);
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend("<a href= " + data[3][i] + " class='list-group-item' target='_blank'><h4 class='list-group-item-heading'>" + data[1][i] + "</h4><p class='list-group-item-text'>" + data[2][i] + "</p></a>");
        }
        //empty input box after search
        $('#searchTerm').val('');
      },
      error: function(errorMessage) {
        console.log(errorMessage);
      }
    });    
  });
  //Activate code through enter key
  $("#searchTerm").keypress(function(e) {
      if(e.which == 13) {
        $("#search").click();
      }
    });
});

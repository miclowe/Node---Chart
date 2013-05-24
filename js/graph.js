(function() {
  $(document).ready(function() {
    return $.ajax({
      url: "http://localhost:80/",
      method: "get",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(data) {
        return Morris.Bar({
          element: "chart",
          data: data,
          xkey: "title",
          ykeys: ["value"],
          labels: ["Total Miles"],
          barColors: ["purple"]
        });
      }
    });
  });

}).call(this);
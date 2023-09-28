$(document).ready(function () {
  $.getJSON(
    "http://cors.io/?https://blockchain.info/stats?format=json",
    function (data) {
      var url =
        "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=2BFE828F4B1A7B8EA83398AA3E97E9EB&steamid=76561197960435530&relationship=friend";
      $.ajax({
        url: url,
        dataType: "json",
        success: function (data) {
          console.log(data);
          $("#output").html(JSON.stringify(data));
        },
        error: function (req, text, error) {
          console.log(text);
          console.log(error);
          console.log("Request failed");
        },
      });
    }
  );
});

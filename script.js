$("#nextQuote").on("click", function(){
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote").html("\""+response.quoteText+"\"")
        $("#author").html("-<em>"+response.quoteAuthor+"</em>");
        $("#tweet").attr('href','https://twitter.com/intent/tweet?text="'+response.quoteText+'" -'+response.quoteAuthor);
        }
  });
});

$(document).ready(function() {
  $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text='+$('#quote').text()+' -' + $('#author').text());
});
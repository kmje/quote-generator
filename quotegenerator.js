var quoteText = "hello";

var generateQuote = function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {

    var displayQuote = data.quoteText;
    var displayAuthor = data.quoteAuthor;
    document.getElementById('show_quote').innerHTML = displayQuote;

    document.getElementById('show_author').innerHTML = displayAuthor;

    quoteText = displayQuote+' – '+ displayAuthor;
  console.log(quoteText);
  return quoteText;
  });

  
}

var tweetQuote = function() {
  
  window.open('https://twitter.com/share?'  + '&text=' + quoteText);
}

window.onload(quoteText=generateQuote());
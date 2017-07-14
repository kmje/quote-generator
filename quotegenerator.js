var quoteText = "";

var generateQuote = function() {

  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {

    var displayQuote = data.quoteText;
    var displayAuthor = data.quoteAuthor;
    document.getElementById('show_quote').innerHTML = displayQuote;

    document.getElementById('show_author').innerHTML = displayAuthor;

    quoteText = displayQuote+' – '+ displayAuthor;
    $('body').css('background-color',change_color);
  return quoteText;
  });
    
  
}

var change_color = function() {
    var color = '#';
    var letters = ['fe8787','20b2aa','b0c7df','de98c5','ff5733','fec387','b22028','20b261'];
    color += letters[Math.floor(Math.random() * letters.length)];
   
    
    return color; 
}
var tweetQuote = function() {
  
  window.open('https://twitter.com/share?'  + '&text=' + quoteText);
}

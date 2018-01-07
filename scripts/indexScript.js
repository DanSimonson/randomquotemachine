$(document).ready(function () {    
      //initial check to make sure jquery loaded
      //alert('jquery loaded');
      var randomQuote;
      var author
      var quotePlusAuthor

      function quote(){
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data){
            randomQuote = data.quoteText;
            author = data.quoteAuthor;
            quotePlusAuthor = randomQuote + "~" + author;
            $(".quote").html('"'+data.quoteText+'"');
            
            $(".author").html("~"+data.quoteAuthor);
        });
      };

      $("#quoteBtn").on("click", function(){
          quote();
          

      });
      $("#tweetBtn").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + quotePlusAuthor);
      });

});
$(document).ready(function () {    
     
      var quotePlusAuthor;

      function quote(){
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data){
            quotePlusAuthor = data.quoteText +"~"+ data.quoteAuthor;
            $(".quote").html('"'+data.quoteText+'"');            
            $(".author").html("~"+data.quoteAuthor);
        });
      };

      $("#quoteBtn").on("click", function(){
          quote();
      });

      $("#tweetBtn").on("click", function() {
        if (typeof quotePlusAuthor !== "undefined") {
            window.open("https://twitter.com/intent/tweet?text=" + quotePlusAuthor);
        } else {
            alert('Please generate a quote to tweet');
        }        
      });
});
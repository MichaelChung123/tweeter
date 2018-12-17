/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function() {
// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const tweetData = [
{
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": {
      "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
      "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
      "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    },
    "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
  ];

  // returns the HTML structure of the tweet
  function createTweetElement (tweetData) {
    var tweetName = tweetData.user.name;
    var avatarSmall = tweetData.user.avatars.small;
    var handle = tweetData.user.handle;
    var content = tweetData.content.text;
    var footer = tweetData.created_at;
    let footerFormat = moment(footer).fromNow();

    console.log(footerFormat);

    var $tweet = $("<article>").addClass('tweet').html(`
      <header class="tweet-header">
      <img src="${avatarSmall}" class="user-image"/>
      <h1 class="username">${tweetName}</h1>
      <content class="tag">${handle}</content>
      </header>

      <content class="tweet-text">${content}</content>

      <footer class="tweet-footer">${footerFormat}
      <div class="icon-container">
      <img src="flag.png" class="icons"/>
      <img src="refresh.png" class="icons"/>
      <img src="heart.png" class="icons"/>
      </div>
      </footer>
      `);

    return $tweet[0];
  }

  function renderTweets(tweetArray) {
    //clear the container class
    $('.tweets-section').empty();

    for(let x of tweetArray) {
      $('.tweets-section').prepend(createTweetElement(x));
    }
  }

  function loadTweets() {
     $.ajax({
      type: "GET",
      url: '/tweets',
      success: function(result){
        renderTweets(result);
      },
      error: function(error){
        console.log("loadTweets() erroring");
      }
    });
  }

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));

    return div.innerHTML;
  }
  
 

  $("#tweet-form").on("submit", function(event) {
    event.preventDefault();
    let tweetText = event.target[0].value;

    // XSS Testing Script: <script>alert("testing xss");</script>
    //avoiding xss scripts
    event.target[0].value = escape(event.target[0].value);

    let queryTweet = $(this).serialize();
    let tweetInput = event.target[0].value;
    let tweetLength = tweetInput.length;
    let currentLength = 140 - tweetLength;

    let $h1 = $("<h1 class='error'></h1>");

    if(currentLength < 0) {
      $h1.text("Tweet too long!");
      $('.new-tweet').append($h1);
      $('.error').slideToggle(750);
    } else if(tweetInput === "" || tweetInput === null) {
      $h1.text("You need to write a tweet before posting one!");
      $('.new-tweet').append($h1);
      $('.error').slideToggle(750);
    } else {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: queryTweet,
        success: function(result){
          console.log("successful POST for tweet");
          loadTweets();
          //setting text back to the normal text form
          event.target[0].value = tweetText;
          $('.error').slideToggle(750);
        },
        error: function(error){
          console.log("unable to complete POST request for tweet");
        }
      });
    }
  });

  $('.compose-button').on('click', function(event) {
    $('.new-tweet').slideToggle(750);
    $('.textbox').select();
  });

  $('.compose-button').on('mousedown', function(event) {
    $('.compose-button').addClass('compose-clicked');
  });

  $('.compose-button').on('mouseup', function(event) {
    $('.compose-button').removeClass('compose-clicked');
  });

  loadTweets();
  
});
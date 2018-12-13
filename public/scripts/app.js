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
    var twName = tweetData.user.name;
    var avatar = tweetData.user.avatars.small;
    var at = tweetData.user.handle;
    var cont = tweetData.content.text;
    var footer = tweetData.created_at;

    var $tweet = $("<article>").addClass('tweet').html(`

      <header class="tweet-header">
      <img src="${avatar}" class="user-image"/>
      <h1 class="username">${twName}</h1>
      <content class="tag">${at}</content>
      </header>

      <content class="tweet-text">${cont}</content>

      <footer class="tweet-footer">${footer}
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
    // console.log(createTweetElement(tweetArray[0]));
    for(let x of tweetArray) {
      $('.container').append(createTweetElement(x));
    }
  }

  renderTweets(tweetData);

   // let $tweet = createTweetElement(tweetData);
   // $('.tweet').append($tweet);
});



 // let name = tweetData.user.name;
    // let smallAvatar = tweetData.user.avatars.small;
    // let regularAvatar = tweetData.user.avatars.regular;
    // let largeAvatar = tweetData.user.avatars.large;
    // let handle = tweetData.user.handle;
    // let content = tweetData.content.text;
    // let created_at = tweetData.created_at;




    // let $article = $("<article class='tweet-article'></article>");
    // // $('.tweet').append($article);

    // let $header = $("<header class='tweet-header'></header>");
    // // $('.tweet-article').append($header);

    // let $img = $('<img>');
    // $img.addClass('user-image');
    // $('.tweet-header').append($img);

    // let $h1 = $("<h1 class='username'></h1>").text(name);
    // // $('.tweet-header').append($h1);

    // let $content = $("<content class='tag'></content>").text(handle);
    // // $('.tweet-header').append($content);

    // let $content2 = $('<content>');
    // $content2.addClass('tweet-text');
    // $content2.text(content);
    // $('.tweet-article').append($content2);

    // let $footer = $('<footer>');
    // $footer.addClass('tweet-footer');
    // $footer.text(created_at);
    // $('.tweet-article').append($footer);

    // let $div = $('<div>');
    // $div.addClass('icon-container');
    // $('footer-class').append($div);

    // $img.addClass('icons');
    // $img.attr("src", smallAvatar);
    // $('.icon-container').append($img);

    // $img.addClass('icons');
    // $img.attr("src", regularAvatar);
    // $('.icon-container').append($img);

    // $img.addClass('icons');
    // $img.attr("src", largeAvatar);
    // $('.icon-container').append($img);

    // let $article = $("<article class='tweet-article'></article>");
    // $('.tweet').append($article);

    // let $header = $("<header class='tweet-header'></header>");
    // $header.addClass('tweet-header');
    // $('.tweet-article').append($header);

    // let $img = $('<img>');
    // $img.addClass('user-image');
    // $('.tweet-header').append($img);

    // let $h1 = $('<h1>');
    // $h1.addClass('username');
    // $h1.text(name);
    // $('.tweet-header').append($h1);

    // let $content = $('<content>');
    // $content.addClass('tag');
    // $content.text(handle);
    // $('.tweet-header').append($content);

    // let $content2 = $('<content>');
    // $content2.addClass('tweet-text');
    // $content2.text(content);
    // $('.tweet-article').append($content2);

    // let $footer = $('<footer>');
    // $footer.addClass('tweet-footer');
    // $footer.text(created_at);
    // $('.tweet-article').append($footer);

    // let $div = $('<div>');
    // $div.addClass('icon-container');
    // $('footer-class').append($div);

    // $img.addClass('icons');
    // $img.attr("src", smallAvatar);
    // $('.icon-container').append($img);

    // $img.addClass('icons');
    // $img.attr("src", regularAvatar);
    // $('.icon-container').append($img);

    // $img.addClass('icons');
    // $img.attr("src", largeAvatar);
    // $('.icon-container').append($img);

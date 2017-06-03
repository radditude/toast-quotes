$(document).ready(function() {

  // most of this script is quotes

  var quotes = [
    ["We are a tiny pinprick of life in a sea of death, and it will swallow us all.", "Mallory Ortberg", "the-toast.net/2013/09/03/another-lifeless-planet-found/"],
    ["We're here, and we're alive, and we're young, and we're eating potatoes with eggs on them.", "Mallory Ortberg", "#"],
    ["You have to learn to respect the mushroom before you can hunt for it, lest you anger the other things that live under roots and in between trees.", "Mallory Ortberg", "#"],
    ["Sure, generations come and go, but at least the earth is still here. Never lost the earth yet.", "Mallory Ortberg", "the-toast.net/2013/12/28/ecclesiastes-for-optimists/"],
    ["The world will never stop recommending almonds to you. And yet you must resist them.", "Mallory Ortberg", "the-toast.net/2013/09/27/almonds-suck/"],
    ["All fish can be flying fish if you put them in the sky.", "Mallory Ortberg", "#"],
    ["At the time, of course, we did not yet know that loving a man who enjoys Kerouac novels was morally wrong.", "Mallory Ortberg", "the-toast.net/2013/12/13/femslash-friday-rory-and-paris/"],
    ["And on the last day of the Sexiest Man Alive’s reign, he shall baptize the new Man in his blood, and with his blood shall the new Man be consecrated.", "Mallory Ortberg", "the-toast.net/2013/11/20/adam-levine-sexiest-man-alive/"],
    ["Enter HAMLET, skateboarding.", "Mallory Ortberg", "the-toast.net/2014/02/11/dirtbag-hamlet/"],
    ["<i>Hwæt</i>ever.", "Mallory Ortberg", "the-toast.net/2015/09/15/dirtbag-beowulf/"],
    ["babe i just want you to know that there is nothing i wouldn’t poison for you", "Mallory Ortberg", "the-toast.net/2015/09/02/dirtbag-medea/"],
    ["<b>Q:</b> How many male novelists does it take to screw in a lightbulb? <br /><b>A:</b> You wouldn’t understand.", "Mallory Ortberg", "the-toast.net/2013/11/04/male-novelist-jokes/"],
    ["how many ships with a nun on them should we have for the party do you think", "Mallory Ortberg", "the-toast.net/2015/02/11/two-medieval-monks-invent-dinner-parties/"],
    ["So do you see what I mean <br /><i>yeah i definitely understand</i><br />because its kind of complicated<br /><i>no I’m with you</i><br />ill explain it again", "Mallory Ortberg", "the-toast.net/2014/06/23/women-listening-men-art-history/"],
    ["a pen for each hand, and a twisted manimal for resting your feet on", "Mallory Ortberg", "the-toast.net/2015/07/02/two-medieval-monks-invent-writing/"],
    ["Anna, he’s going to start reading poetry at us<br />what do we do<br /><i>play dead?</i><br />no that’s bears", "Mallory Ortberg", "the-toast.net/2014/10/28/women-terrible-time-parties-western-art-history/"],
    ["I’m witches, I’m too witches to come, sorry", "Mallory Ortberg", "the-toast.net/2016/03/28/oh-no-my-thing-is-happening-women-leaving-tactfully-in-western-art-history/"],
    ["Harry shook his head, like a proud animal, or the stock market. “I could kiss your lips,” he said, “but I cannot kiss your self-esteem.", "Mallory Ortberg", "the-toast.net/2015/02/12/ayn-rands-harry-potter-half-blood-prince/"],
    ["Not all Beasts eat you up in a single night. Some Beasts devour by pieces, and still others make you consume yourself.", "Mallory Ortberg", "the-toast.net/2015/03/05/beauty-beast/"],
    ["I never asked you to have faith in me, Goody Watson.", "Mallory Ortberg", "the-toast.net/2016/02/09/reasons-i-would-not-have-been-burned-as-a-witch/"],
    ["surprise, fucko", "Mallory Ortberg", "the-toast.net/2015/10/28/dirtbag-athena/"],
    ["Never rise above anything. The sky is no place for a human.", "Mallory Ortberg", "the-toast.net/2014/06/12/respond-criticism/"],
    ["Remember that life is a rich tapestry.", "Mallory Ortberg", "the-toast.net/2014/06/12/respond-criticism/"],
    ["bitches gather flowers furiously", "Mallory Ortberg", "the-toast.net/2014/06/03/two-monks-invent-pre-raphaelite-brotherhood/"],
    ["big hair, no heart, that’s the key", "Mallory Ortberg", "the-toast.net/2014/06/03/two-monks-invent-pre-raphaelite-brotherhood/"],
    ["<ul><li>Deeper’n’Ever Pie</li><li>Deeper’n’Ever Squats</li></ul>", "Mallory Ortberg", "the-toast.net/2014/12/02/redwall-diet/"],
    ["I did not say it was love because I was young and I thought some friendships just ached like that. I would say it now, because I know how to call love by its right name.", "Mallory Ortberg", "the-toast.net/2015/09/25/femslash-friday-the-big-bang-theory/"],
    ["You have a terrible violence in your heart.", "Mallory Ortberg", "the-toast.net/2014/01/14/are-you-in-a-bronte-novel/"],
    ["Remember that you always have the option of taking to the sea.", "Mallory Ortberg", "the-toast.net/2013/11/08/said-said-advice-dating-disclosures/"],
    ["it is a small price to pay to wield a truly color-blind appendage", "Sarah Jeong", "the-toast.net/2014/06/03/the-racist-bone-in-my-body/"],
    ["Ronbledore is coming. Ronbledore is already here. This is the darkest timeline.", "Mallory Ortberg", "the-toast.net/2014/07/09/ronbledore-is-canon/"],
    ["In the history of time, no man has ever silently anticipated the needs of a woman.", "Mallory Ortberg", "the-toast.net/2014/07/28/maintain-control-shared-armrest-guide-women-flying-alone/"],
    ["The bride is keeping her last name but has forsaken all else.", "Mallory Ortberg", "the-toast.net/2014/08/05/what-the-bride-took/"],
    ["Meet crush. Think she’ll make<br />the first move. She thinks you will.<br />Both die celibate.", "Anna Pulley", "the-toast.net/2015/11/18/queer-girl-pick-up-strategies-haiku/"],
    ["Fifty Shades of Gay<br />A bisexual<br />is born and no one questions<br />her identity.", "Anna Pulley", "the-toast.net/2015/02/25/fifty-shades-of-grey-had-been-written-by-a-queer-lady-haiku/"],
    ["Call me old-fashioned, but I think that ladies should live in lakes until they’re married.", "Mallory Ortberg", "the-toast.net/2014/09/03/call-old-fashioned-must/"],
    ["I NEED MORE PELTS<br />I COULD BE WEARING SO MANY MORE PELTS", "Mallory Ortberg", "the-toast.net/2014/09/09/unsatisfied-women-western-art-history/"],
    ["BRING ME MY PAIN TWIN", "Mallory Ortberg", "the-toast.net/2014/09/17/bring-pain-twin-movie-star-names-things/"],
    ["Remember: mortality is beauty.", "Sara Colvin", "the-toast.net/2014/11/19/bookish-beauty-tips/"],
    ["Our Father,<br />Who art in heaven,<br />Stay there.", "Mallory Ortberg", "the-toast.net/2014/12/15/misandrists-prayer/"],
    [" The seventh wave of feminism will take place in a dimension catty-corner to our own, and we will not notice it", "Mallory Ortberg", "the-toast.net/2014/12/18/next-waves-feminism/"],
    ["grease the dryer, dust the teakettle, rearrange the cat", "Mallory Ortberg", "the-toast.net/2015/01/06/id-love-help-wife-dishes-im-trapped-something-heavy/"],
    ["Instead of having children, buy one hundred Boston ferns and call them your children.", "Sarah Marshall", "the-toast.net/2015/01/05/secret-happy-marriage/"],
    ["When you fight, it’s tight and painful and you have to close your eyes to say things to her, because you make yourself say things that you know she would never forgive you for. You say her name, and it’s desperate. And you never really talked about it.", "Mallory Ortberg", "the-toast.net/2014/12/05/femslash-friday-sex-city/"]
  ];

  var colors = ["#51a77e", "#1f6745", "#349869", "#14464d", "#31814b", "#5ba792", "#82b8c3", "#217c75", "#18aaae", "#226666", "#448899", "#40417c", "#174f72", "#3f83aa", "#29709c", "#4e6f90", "#345372"];

  var screenWidth = $(window).width();
  if (screenWidth < 768) {
    $("#mallory").removeClass("pull-right");
    $("#mallory").addClass("btn-block");
  }

  // everything that happens when you click TOAST ME

  function getQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    var quote = quotes[num][0];
    var author = quotes[num][1];
    var link = quotes[num][2];
    var color = Math.floor(Math.random() * colors.length);

    // text changes
    $("#textBlock").animate({
        opacity: 0
      }, 150,
      function() {
        $(this).animate({
          opacity: 1
        }, 1200);
        $(".quote").html(quote);
       $("footer").html(author + ' (<a href="http://' + link + '" target="_blank"><i>' +  'link' + '</i></a>)');
      });

    //social media button auto-populate
    var regex = /(<([^>]+)>)/ig;
    var quoteText = quote.replace(regex, "");

    $(".tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText) + ' - ' + encodeURIComponent(author));
    $(".tumblr-quote").attr('href', 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=http://bit.ly/29v4Hzh&tags=the-toast,quotes,thetoastquotemachine&posttype=quote&show-via=bit.ly/29v4Hzh&caption='+encodeURIComponent(author)+'&content='+ encodeURIComponent(quoteText));
    $(".facebook-quote").attr('href', '')

 //   $("footer").animate({
  //      opacity: 0
   //   }, 250,
   //   function() {
   //     $(this).animate({
    //      opacity: 1
    //    }, 250);
    //    $("footer").html(author + ' (<a href="http://' + link + '" target="_blank"><i>' +  'link' + '</i></a>)');
  //    });

    // color changes
    $("button").animate({
      backgroundColor: colors[color],
      borderColor: colors[color]
    }, 1000);
    $(".quote").animate({
      color: colors[color]
    }, 1000);
    $("blockquote").animate({
      borderColor: colors[color],
      color: colors[color]
    }, 1000);
    $("footer").animate({
      color: colors[color]
    }, 1000);
    //$("p").animate( {
   //   color: colors[color]
   // }, 1000);
   // $("a").animate( {
   //   color: colors[color]
  //  }, 1000);
    $(".author").animate( {
      color: colors[color]
    }, 1000);

  }

  // event handlers

  $("#mallory").on("click", getQuote);
  $("#twitter").on("click", tweet);

});

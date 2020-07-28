const choice = ['rock', 'paper', 'scissors'];
var user, num;

$("button").click(function() {
  user = this.name;
  $(this).fadeIn(100).fadeOut(100).fadeIn(100);
  num = Math.floor(Math.random() * 3);
  comp = choice[num];
  $(".computer img").attr("src", "images/" + comp + ".png").fadeIn(100).fadeOut(100).fadeIn(100);
  if (user === comp) {
    $("h1").text("Game Draw!")
  } else if (user === "rock") {
    if (comp === "scissors") {
      $("h1").text("You win!")
    } else if (comp === "paper") {
      $("h1").text("You loose!")
    }
  } else if (user === "paper") {
    if (comp === "rock") {
      $("h1").text("You win!")
    } else if (comp === "scissors") {
      $("h1").text("You loose!")
    }
  } else if (user === "scissors") {
    if (comp === "rock") {
      $("h1").text("You loose!")
    } else if (comp === "paper") {
      $("h1").text("You win!")
    }
  }
});

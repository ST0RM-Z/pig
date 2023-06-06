"use strict";
const game = {
  player1: new Pig(),
  player2: new Pig(),
  currentPlayer: null,
  get isValid() {
    if (this.player1.name === "" || this.player2.name === "") {
      return false;
    } else {
      return true;
    }
  },
  start(name1, name2) {
    this.player1.name = name1;
    this.player2.name = name2;
    this.currentPlayer = this.player1;
    return this;
  },
  reset() {
    // call the reset() method on each of the player Pig objects
    const pig = new Pig();
    pig.reset();
  },
  changePlayer() {
    // determine whether player1 or player2 is the current player, then
    // console.log("inchangeplayer");
    let total = parseInt($("#total").val());
    let score1 = parseInt($("#score1").val());
    let score2 = parseInt($("#score2").val());

    if ($("#current").text() == $("#player1").val()) {
      $("#current").text($("#player2").val());
      //   console.log("inif");
      this.currentPlayer = this.player2;
      total = total + score1;

      $("#score1").val(total);
    } else {
      $("#current").text($("#player1").val());
      //   console.log("inelse");
      this.currentPlayer = this.player1;
      total = total + score2;
      $("#score2").val(total);
    }
    // $("#die").val("0");
    // $("#total").val("0");
    $("#roll").focus();
    // update the currentPlayer property to hold the other player.
  },
  hold(score1, score2) {
    // call the hold() method of the current player
    // determine whether player1 or player2 is the current player, then
    // update that player's score with the current total
    const winningTotal = 50;
    // var score1;
    // var score2;
    var total = parseInt($("#total").val());
    console.log(total);
    if (this.currentPlayer.name == this.player1.name) {
      score1 = $("#score1").val(total);
      console.log("if", this.currentPlayer.name);
      console.log("if", this.player1.name);
    } else {
      score2 = $("#score2").val(total);
      console.log("else", this.currentPlayer.name);
      console.log("else", this.player2.name);
    }
  },
  checkWinner() {
    // check the players' totals to see if either is at or above 100
    // points. If so, return that player's name. Otherwise, return
    // the string "none".
    const winningTotal = 50;
    var score1 = $("#score1");
    var score2 = $("#score2");
    var total = parseInt($("#total").val());
    console.log(score1.val());
    // score.val(parseInt(score.val()) + total);
    if (score1.val() >= winningTotal) {
      alert("player1  WINS!");
    } else if (score2.val() >= winningTotal) {
      alert("player2  WINS!");
    } else {
      game.changePlayer();
    }

    $("#winning_total").text(winningTotal);
    $("#player1").focus();
  },
};

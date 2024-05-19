// Function Random
function random() {
  var arrgeneratorRandom = [
    "“Be yourself; everyone else is already taken.”― Oscar Wilde",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
    "“So many books, so little time.”― Frank Zappa",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
    "“You only live once, but if you do it right, once is enough.”― Mae West",
  ];
  var generatorRandom = Math.floor(Math.random() * arrgeneratorRandom.length);
  var box = "";
  box += `
  <p class="text-center fs-2">${arrgeneratorRandom[generatorRandom]}</p>
  `
  document.getElementById("cont").innerHTML = box;
}

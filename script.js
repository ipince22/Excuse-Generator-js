  function myFunction() {
    setInterval(function(){ 
        generator() 
    }, 3000);
    }

      function generator() {
        var who = ["the dog", "my granma", "his turtle", "my bird"];
        var what = ["eat", "pissed", "crushed", "broked"];
        var when = [
          "before the class",
          "right in time",
          "when I finished",
          "during my lunch",
          "while I was praying"
        ];

        var msg =
          who[Math.floor(Math.random() * who.length)] +
          " " +
          what[Math.floor(Math.random() * what.length)] +
          " " +
          when[Math.floor(Math.random() * when.length)];
        document.getElementById("excuse").innerHTML = msg;
       
      }
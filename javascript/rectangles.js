window.onload = function() {
    var canvas = document.getElementById("space"),
      c = canvas.getContext("2d"),
      rectangles = {},
      rectangleIndex  = 0,
      maxLife,
      numRecs = 10;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Rectangle() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight -20;
      this.width = Math.random() * 40;
      this.height = Math.random() * 40;
      rectangleIndex++;
      rectangles[rectangleIndex] = this;
      this.id = rectangleIndex;
      this.life = 0;
      this.maxLife = Math.random() * window.innerHeight + canvas.height/2;
      this.color = "hsla("+parseInt(Math.random()*360, 10)+",100%,60%, 0.8)";
    }

    Rectangle.prototype.draw = function() {
      this.x += 0
      this.y += Math.random()*10
      this.life++;
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.width , this.height);
    }

    setInterval(function() {
      c.fillStyle = 'rgba(255, 255, 255, 1)';
      c.fillRect(0, 0, canvas.width, canvas.height);
      for (i = 0; i < numRecs; i++) {
        new Rectangle();
      }
      for (var i = 0 in rectangles) {
        rectangles[i].draw();
      }
    }, 100);

}

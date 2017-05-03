window.onload = function() {
    var canvas = document.getElementById("circles"),
      c = canvas.getContext("2d"),
      circles = {},
      circleIndex = 0,
      maxLife;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Circle() {
      this.centerX = Math.random() * window.innerWidth;
      this.centerY = Math.random() * window.innerHeight;
      this.r = 12;
      circleIndex++;
      circles[circleIndex] = this;
      this.strokeColor = "hsla("+parseInt(Math.random()*360, 10)+",100%,60%, 0.5)";
    }

    Circle.prototype.draw = function() {
      c.beginPath();
      c.arc(this.centerX, this.centerY, this.r, 0, 2 * Math.PI, false);
      c.lineWidth = 1;
      c.strokeStyle = this.strokeColor;
      c.stroke();
    }

    setInterval(function() {
      for (i = 0; i < 10; i++) {
        new Circle();
      }
      for (var i = 0 in circles) {
        circles[i].draw();
      }
    }, 200)

  };

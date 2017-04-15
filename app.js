window.onload = function() {
    var canvas = document.getElementById("space"),
      c = canvas.getContext("2d"),
      particles = {},
      particleNum = 10,
      particleIndex = 0,
      i,
      rectangles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    function Particle() {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.vx = Math.random() * 10 - 5;
      this.vy = Math.random() * 10 - 5;
      // this.gravity = -2;
      particleIndex++;
      particles[particleIndex] = this;
      this.id = particleIndex;
      this.life = 0;
      this.maxLife = Math.random() * 30 + 100;
      this.color = "hsla("+parseInt(Math.random()*360, 10)+",100%,60%, 0.8)";
    }
    
    Particle.prototype.draw = function() {
      this.x += this.vx;
      this.y += this.vy;
      // this.vy = this.gravity;
      this.life++;
      if (Math.random() < 0.08) {
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
      }
      if (this.life >= this.maxLife) {
        delete particles[this.id];
      }

      c.fillStyle=this.color;
      c.fillRect(this.x, this.y,(Math.floor(Math.random()* 8 + 2)) , (Math.floor(Math.random()* 8 + 2)));
    };


    setInterval(function () {
      // c.globalCompositeOperation = "source-over";
      c.fillStyle = 'rgba(255, 255, 255, 0.2)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      for (i = 0; i < particleNum; i++) {
        new Particle();
      }

      // c.globalCompositeOperation = "lighter";

      for (var i = 0 in particles) {
        particles[i].draw();
      }
    }, 30);

}

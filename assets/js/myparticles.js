var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = Math.random() * 8 + 8;
  this.dx = (Math.random() - 0.5) * 5;
  this.dy = (Math.random() - 0.5) * 5;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
  };

  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

function init() {
  for (var i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}

init();
animate();

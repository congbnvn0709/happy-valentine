const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let hearts = [];
let maxHearts = 50;

class Heart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = Math.random() * 2 + 1;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size / 2);
    ctx.bezierCurveTo(
      this.x + this.size / 4, this.y - this.size / 4,
      this.x + this.size / 2, this.y,
      this.x, this.y + this.size / 2
    );
    ctx.bezierCurveTo(
      this.x - this.size / 2, this.y,
      this.x - this.size / 4, this.y - this.size / 4,
      this.x, this.y - this.size / 2
    );
    ctx.fill();
  }

  update() {
    this.y -= this.speed;
    if (this.y + this.size / 2 < 0) {
      this.y = canvas.height + this.size / 2;
    }
  }
}

function init() {
  canvas.width = window.innerWidth;
}

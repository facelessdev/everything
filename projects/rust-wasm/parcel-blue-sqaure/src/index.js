import "babel-polyfill";

(async () => {

  const { add, minus } = await import('./game/main.rs');

  const canvas = document.getElementById('canvas');
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext('2d');
  
  const fps = 1.0 / 60;

  const state = {
    player: {
      x: 5,
      y: 5,
      speed: 2,
    }
  };

  const key = {
    'W': '87',
    'A': '65',
    'S': '83',
    'D': '68',
  }

  const input = {
    '87': {
      label: key.W,
      state: false,
    },
    '65': {
      label: key.A,
      state: false, 
    },
    '83': {
      label: key.S,
      state: false, 
    },
    '68': {
      label: key.D,
      state: false, 
    },
  }

  document.addEventListener('keydown', function(event) {
    const key = input[String(event.keyCode)];
    if (key) {
      key.state = true;
    }
  });

  document.addEventListener('keyup', function(event) {
    const key = input[String(event.keyCode)];
    if (key) {
      key.state = false;
    }
  });

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.rect(state.player.x, state.player.y, 10, 10); 
    ctx.stroke();

    requestAnimationFrame(draw);
  }

  const update = () => {
    if (input[key.D].state === true) {
      state.player.x = add(state.player.x, state.player.speed);
    }

    if (input[key.A].state === true) {
      state.player.x = minus(state.player.x, state.player.speed);
    }

    if (input[key.W].state === true) {
      state.player.y = minus(state.player.y, state.player.speed);
    }

    if (input[key.S].state === true) {
      state.player.y = add(state.player.y, state.player.speed);
    }

    setTimeout(() => requestAnimationFrame(update), fps);
  }

  const start = () => {
    requestAnimationFrame(draw);
    requestAnimationFrame(update);
  }

  start();

})();


import "babel-polyfill";

(async () => {

  const { add, minus } = await import('./game/main.rs');

  const canvas = document.getElementById('canvas');
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext('2d');
  
  const fps = 1.0 / 60;

  const state = {
    entities: {
      player: {
        x: 5,
        y: 5,
        speed: 2,
        render: ctx => {
          ctx.beginPath();
          ctx.lineWidth="6";
          ctx.fillStyle="red";
          ctx.fillRect(state.entities.player.x, state.entities.player.y, 10, 10); 
          ctx.stroke();
        }
      },
      monster: {
        x: width - 20,
        y: height - 20,
        speed: 1.5,
        render: ctx => {
          ctx.beginPath();
          ctx.lineWidth="6";
          ctx.fillStyle="blue";
          ctx.fillRect(state.entities.monster.x, state.entities.monster.y, 10, 10); 
          ctx.stroke();
        }
      }
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


  // draw method get current render state from api
  // pass through the current input being passed.
  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let entity in state.entities) {
      state.entities[entity].render(ctx)
    }

    requestAnimationFrame(draw);
  }

  const update = () => {
    if (input[key.D].state === true) {
      state.entities.player.x = add(state.entities.player.x, state.entities.player.speed);
    }

    if (input[key.A].state === true) {
      state.entities.player.x = minus(state.entities.player.x, state.entities.player.speed);
    }

    if (input[key.W].state === true) {
      state.entities.player.y = minus(state.entities.player.y, state.entities.player.speed);
    }

    if (input[key.S].state === true) {
      state.entities.player.y = add(state.entities.player.y, state.entities.player.speed);
    }

    setTimeout(() => requestAnimationFrame(update), fps);
  }

  const start = () => {
    requestAnimationFrame(draw);
    requestAnimationFrame(update);
  }

  start();

})();


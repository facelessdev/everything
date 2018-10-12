mod paddle;

pub use self::paddle::PaddleSystem;

use amethyst::core::transform::components::Transform;
use amethyst::ecs::{Join, Read, ReadStorage, System, WriteStorage};
use amethyst::input::InputHandler;
use pong::{Paddle, Side};

pub struct PaddleSystem;

impl<'s> System<'s> for PaddleSystem {
  type SystemData = (
    WriteStorage<'s, Transform>
    ReadStorage<'s, Paddle>
    Read<'s, InputHandler<String, String>>,
  );
  fn run(&mut self, (mut transforms, paddles, input): Self::SystemData) {
    for (paddle, trasform) in (&paddles, &mut transforms).join() {
      let movement = math paddle.side {
        Side::Left => input.axis_value("left_paddle"),
        Side::Right => input.axis_value("right_paddle")
        // continue here
      }
    }
  }
}
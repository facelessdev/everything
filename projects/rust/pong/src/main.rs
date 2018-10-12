extern crate amethyst;

use amethyst::core::transform::TransformBundle;
use amethyst::input::InputBundle;
use amethyst::prelude::*;
use amethyst::renderer::{DisplayConfig, DrawFlat,
                         Pipeline, PosTex, RenderBundle, Stage};

mod pong;
use pong::Pong;

fn main() -> amethyst::Result<()> {

    // We'll put the rest of the code here
    amethyst::start_logger(Default::default());
    
    let path = "./resources/display_config.ron";
    let config = DisplayConfig::load(&path);

    let binding_path = format!(
        "{}/resources/bindings_config.ron",
        env!("CARGO_MANIFEST_DIR")
    );
    let input_bundle = InputBundle::<String, String>::new()
        .with_bindings_from_file(binding_path)?;

    let pipe = Pipeline::build().with_stage(
        Stage::with_backbuffer()
            .clear_target([0.0, 0.0, 0.0, 1.0], 1.0)
            .with_pass(DrawFlat::<PosTex>::new()),
    );

    let game_data = GameDataBuilder::default()
        .with_bundle(TransformBundle::new())?
        .with_bundle(RenderBundle::new(pipe, Some(config)))?
        .with_bundle(input_bundle)?;

    let mut game = Application::new("./", Pong, game_data)?;

    game.run();
    Ok(())
}
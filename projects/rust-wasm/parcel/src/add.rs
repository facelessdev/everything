
use std::os::raw::{c_double};

#[wasm_bindgen(module = "./renderer.js")]
extern "C" {
    fn name() -> String;

    type MyClass;

    #[wasm_bindgen(constructor)]
    fn new() -> MyClass;

    #[wasm_bindgen(method, getter)]
    fn number(this: &MyClass) -> u32;
    #[wasm_bindgen(method, setter)]
    fn set_number(this: &MyClass, number: u32) -> MyClass;
    #[wasm_bindgen(method)]
    fn render(this: &MyClass) -> String;
}

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b
}
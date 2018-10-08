import "babel-polyfill";

(async () => {

  const mod = await import('./add.rs');
  console.log(mod.add(2, 3));

})();

// import mod from './add.rs';

// console.log(mod.add(2, 3));

// mod.clear_screen = () => {
//   console.log('somethign that will be called on the rust side');
// }

// console.log('this is a thing');


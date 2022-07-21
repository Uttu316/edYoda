try {
  throw "I am an Error";
  console.log("Hello");
} catch (err) {
  console.log(err);
}

function forLoop(array){
  for (i= 0; i < 25; array++ ){
  if (array === 1){
    console.log("I am 1 strange loop.")
  }else if (i > 1)
  {
    console.log(`"I am ${array} strange loops."`)
  }
  return array;
}
}
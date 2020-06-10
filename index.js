var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Hagrid){
  kittens.push(Hagrid);
  return kittens
}

function destructivelyPrependKitten(Draco){
  kittens.unshift(Draco)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return
}

function appendKitten(){
  Ruby.concat(kittens)
  return Ruby
}

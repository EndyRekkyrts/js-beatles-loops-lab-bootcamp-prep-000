function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  const arrMusIns = []
  
  for (let i = 0, lentgh = arrayMusicians.length; i < length; i++) {
    arrMusIns.push('${arrayMusicians[i]} plays ${instruments[i]}')
  }
  return arrMusIns
}

function johnLennonFacts(facts) {
  const newFacts = []
  
  let i = 0
  while (i < facts.length) {
    newFacts.push('${facts[i]}')
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  const beatles =[]
  
  do {
    beatles.push("i love the Beatles!")
    number++
  }
  while (number < 15)
  
  return beatles
}
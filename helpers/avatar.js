const setAvatarBackgroundColor = (word) => {
  const wordHue = genereateWordHue(word)

  return `hsla(${wordHue}, 75%, 50%, .9)`
}

const genereateWordHue = word => {
  const lettersCodePointAtSum = reduceLettersCodePointAt(word)

  return Math.floor((lettersCodePointAtSum + 90)) % 360
}

const reduceLettersCodePointAt = word => {
  return word.split("").reduce((acc, curr) => (
    String(acc).codePointAt() + String(curr).codePointAt()
  ))
}

export default setAvatarBackgroundColor

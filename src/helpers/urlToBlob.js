const urlToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onerror = () => {
      reject(new TypeError('Network request failed'))
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.response)
      }
    }
    xhr.open('GET', uri, true)
    xhr.responseType = 'blob' // convert type
    xhr.send(null)
  })
}

export default urlToBlob

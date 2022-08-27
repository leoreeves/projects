// Thanks to CKM for the typewriter effect https://github.com/ckm100/typeWriter.js
function typeWriter(selector, type, interval) {
  document.addEventListener('DOMContentLoad', typeWriter, false)
  // Getting elements in the DOM
  const el = document.querySelectorAll(selector)
  // Length of element on the page
  const len = el.length
  // List of elements on the page in the DOM
  const list = []
  let typingInterval = interval
  let a
  let all
  let text
  let start
  let end
  let style
  let clear

  for (let i = 0; i < len; i += 1) {
    // Pushing the element in the list array
    list.push(el[i])
  }

  for (a = 0; a < list.length; a += 1) {
    all = list[a]
    // List of all element
    text = all.innerHTML
    text += "<span id='cursor'>|</span>"
    // InnerHTML of the elements
    start = 0
    // Start index of the text in the elements
    end = 0
    // End index of the text in the elements
    style = document.createElement('style')
    document.head.appendChild(style)

    // Setting the default interval to 100 when interval is not set by the user
    if (!interval) {
      typingInterval = 100
    }

    if (type) {
      clear = setInterval(() => {
        // Animation start
        let newText = text.substr(start, end)
        all.innerHTML = newText += "<span id='cursor'>|</span>"
        // loops through the text in the element
        end += 1
        // Insert stylesheet to the document to animate cursor
        style.sheet.insertRule('@-webkit-keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}', 0)
        style.sheet.insertRule('@keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}', 0)
        cursor.style.fontSize = '1em'
        cursor.style.fontWeight = 'bold'
        cursor.style.webkitAnimation = 'cursor 0.5s infinite'
        cursor.style.animation = 'cursor 0.5s infinite'

        if (newText === text) {
          clearInterval(clear) // Animation end
        }
      }, typingInterval)
    }
  }
  return all
}

// My script
typeWriter('#code', 'true', 80)

const code = document.getElementById('code')
const text = ['Wake up, Neo...', 'The Matrix has you...', 'Follow the white rabbit.', 'Knock, knock, Neo.', '']
let counter = 0

function changeText() {
  if (counter >= text.length) {
    counter = 4
    code.innerHTML = ''
  }
  code.innerHTML = text[counter]
  typeWriter('#code', 'true', 80)
  code.innerHTML = ''
  counter += 1
}

setInterval(changeText, 5000)

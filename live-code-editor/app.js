function getTextareaElements() {
  const elements = {}
  ;['html', 'css', 'js', 'code'].forEach((elementId) => {
    elements[elementId] = document.getElementById(elementId)
  })
  return elements
}

function writeCodeToIframe() {
  const textareaElements = getTextareaElements()
  const { html, css, js, code } = textareaElements
  const { document } = code.contentWindow
  document.open()
  document.writeln(`${html.value}<style>${css.value}</style><script>${js.value}</script>`)
  document.close()
}

function addBodyKeyupEventListener() {
  document.body.addEventListener('keyup', writeCodeToIframe)
}

addBodyKeyupEventListener()

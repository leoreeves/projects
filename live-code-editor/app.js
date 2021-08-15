function compile() {
  const elements = {};
  ['html', 'css', 'js', 'code'].forEach((elementId) => {
    elements[elementId] = document.getElementById(elementId);
  });

  document.body.onkeyup = () => {
    const {
      html, css, js, code,
    } = elements;
    const { document } = code.contentWindow;
    document.open();
    document.writeln(`${html.value}<style>${css.value}</style><script>${js.value}</script>`);
    document.close();
  };
}

compile();

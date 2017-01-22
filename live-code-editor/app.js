function compile() {
  const html = document.getElementById('html');
  const css = document.getElementById('css');
  const js = document.getElementById('js');
  const code = document.getElementById('code').contentWindow.document;

  document.body.onkeyup = () => {
    code.open();
    code.writeln(`${html.value}<style>${css.value}</style><script>${js.value}</script>`);
    code.close();
  };
}

compile();

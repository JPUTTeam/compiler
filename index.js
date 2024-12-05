function updatePreview() {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const js = document.getElementById('js').value;
  
    const iframe = document.getElementById('preview');
    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
      </html>
    `;
  
    iframe.srcdoc = content; // تحميل المحتوى في iframe
  }
  
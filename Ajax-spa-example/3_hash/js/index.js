(function () {
  const root = document.querySelector('.app-root');

  function render(data) {
    const json = JSON.parse(data);
    root.innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
  }

  function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) resolve(req.response);
          else reject(req.statusTex);
        }
      };
    });
  }

  const routes = {
    '': function () {
      get('/data/home.json').then(render);
    },
    'service': function () {
      get('/data/service.json').then(render);
    },
    'about': function () {
      get('/data/about.html').then(renderHtml);
    },
    otherwise() {
      root.innerHTML = `$(`
    }
  }

})()
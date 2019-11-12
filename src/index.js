console.log('reload!')

if (!window.history) {
  return
}

const renderPage = p => {
  const body = document.getElementById('body')

  if (body) {
    if (p === '/') {
      body.innerHTML = 'Landing Page'
    } else if (p === '/page1') {
      body.innerHTML = 'Page 1'
    } else if (p === '/page2') {
      body.innerHTML = 'Page 2'
    } else {
      body.innerHTML = '404 Error'
    }
  }
}

renderPage(window.location.pathname)

window.addEventListener(
  'popstate',
  event => {
    renderPage(window.location.pathname)
  },
  false
)
;(history => {
  let pushState = history.pushState
  history.pushState = function(state, title, path) {
    if (typeof history.onpushstate == 'function') {
      history.onpushstate({ state, title, path })
    }
    return pushState.apply(history, arguments)
  }
})(window.history)

history.onpushstate = e => {
  renderPage(e.path)
}

const btn1 = document.getElementById('btn1')

if (btn1) {
  btn1.onclick = e => {
    e.preventDefault()
    history.pushState(null, 'Page 1', '/page1')
  }
}

const btn2 = document.getElementById('btn2')

if (btn2) {
  btn2.onclick = e => {
    e.preventDefault()
    history.pushState(null, 'Page 2', '/page2')
  }
}

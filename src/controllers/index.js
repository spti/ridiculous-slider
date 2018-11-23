import React from 'react'
import ReactDOM from 'react-dom'

// import {App} from './app.js'

// import {sectionsHome} from '../pages/home.js'
import {Home} from '../pages/home.js'


function main() {
  const container = document.querySelector('main')
  // ReactDOM.render(<App pages={[{id: 'home', sections: sectionsHome}]}/>, container)
  ReactDOM.render(<Home />, container)
}

export {main}

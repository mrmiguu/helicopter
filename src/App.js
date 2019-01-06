import React, { Component } from 'react'

import './styles/App.css'

class App extends Component {

  state = {}
  
  render() {
    return (
      <div className="App">
        <header>
          <div>Mom</div>
        </header>

        <div><span className="me">Hi mom</span></div>
        <div><span className="mom">What's up</span></div>
        <div><span className="me">I'm making a messenger app prototype and I'm testing out Facebook's</span></div>
        <div><span className="mom">Where is Bryce?</span></div>
        <div><span className="me">What do you mean?</span></div>
        <div><span className="me">Which Bryce are you talking about?</span></div>
        <div><span className="mom">Your old coworker</span></div>
        <div><span className="me">Ahh!</span></div>
        <div><span className="me">Yes.</span></div>
        <div><span className="me">I know the exact one you're talking about</span></div>

        <footer>
          <input type="text" />

          <button>✈️</button>
        </footer>
      </div>
    )
  }
}

export default App

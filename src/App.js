import React, { Component } from 'react';

import './App.css';
import block from './block'

class App extends Component {
  id='block-react'
  Width= 480
  Height= 320
  scale = 1

  componentDidMount() {
    block({ id: this.id,scale: this.scale })
  }

    render() {
      const style = {
        background: 'linear-gradient(177deg, #eee, #ddd 75%, #ccc)',
        display: 'block',
        margin: '0 auto',
        width: `${this.scale * this.Width}px`,
        height: `${this.scale * this.Height}px`,
      }
      return (
        <div className="App">
          <canvas
            id={this.id}
            width={`${this.scale * this.Width * 2}`}
            height={`${this.scale * this.Height * 2}`}
            style={style}
          />
        </div>
      )
    }
  }

export default App

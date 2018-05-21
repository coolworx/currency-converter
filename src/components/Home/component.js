import React, { Component } from 'react'

import './styles.css'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='header'><span>My Awesome Currency Converter</span></div>

        <ul>
          <li>Create a currency converting application. Go to <a href='https://currencylayer.com/' target='_blank'>currencylayer.com</a> and create a free account (it's ok to use other currency converting service).</li>
          <li>The user should be able to pick a currency (from a dropdown, a list, etc.) and have it converted into US dollars.</li>
          <li>Don't rush, better less but of quality than a pile of half-baked code... Be creative! (use of images? responsive design?)</li>
          <li>Much good luck!</li>
        </ul>
      </div>
    )
  }
}

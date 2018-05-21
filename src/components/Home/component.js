import React, { Component } from 'react'

import './styles.css'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='header'><span>My Awesome Currency Converter</span></div>

        <ul>
          <li>Create a currency converter application. Go to <a href='https://currencylayer.com/' target='_blank'>currencylayer.com</a> and create a free account (but you can use another API if you prefer).</li>
          <li>The user should be able to pick a currency (from a dropdown, a list, etc.) and have it converted into US dollars.</li>
          <li>Much good luck! Don't rush, better less but of quality than a pile of half-baked code...</li>
          <li>Be creative! (use of images? responsive design?)</li>
        </ul>
      </div>
    )
  }
}

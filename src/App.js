import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  state = {
    headerTabs: ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4', 'TAB 5', 'TAB 6', 'TAB 7', 'TAB 8'],
    selectedHeaderTab: 'TAB 1'
  }
  handleHeaderTabs(value) {
    this.setState({ selectedHeaderTab: value })
  }
  componentDidMount () {
    window.onscroll = () => {
      this.state.headerTabs.map(item =>
      {
        let bounding = document.getElementById(item).getBoundingClientRect()
        if (bounding.top >= 0 && bounding.bottom <= 200) {
          this.setState({ selectedHeaderTab: item })
        }
      })
    }
  }
  render() {
    return (
      <div>
        <div className='header-tabs'>
          {this.state.headerTabs.map((tab, tabI) => (
              <a key={tabI} href={'#' + this.state.selectedHeaderTab}>
                <button
                  className={tab === this.state.selectedHeaderTab ? 'tab active' : 'tab'}
                  onClick={() => {this.handleHeaderTabs(tab)}}>
                    {tab}
                </button>
              </a>
          ))}
        </div>
        <div className='divisions'>
          {this.state.headerTabs.map(tab => 
          <div key={tab}>
            <hr id={tab} className='space' />
            <div><b>{'#'+tab}</b></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt lorem ac urna finibus, vel consectetur nisl consectetur.
              In mollis augue quis fringilla dapibus. Ut sodales quam tellus, non convallis nisi facilisis eget. Mauris tortor arcu, maximus id 
              augue ac, gravida aliquam metus. Mauris faucibus, urna eu venenatis facilisis, velit enim placerat ipsum, vel placerat mi arcu ut 
              massa. Nulla accumsan odio viverra augue fermentum, id vulputate urna pharetra. Suspendisse laoreet pretium mollis. Fusce tristique
               consectetur euismod. Nam dolor neque, elementum at massa et, posuere egestas urna.</p>
            <p>Etiam consequat augue erat, a ultricies ipsum feugiat ut. Etiam porta pellentesque ante, eu hendrerit quam scelerisque ac. Phasellus
               nec libero ac enim sagittis pharetra at in leo. Praesent ac est lacus. Maecenas quis urna eget diam tristique fringilla nec eget 
               sapien. Fusce venenatis, massa tempor sollicitudin consectetur, massa nibh lacinia eros, ac vehicula est massa non urna. Praesent et
                quam tincidunt, consectetur augue quis, pretium magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                 cubilia Curae; Donec auctor ex et erat blandit venenatis.</p>
            <p>Nullam pretium ullamcorper tristique. Mauris accumsan tortor a dictum fermentum. Nulla ex metus, auctor quis fringilla nec, malesuada
               sed urna. Quisque non pretium justo. Mauris in ullamcorper arcu. Phasellus pretium sollicitudin mauris ut interdum. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a tempus ante. Vivamus dolor odio, porttitor lacinia 
                tellus vitae, tristique accumsan turpis. Cras ut dolor accumsan, dignissim justo sit amet, convallis mauris. Nullam facilisis laoreet
                 feugiat. Aliquam ac odio et ex aliquet ullamcorper a in lorem. Donec feugiat nibh id arcu maximus, eget luctus lacus pharetra.</p>
            <p>Nunc et leo urna. Phasellus molestie imperdiet ante eu posuere. Nunc imperdiet blandit lectus, in consectetur enim blandit sit amet.
               Vivamus posuere quis lectus ac pretium. Pellentesque arcu justo, posuere at rutrum at, viverra eu arcu. Curabitur non nibh id mauris 
               aliquam gravida. Curabitur facilisis augue eros, eu efficitur risus faucibus et. Vestibulum commodo sapien a enim mollis laoreet. 
               Aliquam erat volutpat. Etiam porta interdum mollis. Sed ut lobortis eros.</p>
            <p>Integer et nisi a tortor ornare pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Nullam vel metus interdum erat varius volutpat. Vestibulum elementum ipsum quis metus ornare finibus. Mauris euismod eu felis eget 
              placerat. Aenean pulvinar dui vitae sapien aliquet, sit amet commodo leo euismod. Nunc dolor magna, iaculis in augue bibendum, ornare
               vestibulum orci. Fusce et ligula vitae sapien finibus pretium. Etiam suscipit, est ut molestie tincidunt, risus elit molestie ipsum,
                at facilisis diam tortor eget nisl. Donec eget neque dolor.</p>
          </div>)}
        </div>
      </div>
    )
  }
}

export default App
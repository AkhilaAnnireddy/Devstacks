import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom';
import './Landingpage.css'
class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inname: ''
    }
  }

  handleSearch (e) {
    this.setState({ inname: e.target.value })
  }

  handleGoClick = (e) =>{
      e.preventDefault()
      this.props.history.push({pathname:'/searchlist',state:{inname: this.state.inname}});
  }

  render () {
    return (
      
        <div className='searchbar-container centered bg'>
          <form className='example' onSubmit={e => e.preventDefault()}>
            <h1>StackStats</h1>
            <input
            type='text'
            size='45'
            placeholder='Find Stackoverflow users...'
            onChange={this.handleSearch.bind(this)}
            value={this.state.inname} 
           
            />
             <span className="search-btn"
            type='submit'
            onClick={this.handleGoClick.bind(this)}
            />
          </form>
        </div>
    )
  }
}

export default withRouter(LandingPage);
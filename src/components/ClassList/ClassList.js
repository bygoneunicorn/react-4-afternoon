import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res =>{
      console.log(res)
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    var studentsDisplay = this.state.students.map((e,i) =>{
      return(
        <Link to={`/student/${e.id}`} key={i}>
          <h3 key={e.id}>{e.first_name} {e.last_name}</h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentsDisplay}
        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
}
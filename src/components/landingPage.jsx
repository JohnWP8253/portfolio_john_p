import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { ProfilePic } from './.assets/images';

class Landing extends Component {
  render () {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={ ProfilePic } alt="profilepic" className="profile-pic" />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing

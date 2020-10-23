import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
// import { ProfilePic } from './.assets/images/profile_jp.jpg';

class Landing extends Component {
  render () {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            {/* <ProfilePic/> */}
            <img src={"../assets/images/profile_jp.jpg"} alt="profilepic"/>
        
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing

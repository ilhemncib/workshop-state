import { Fragment } from 'react';
import React, { Component } from 'react'

 class Profile extends Component {
    //ici 
    state ={
    timer:0 
    }
    componentDidMount = () => {
        
        this.myInterval = setInterval(() => {
          this.setState({ timer: this.state.timer + 1 });
        }, 1000);
      };

  render() {
    console.log(this.props.person.bio)
    // hedhy destruc
    const {person}=this.props
    const{fullName,bio,imgSrc,  profession}=person;
    return (
        <Fragment>
        <div style={{display:"flex" , justifyContent:"center"}}>
     <div className="card" style={{width:"18rem"}}>
  <img src={imgSrc} className="card-img-top" style={{width:"100%"}}alt="..."/>
  <div class="card-body">
   <h5 className="card-title">{fullName}</h5>
    <p class="card-text">{bio}</p>
    <p class="card-text">{profession}</p>
    <a href="!#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

      </div>
      <h2>timer: {this.state.timer}</h2>
      </Fragment>
     
    )
  }
}

export default Profile
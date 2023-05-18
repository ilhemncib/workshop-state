
import './App.css';
import { Component} from 'react';
import Profile from './Component/Profile' ;
import image from './monphoto.jpg';

class App extends Component {
 state = {
   person:{ fullName:"ilhem",
    bio:"full", 
    imgSrc: image ,
     profession:"dev" } ,
// show est boolean
   show:false
  };
// toggl bech tsir 3al show
  toggleVisibility = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div className="App">
        <h1>Workshop State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.show ? 'Hide' : 'Show'} Profile
        </button>
       
        {this.state.show && <Profile person={this.state.person}/>}
      </div>
    );
  }
}

export default App;
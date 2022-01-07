import React, { Component } from 'react';
import './App.css';
import icons8 from './icons8-taco-48.png';
import hamburger from './hamburger.png';
class App extends Component {
  state = {
    reviews: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/reviews');
      const reviews = await res.json();
      this.setState({
        reviews
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (


      <div class="container">
        <h2 class="title">Restraunt Reviews by: ReviewMe App <img src={icons8} alt="logo" /> <img src={hamburger} /></h2>

        <table class="table table-dark table-striped">

          <thead>
            <tr>
              <th>Name:</th>
              <th>Reviews:</th>


            </tr>

          </thead>
          {this.state.reviews.map(review => (
            <tbody>
              <tr>
                <td><u>{review.restraunt_name}</u></td>
                <td>"{review.comment}"</td>




              </tr>
            </tbody>
          ))}
        </table>
      </div>


    );
  }
}

export default App;

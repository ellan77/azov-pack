import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Card from './components/Card'

import img1 from './images_azov_pack/azmol.png'
import img2 from './images_azov_pack/bucket2.png'

import img3 from './images_azov_pack/DSC_0098.png'

class App extends Component {
  state = {
    items: [
      {name: 'Бочка', image: img1, url: '#'},
      {name: 'Ведра и Барабаны', image: img2, url: '#'},
      {name: 'Полимерная Тара', image: img3, url: '#'},
    ]
    }
  render() {
    return (
     <>
      <Header items={this.state.items} />
      <Hero />

          <div class="container">
            <div class="card-deck mb-3 text-center">

             {this.state.items.map((card)=>{
                return(
                  <Card
                  name={card.name}
                  image={card.image}
                  />
                )
             })}
            </div>

<Footer />

</div>
     </>
    );
  }
}

export default App;

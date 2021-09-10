import './App.css'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PokemonCard from "./components/PokemonCard";
import img1 from "./assets/bg1.jpg"
import img2 from "./assets/bg2.jpg"

import {default as pokemons} from './assets/pokemons.json'

const App = () => {
  
  return (
   <>
    <Header title='Hello' descr='This is Header'/>
    <Layout
     title='Section 1' 
     urlBg={img1}
    >
      <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
      <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
    </Layout>
    <Layout
     title='Section 2' 
     colorBg='Red'
    >
      <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
      <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
    </Layout>
    <Layout
     title='Section 3' 
     urlBg={img2}
    >
      <div className="flex">
        {
          pokemons.map(item =>  <PokemonCard 
                                    name={item.name}
                                    id={item.id}
                                    type={item.type}
                                    img={item.img}
                                    values={item.values}
                                    key={item.id}
                                />)
        }
      </div>
    </Layout>
    <Footer/>
   </>
  );
}

export default App;

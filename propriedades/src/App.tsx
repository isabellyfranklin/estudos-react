import "./App.css";
import { Recipe } from "./components/Recipe";
import cafeMocha from "././assets/caffe-mocha.png";
import milkshakePopcorn from "././assets/caramel-popcorn-milkshake.avif";
import lateExpresso from "././assets/latte-espresso-milk-iced-coffee-ice-cream-milk-cream-cafe-thumbnail.png";
import cheeseCake from "./assets/cheesecake-milkshake.png";
import { Coffee } from "./components/Coffee";

function App() {
  return (
    <>
      <h1 className="title">Receita StarBucks</h1>

      <div className="recipe-list">
        <Recipe onClick={ ()=> alert('Voce quer ver mais de: Iced Cafffe Mocha') }>
          <Coffee
            imageSrc={cafeMocha}
            imageSize={90}
            imageHeight={180}
            coffe={{
              name: "Iced Caffe Mocha",
              description: "Rico e com toque de baumilha",
            }}/>      
        </Recipe>

        <Recipe>
          <Coffee 
            imageSrc={cafeMocha}
            imageSize={90}
            imageHeight={180}
            coffe={{
              name: "Iced Caffe Mocha",
              description: "Rico e com toque de baumilha",
            }}/>
        </Recipe>

        <Recipe>
          <Coffee 
            imageSrc={lateExpresso}
            imageSize={170}
            imageHeight={180}
            coffe={{
              name: "latto Expresso with Milk",
              description: "Um classico Starbucks",
              time: 5,
            }}/>
        </Recipe>

        <Recipe>
          <Coffee   
            imageSrc={milkshakePopcorn}
            imageSize={170}
            imageHeight={180}
            coffe={{
              name: "MilkShake Popcorn",
              description: "Um classico Starbucks",
              time: 2,
            }}/>
        </Recipe>

        <Recipe>
          <Coffee  
            imageSrc={cheeseCake}
            imageSize={170}
            imageHeight={180}
            coffe={{
              name: "latto Expresso with Milk",
              description: "Um classico Starbucks",
              time: 3,
            }}/>
        </Recipe>

        <Recipe>
          <Coffee  
          imageSrc={cheeseCake}
          imageSize={170}
          imageHeight={180}
          coffe={{
            name: "latto Expresso with Milk",
            description: "Um classico Starbucks",
            time: 3,
          }}/>
        </Recipe>
       
      </div>
    </>
  );
}

export default App;

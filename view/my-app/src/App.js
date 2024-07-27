import logo from './logo.svg';
import './App.css';

class Garment {
  constructor({label,name,src,price}){

    this.label = label;
    this.name = name;
    this.link = src;
    this.price = price;
  }
  show = () => {
    return `${this.label}, ${this.name}, $${this.price}`
  }

  identify = () => {
    return this.label;
  }

  cost = () => {
    return this.price;
  }

  image = () => {
    return this.link;
  }
} 

function generate(){
  return
}

function App() {
  let data = [{
    label: "Costume Kit",
    name: "Construction Worker",
    link: "//spirit.scene7.com/is/image/Spirit/01567585-a?wid=640&hei=640&fmt=webp",
    price: 29.99
  },
{
  label: "Crocs",
    name: "Classic Clog",
    link: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_83A_ALT100/crocs",
    price: 49.99
},
{
  label: "Generic",
    name: "Capri Pants",
    link: "https://m.media-amazon.com/images/I/51VpnNqAXRL._AC_SX522_.jpg",
    price: 13.24
}]
  let garments = data.map((item)=> new Garment(item))
  let display = (g) => {

    return g.map((item) => 
    (<div id={item.identify()}>
      <img src={item.image()}>
      </img>
      <p>
        {item.show()}
        </p>
        </div>))
  }
  return (
    <div className="App">
      <main className="main-container">
        {display(garments)}
      </main>
    </div>
  );
}

export default App;

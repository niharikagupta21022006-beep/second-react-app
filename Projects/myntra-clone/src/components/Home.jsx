import heroImage from "../assets/Hero.png";
import category1 from "../assets/1.jpg";
import category2 from "../assets/2.jpg";
import category3 from "../assets/3.jpg";
import category4 from "../assets/4.jpg";
import category5 from "../assets/5.jpg";
import category6 from "../assets/6.jpg";
import category7 from "../assets/7.jpg";
import category8 from "../assets/8.jpg";
import category9 from "../assets/9.jpg";
import category10 from "../assets/10.jpg";
import category11 from "../assets/11.jpg";
import category12 from "../assets/12.jpg";
import category13 from "../assets/13.jpg";
import category14 from "../assets/14.jpg";
import category15 from "../assets/15.jpg";
import category16 from "../assets/16.jpg";


function Home() {
  return (
    <main>
      <img className="hero-image" src={heroImage} alt="Hero Banner"></img>
      <din className="category-heading">MEDAL WORTHY BRANDS TO BAG</din>

      <div className="category-items">
        <img className="sale-item" src={category1} alt="Category Item"></img>

        <img className="sale-item" src={category2} alt="Category Item"></img>

        <img className="sale-item" src={category3} alt="Category Item"></img>

        <img className="sale-item" src={category4} alt="Category Item"></img>

        <img className="sale-item" src={category5} alt="Category Item"></img>

        <img className="sale-item" src={category6} alt="Category Item"></img>

        <img className="sale-item" src={category7} alt="Category Item"></img>

        <img className="sale-item" src={category8} alt="Category Item"></img>
      </div>

      <div className="category-heading">SHOP BY CATEGORY</div>

      <div className="category-items">
        <img className="sale-item" src={category9} alt="Category Item"></img>

        <img className="sale-item" src={category10} alt="Category Item"></img>

        <img className="sale-item" src={category11} alt="Category Item"></img>

        <img className="sale-item" src={category12} alt="Category Item"></img>

        <img className="sale-item" src={category13} alt="Category Item"></img>

        <img className="sale-item" src={category14} alt="Category Item"></img>

        <img className="sale-item" src={category15} alt="Category Item"></img>

        <img className="sale-item" src={category16} alt="Category Item"></img>
      </div>
    </main>
  );
}

export default Home;

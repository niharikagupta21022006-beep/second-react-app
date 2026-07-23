import myntraLogo from "../assets/myntra_logo.webp";
function Header() {
  return (
    <header>
      <a className="logo-container" href="#">
        <img className ="myntra-home" src={myntraLogo} alt="Myntra Logo"></img>
      </a>
      <nav className="nav-bar">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
        <a href="#">KIDS</a>
        <a href="#">HOME</a>
        <a href="#">BEAUTY</a>
        <a href="#">STUDIO</a>
      </nav>
      <div className="search-bar">
        <span className="material-symbols-outlined">search</span>
        <input className="search-input"
        placeholder="Search for producys,brands and more"></input>
      </div>

      <div className="action-bar">
        <div className="action-container">
            <span className="material-symbols-outlined">
                person
            </span>
            <span>Profile</span>
        </div>

        <div className="action-container">
            <span className="material-symbols-outlined">
                favorite
            </span>
            <span>Wishlist</span>
        </div>

        <div className="action-container">
            <span className="material-symbols-outlined">
                shopping_bag
            </span>
            <span>Bag</span>
        </div>
      </div>
    </header>
  );
}
export default Header;

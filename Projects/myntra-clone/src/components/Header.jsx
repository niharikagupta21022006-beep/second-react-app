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
    </header>
  );
}
export default Header;

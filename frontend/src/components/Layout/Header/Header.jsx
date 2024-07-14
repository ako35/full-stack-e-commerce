import { useContext } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";
import SearchBar from "../../Modals/Search/SearchBar";
import logo from '../../../img/logo.png';

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
              200 TL ve Üzeri Alışverişlerinizde Kargo Ücretsiz!
            <a href="shop.html"> ŞİMDİ ALIŞVERİŞ YAP</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
              <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Anasayfa
                      {/*<i className="bi bi-chevron-down"></i>*/}
                    </Link>
                   {/* <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Home Clean</a>
                        </li>
                        <li>
                          <a href="#">Home Collection</a>
                        </li>
                        <li>
                          <a href="#">Home Minimal</a>
                        </li>
                        <li>
                          <a href="#">Home Modern</a>
                        </li>
                        <li>
                          <a href="#">Home Parallax</a>
                        </li>
                        <li>
                          <a href="#">Home Strong</a>
                        </li>
                        <li>
                          <a href="#">Home Style</a>
                        </li>
                        <li>
                          <a href="#">Home Unique</a>
                        </li>
                        <li>
                          <a href="#">Home RTL</a>
                        </li>
                      </ul>
                    </div>*/}
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      Ürünler
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Takı
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Yüzük</a>
                              </li>
                              <li>
                                <a href="#">Kolye</a>
                              </li>
                              <li>
                                <a href="#">Bileklik</a>
                              </li>
                              
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Toka
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Çocuk Tokaları</a>
                              </li>
                              <li>
                                <a href="#">Kadın Tokaları</a>
                              </li>
                              <li>
                                <a href="#">Lastik Tokalar </a>
                              </li>

                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Çanta
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Büyük Çanta</a>
                              </li>
                              <li>
                                <a href="#">Kucuk Çanta</a>
                              </li>
                              <li>
                                <a href="#">Makyaj Çantası</a>
                              </li>
                              <li>
                                <a href="#">Telefon Çantası</a>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/img/mega-menu.jpg" alt="" />
                          </a>
                          <h3 className="megamenu-single-title">
                            FIRSAT  ÜRÜNÜ
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Ağustos ayı boyunca indirimde
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Şimdi alışveriş yap! 
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
            
              <div className="header-right-links">
                <SearchBar />
              {/*<button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>*/}
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
               
                { <a href="#">
                  <i className="bi bi-heart"></i>
                </a> }
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};

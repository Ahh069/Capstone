import React from 'react';
import './index.css'; // Import your CSS file
import LoginForm from './components/LoginForm';


function App() {
  return (

    <div>
      <header className="header">
        <img className="picture1" src="images/pexels-jill-wellington-3776939.jpg" alt="header image" />
        <a href="a" className="logo"><l>"Sweet Treats"</l></a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#product">product</a>
          <form action="#">
            <label htmlFor="contents">Contents:</label>
            <select id="contents">
              <option value="Products">Products</option>
              <option value="classes">Classes</option>
              <option value="fiat">Amazon</option>
              <option value="audi">Contact Us</option>
            </select>
          </form>
        </nav>
      </header>
      
      <br/><br/><br/><br/><br/>
      <div className="Shop">
        <img className="picture2" src="images/pexels-alteredsnaps-14043693.jpg" alt="Shop Baking Supplies" />
        <h2>Shop Baking Supplies</h2>
      </div>
      <br/>
      <div className="Shop-cake">
        <h2>Shop Cake Catalog</h2>
      </div>
      <br/>
      <div className="Classes">
        <h2>Cake University</h2>
        <br/>
        <img className="picture4" src="images/pexels-tirachard-kumtanom-733856.jpg" alt="Cake University" />
        <p>Learn how to decorate. Help grow your business and be a profitable business</p>
      </div>
      <br/>
      <div className="reviews">
        <h2>Customers Reviews </h2>
        <br/>
        <p>Be the first to write a review</p>
        <br/>
        <img className="picture3" src="images/pexels-markus-winkler-18512872.jpg" alt="Customer Reviews" />
        <p>Write a review</p>
      </div>
      <br/>
      <div className="Amazon">
        <h2>Amazon Picks</h2>
        <br/>
        <img className="picture5" src="images/pexels-karolina-grabowska-5632396.jpg" alt="Amazon Picks" />
        <p>Products that can help you on your journey.</p>
        <br/>
      </div>
      <br/>
      <table>
        <tbody>
          <tr className="information">
            <td colSpan="2"><p>Contact Information:</p></td>
          </tr>
          <tr>
            <td><li>Owner: Rani Banks</li></td>
          </tr>
          <tr>
            <td><li>Email: sweettreats@gmail.com</li></td>
          </tr>
          <tr>
            <td colSpan="2"><li>Phone#: 256-556-7489</li></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export default App;
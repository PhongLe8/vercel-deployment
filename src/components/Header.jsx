import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">MovieBooker</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Bookings</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

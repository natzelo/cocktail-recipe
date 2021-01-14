import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="f2">
        <p className="company">
          LIQUOR <span style={{ color: "gray" }}>STORE</span>
        </p>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        <div className="social">
          <button>
            <i class="fab fa-twitter"></i>
          </button>
          <button>
            <i class="fab fa-facebook-f"></i>
          </button>
          <button>
            <i class="fab fa-instagram"></i>
          </button>
        </div>
      </div>

      <div className="f2">
        <p className="f-header">MY ACCOUNTS</p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> My Account
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Register
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Login
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> My Order
        </p>
      </div>

      <div className="f2">
        <p className="f-header">INFORMATION</p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> About Us
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Catalouge
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Contact Us
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Terms and Conditions
        </p>
      </div>

      <div className="f2">
        <p className="f-header">QUICK LINKS</p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> New User
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Help Center
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> Spam
        </p>
        <p className="f-link">
          <i class="fas fa-chevron-right"></i> FAQs
        </p>
      </div>

      <div className="f2">
        <p className="f-header">HAVE A QUESTION?</p>
        <p className="f-link">
          <i class="fas fa-map-marked-alt"></i> 203 Fake St. Mountain View, San
          Francisco, California, USA
        </p>
        <p className="f-link">
          <i class="fas fa-phone-alt"></i> +2 392 3929 210
        </p>
        <p className="f-link">
          <i class="fas fa-paper-plane"></i> info@yourdomain.com
        </p>
      </div>
    </div>
  );
}

export default Footer;

import "./Footer.css";

function Footer() {
    return (
      <div className="Footer">
        <div style={{visibility:"hidden"}} id="footer">a</div>
            <div className="Vrh">
                <label style={{color:"white", fontSize:"2rem", marginLeft:"27.5%"}}>Join the Adventure newsletter to recive our best vacation <label style={{color:"white", position:"absolute", fontSize:"2rem", marginTop:"-1.95%", marginLeft:"66%", zIndex:"1"}}>deals</label></label>
                <br/>
                <label style={{fontSize:"1.5rem", marginLeft:"41%"}}>You can unsubscribe any<label style={{fontSize:"1.5rem", position:"absolute", marginLeft:"53.9%", marginTop:"-1.4%", zIndex:"1"}}> time.</label></label>
                <br/>
                <br/>
                <input type={"text"} className="Email" placeholder="Your Email"></input><button className="Subscribe">Subscribe</button>
                <div className="Dno">
                  <div className="Kontakt">
                    <a href="tel: +385 95 779 8768" style={{textDecoration:"none", color:"white", fontSize:"2rem"}}>Contact Us</a>
                  </div>
                  <div className="Mail">
                    <a href="mailto: luka.kolic05@gmail.com" style={{textDecoration:"none", color:"white", fontSize:"2rem"}}>Message Us</a>
                  </div>
                  <label style={{fontSize:"1.2rem", marginLeft:"45%", position:"absolute", marginTop:"16%"}}>FT &copy; <label style={{fontSize:"1.2rem", marginLeft:"0.3%", position:"absolute"}}>copyright</label></label>
                </div>
            </div>
      </div>
    );
  }
  
  export default Footer;
  
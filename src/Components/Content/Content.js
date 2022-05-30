import "./Content.css";
import Prva from "./prva.webp";
import Druga from "./druga.jpg";
import Treca from "./treca.jpg";
import Cetvrta from "./cetvrta.webp";
import {Link} from "react-router-dom";

function Content() {
  return (
    <div className="Content">
      <center>
        <div id="content" style={{visibility:"hidden"}}>a</div>
        <div className="Podnaslov">
          Check out these AWESOME Destinations!
        </div>
        <div className="Slike">
          <div className="Prva">
          <Link to="/Prvastranica"><div style={{height:"27rem", width:"35%", backgroundColor:"black", position:"absolute", opacity:"0"}}></div></Link>
            <img src={Prva} className="Prva_slika"></img>
            <div className="Ikonica">
              <label style={{fontSize:"1rem", marginLeft:"1220%"}}>Adventure</label>
            </div>
            <div className="Txt">
              <label style={{fontSize:"1.3rem", color:"black",marginLeft:"-14%"}}>Expolore the hidden waterfall deep inside the Amazon <label style={{fontSize:"1.3rem", color:"black", marginLeft:"78%", marginTop:"-3.55%", position:"absolute", zIndex:"-1"}}>Jungle</label></label>
            </div>
          </div>
          <div className="Druga">
          <Link to="/Drugastranica"><div style={{height:"27rem", width:"35%", backgroundColor:"black", position:"absolute", opacity:"0"}}></div></Link>
            <img src={Druga} className="Druga_slika"></img>
            <div className="Ikonica2">
                <label style={{fontSize:"1rem", marginLeft:"1220%"}}>Luxury</label>
            </div>
            <div className="Txt2">
              <label style={{fontSize:"1.3rem", color:"black",marginLeft:"-14.8%"}}>Travel trough the Islands of Bali in Private <label style={{fontSize:"1.3rem", color:"black", marginLeft:"70%", marginTop:"-3.55%", position:"absolute", zIndex:"-1"}}>Crusie</label></label>
            </div>
          </div>
          <div className="Treca">
          <Link to="/Trecastranica"><div style={{height:"27rem", width:"35%", backgroundColor:"black", position:"absolute", opacity:"0", marginTop:"30%"}}></div></Link>
            <img src={Treca} className="Treca_slika"></img>
            <div className="Ikonica3">
                <label style={{fontSize:"1rem", marginLeft:"1220%"}}>Mistery</label>
            </div>
            <div className="Txt3">
              <label style={{fontSize:"1.3rem", color:"black",marginLeft:"-20.5%"}}>Set Sail in the Atlantic ocean visiting <label style={{fontSize:"1.3rem", color:"black", marginLeft:"64%", marginTop:"-3.55%", position:"absolute", zIndex:"-1"}}>Uncharted</label></label>
            </div>
          </div>
          <div className="Cetvrta">
          <Link to="/Cetvrtastranica"><div style={{height:"27rem", width:"35%", backgroundColor:"black", position:"absolute", opacity:"0", marginTop:"30%"}}></div></Link>
            <img src={Cetvrta} className="Cetvrta_slika"></img>
            <div className="Ikonica4">
                <label style={{fontSize:"1rem", marginLeft:"1220%"}}>Adrenaline</label>
            </div>
            <div className="Txt4">
              <label style={{fontSize:"1.3rem", color:"black",marginLeft:"-12.5%"}}>Experience Football on Mountains near the Antartic<label style={{fontSize:"1.3rem", color:"black", marginLeft:"77%", marginTop:"-3.55%", position:"absolute", zIndex:"-1"}}>Ocean</label></label>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Content;

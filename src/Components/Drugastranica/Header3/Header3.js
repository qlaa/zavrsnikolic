import "./Header3.css";
import Slikanaslovna2 from "./slikanaslovna2.jpg";

function Header3() {
  
  return (
    <div className="Header3">
        <div style={{marginTop:"-50%", visibility:"hidden", position:"absolute"}} id="vrh">a</div>
        <img src={Slikanaslovna2} className="Slikanaslovna2"></img>
        <center>
        <p className="Naslov3">Travel trought the Islands of Bali <br/>in Private Crusie</p>
        </center>
    </div>
  );
}

export default Header3;

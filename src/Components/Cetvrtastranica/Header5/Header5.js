import "./Header5.css";
import Slikanaslovna4 from "./slikanaslovna4.jpg";

function Header5() {
  return (
    <div className="Header5">
        <div style={{marginTop:"-50%", visibility:"hidden", position:"absolute"}} id="vrh">a</div>
        <img src={Slikanaslovna4} className="Slikanaslovna4"></img>
        <center>
        <p className="Naslov4">Experience Football on Mountains near<br/>the Antartic Ocean</p>
        </center>
    </div>
  );
}

export default Header5;

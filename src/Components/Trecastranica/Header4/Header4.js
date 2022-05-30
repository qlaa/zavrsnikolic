import "./Header4.css";
import Slikanaslovna3 from "./slikanaslovna3.jpg";

function Header4() {
  return (
    <div className="Header4">
        <div style={{marginTop:"-50%", visibility:"hidden", position:"absolute"}} id="vrh">a</div>
        <img src={Slikanaslovna3} className="Slikanaslovna3"></img>
        <center>
        <p className="Naslov3">Set Sail in the Atlantic ocean <br/>visiting Uncharted</p>
        </center>
    </div>
  );
}

export default Header4;

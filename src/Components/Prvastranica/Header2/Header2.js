import "./Header2.css";
import Slikanaslovna from "./slikanaslovna.jpg";

function Header2() {

  return (
    <div className="Header2">
        <div style={{marginTop:"-50%", visibility:"hidden", position:"absolute"}} id="vrh">a</div>
        <img src={Slikanaslovna} className="Slikanaslovna"></img>
        <center>
        <p className="Naslov2">Explore the hidden waterfall deep inside<br/>the Amazon Jungle</p>
        </center>
    </div>
  );
}

export default Header2;

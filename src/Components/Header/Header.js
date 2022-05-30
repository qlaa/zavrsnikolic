import "./Header.css";
import Slika from "./naslovnaslika.gif";

function Header() {

  const click3 = () =>{
    document.getElementById("forma").style.visibility="hidden";
  }

  const click4 = () =>{
    document.getElementById("forma").style.visibility="visible";
  }

  let ime={
    prvi:"ADVENTURE",
    drugi:"AWAITS"
  }

  let ime2={
    prvi:"What",
    drugi:"are",
    treci:"waiting",
    cetvrti:"for?"
  }

    return (
      <div className="Header">
        <div style={{marginTop:"-50%", visibility:"hidden"}} id="vrh">a</div>
          <img src={Slika} className="Header_slika"></img>
          <center>
            <p className="Naslov">{ime.prvi} {ime.drugi}</p>
            <p className="Upit">{ime2.prvi} {ime2.drugi} {ime2.treci} {ime2.cetvrti}</p>
            <div className="Botuni">
              <button className="Prvi" onClick={click4}>GET STARTED</button>
              <a href="https://www.youtube.com/watch?v=YNjt-aShZTo" target={"_blank"}><button className="Drugi">WATCH TRAILER &#10148;</button></a>
            </div>
            <div id="forma">
              <p style={{color:"white", marginTop:"5%", fontSize:"1.3rem"}}>Sign Up</p>
              <form style={{color:"white"}} id="unutar">
                <input type={"text"} placeholder="Your name" id="ime"></input>
                <input type={"text"} placeholder="Your surname" id="prezime"></input>
                <input type={"email"} placeholder="Your email" id="email"></input>
                <input type={"password"} placeholder="Your password" id="sifra"></input>
                <br/><br/><br/>
                <button id="botun" onClick={click3}>Sign Up</button>
              </form> 
            </div>
          </center>
      </div>
    );
  }
  
  export default Header;
  
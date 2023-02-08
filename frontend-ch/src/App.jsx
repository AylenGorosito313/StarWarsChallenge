import Home from "./Pages/Home/Home";
import style from "./App.module.css";
import 'animate.css';
import Landinga from "./components/Landings/Landinga";
import { useState } from "react";
function App() {
  const [Buttom, setButtom] = useState(false);
  const HandlerButtom = () => {
    setButtom(true);
  };
  return (
    <>
      {Buttom === false ? (
        <> 
          <div className={style.LandingBavkground}>  </div>
          <div className={style.LayoutLanding} id="rotates">
            <Landinga />
           
          
              <button className={style.button} onClick={HandlerButtom}>
              {" "}
              Start{" "}
            </button>
          
          
        
        </div>
        </>
      
      ) : (
        <div className={style.Layout}>
          <Home />
        </div>
      )}
    </>
  );
}

export default App;

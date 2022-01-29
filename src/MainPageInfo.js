import React from "react";
import House from "./Images/House.png";
import { Link } from "react-router-dom";
function MainPageInfo(){
    return(<div>
        <div class="row">
        <div class="col-lg-6">
          <img src={House} alt="House" width="800" height="550"></img>
        </div>
        <div class="col-lg-6 info">
          <h1 class="welcome">Welcome To</h1>
          <h3 class="srm-hub">SRM HUB</h3>
          <p class="disc">Find the best notes and restaurant reviews</p>
          <Link to="/Notes" class="NotesBtn btn">Notes</Link>
          <Link to="/Restraunts" class="RestrauntBtn btn">Restraunt</Link>
        </div>
      </div>
    </div>)
}

export default MainPageInfo;
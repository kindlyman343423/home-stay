import React from "react";
import { setInterval } from "timers";

class FormError extends React.Component {
 check = null;

 state = {
  cardDisplay : "block"
 }
  componentDidMount() {
   this.check = null;
    let card = document.getElementById("removeCard");

    setInterval(() => {
      card.style.display = "none";
    }, 5000);
  }

  componentDidUpdate(oldProps){
   this.check = null;
   let card = document.getElementById("removeCard");
   const newProps = this.props;
   if(newProps.errors !== oldProps.errors) this.check = true;
   card.style.display = "block";
  }

  render() {
   if(this.check){ this.forceUpdate()}
    const {errors} = this.props;
    return (
      <div id="removeCard" className="alert alert-danger bwm-res-errors">
        {<p>{errors}</p>}
      </div>
    );
  }
}

export default FormError;

import React, {Component} from "react";


export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="header"> Step 1: Your details </h1>

        <form className="forms-style">

        <label className={"label-style"} >
          First Name:
          </label>
          <input className="input-style" type="text" name="name" />

        {/* <input type="submit" value="" /> */}
        <label className={"label-style"}>
          Surname:
          
          <input className="input-style" type="text" name="name" />
        </label>


        <br></br>
        <label className={"label-style"}>
          Email Address:
          <input className="input-style" type="text" name="name" />
        </label>

        {/* <input type="submit" value="" /> */}
        <button className={"button-nxt"} type="next"> Next > </button>
      </form>




      </>
    );
  }
}

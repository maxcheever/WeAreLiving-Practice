import { Component } from "react";

class MainPage extends Component {
   render() {
      return(
         <div>
            <Header/>
            <Media/>
         </div>
      );
   }
}

class Header extends Component {
   render() {
      return(
         <div className="row">
            <div className="col">
               <p>THIS IS THE HEADER</p>
            </div>
         </div>
      );
   }
}

class Media extends Component{
   render(){
      return(
         <div className="row">
            <Sidebar/>
            <Middle/>
            <Ads/>
         </div>
      );
   }
}

class Sidebar extends Component {
   render() {
      return(
         <div className="col">
            <p>Sidebar</p>
         </div>
      );
   }
}
class Middle extends Component {
   render() {
      return(
         <div className="col">
            <p>Middle</p>
         </div>
      );
   }
}
class Ads extends Component {
   render() {
      return(
         <div className="col">
            <p>Ads</p>
         </div>
      );
   }
}

export default MainPage;
import React, {} from "react";

//sfc=Stateless Function Component
const Count = (props) => {
    console.log("Navbar- Render");
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="void(0)">
            Count Navbar <span className="badge badge-pill badge-secondary">{props.totolCounters}</span>
          </a>
        </nav>
      );
}
 
export default Count;
// class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar <span className="badge badge-pill badge-secondary">{this.props.totolCounters}</span>
//         </a>
//       </nav>
//     );
//   }
// }
// export default Navbar;

import React, {} from "react";

//sfc=Stateless Function Component
const Navbar = (props) => {
    console.log("Navbar- Render");
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="void(0)">
            Navbar <span className="badge badge-pill badge-secondary">{props.totolCounters}</span>
          </a>
        </nav>
      );
}
 
export default Navbar;
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

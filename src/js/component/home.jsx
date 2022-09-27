import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Footer from "./footer.jsx"
import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cardbox from "./cardbox.jsx"

//include images into your bundle
//create your first component
const Home = () => {
	const [stormCounter, setStormCounter] = useState(0);
		return (
		     <div>
		      <NavBar/>
		      <div className="container-fluid">
		      <Jumbotron />
		      <CardBox />
		    </div>
		      <Footer />
		    </div>
		);
		};

		export default Home;


// 	return (
// 	<nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">{props.navtitle}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">{props.navhome}</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">{props.navfeatures}</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">{props.navpricing}</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// )};

// Home.propTypes = {
// 	navtitle: PropTypes.string,
// 	navhome: PropTypes.string,
// 	navfeatures: PropTypes.string,
// 	navpricing: PropTypes.string,
// };

// ReactDOM.render(
// 	<Home
// 		navtitle="Navbar"
// 		navhome="Home"
// 		navfeatures="features"
// 		navprice="pricing"
// 	/>,


// 	document.querySelector("#myDiv")
// );


























































































// const Home = () => {
// 	return (
// 		<div className="text-center">
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// };



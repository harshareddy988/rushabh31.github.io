import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
		<Fade top duration={1000} distance="20px">
			<div>
				<header className="header">
					<NavLink to="/splash" tag={Link} className="logo">
						<span className="grey-color"> &lt;</span>
						<span className="logo-name">RushabhPatel</span>
						<span className="grey-color">/&gt;</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
          <div class="topBotomBordersOut">
					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold", backgroundColor:'#868e9629' }}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'#868e9629' }}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'#868e9629' }}
							>
								Experience
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'#868e9629' }}
							>
								Projects
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'#868e9629' }}
							>
								Contact Me
							</NavLink>
						</li>
					</ul>
          </div>
				</header>
			</div>
		</Fade>
	);
}
export default Header;
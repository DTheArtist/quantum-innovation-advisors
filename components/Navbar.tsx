// filepath: /Users/dee/WorkingCode/quantum-innovation-advisors/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="text-white text-lg font-bold">
				<Link href="/">Quantum Innovation Advisors</Link>
			</div>
			<ul className="flex space-x-4">
				<li>
					<Link
						href="/projects"
						className="text-white"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/case-studies"
						className="text-white"
					>
						Case Studies
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="text-white"
					>
						About Us
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className="text-white"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

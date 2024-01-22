import React, { useState } from "react";
import scss from "./HomePage.module.scss";
import Menu from "../menu/Menu";

const data = [
	{
		id: 1,
		img: "https://www.svgrepo.com/show/101318/hamburger.svg",
		title: "Hamburger",
		price: 300,
	},
	{
		id: 2,
		img: "https://www.svgrepo.com/show/305828/buymeacoffee.svg",
		title: "Coffee",
		price: 180,
	},
	{
		id: 3,
		img: "https://www.svgrepo.com/show/15156/cola-can.svg",
		title: "Cola",
		price: 80,
	},
	{
		id: 4,
		img: "https://360.agencewebcom.com/web/uploads/api/site-439/ebcd5be18f45a2f01ba2be80c1cbd248a144af5c.png",
		title: "Tea",
		price: 50,
	},
	{
		id: 5,
		img: "https://www.svgrepo.com/show/101318/hamburger.svg",
		title: "Cheese burger",
		price: 250,
	},
	{
		id: 6,
		img: "https://cdn.onlinewebfonts.com/svg/img_482628.png",
		title: "Fries",
		price: 100,
	},
];

const HomePage = () => {
	const [menu, setMenu] = useState([...data]);
	return (
		<div>
			<div className={scss.homePage}>
				<Menu menu={menu} setMenu={setMenu} />
			</div>
		</div>
	);
};

export default HomePage;

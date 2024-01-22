import React, { useState } from "react";
import scss from "./Menu.module.scss";
import Result from "../result/Result";
import TotalPrice from "../totalPrice/TotalPrice";

const Menu = ({ menu }) => {
	const [menuList, setMenuList] = useState([]);
	const [countUs, setCountUs] = useState([]);
	const handleAdd = (id) => {
		const findMenu = menuList.find((item) => item.id === id);
		if (findMenu) {
			const menuData = menu.find((item) => item.id === id);
			const menuDataObj = {
				id: findMenu.id,
				title: findMenu.title,
				price: (findMenu.price += menuData.price),
				count: (findMenu.count += 1),
				img: findMenu.img,
			};
			const menuFilter = menuList.filter((item) => item.id !== id);
			setMenuList([...menuFilter, menuDataObj]);
		} else {
			const menuData = menu.find((item) => item.id === id);
			const menuCount = { ...menuData, count: 1 };
			menuList.push(menuCount);
		}
		setCountUs([findMenu]);
	};
	return (
		<div>
			<div className={scss.menuBox}>
				{menu.map(({ id, title, price, img }) => {
					return (
						<div onClick={() => handleAdd(id)} className={scss.menu} key={id}>
							<img src={img} alt={title} />
							<h2>{title}</h2>
							<h3>{price}</h3>
						</div>
					);
				})}
			</div>
			<Result menu={menu} menuList={menuList} setMenuList={setMenuList} />
			<TotalPrice menuList={menuList} />
		</div>
	);
};

export default Menu;

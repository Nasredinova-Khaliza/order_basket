import React, { useState } from "react";
import scss from "./Result.module.scss";

const Result = ({ menu, menuList, setMenuList }) => {
	const [deleteCount, setDeleteCount] = useState(0);

	const handleDelete = (id, index) => {
		const deletedItem = menuList[index];

		if (deletedItem.count > 1) {
			const menuData = menu.find((item) => item.id === id);
			deletedItem.count -= 1;
			deletedItem.price -= menuData.price;

			const upDateOrder = menuList.map((item) =>
				item.id === id ? { ...item, ...deletedItem } : item
			);
			setDeleteCount(deleteCount + 1);
			setMenuList(upDateOrder);
		} else {
			const upDateOrder = menuList.filter((item) => item.id !== id);
			setMenuList(upDateOrder);
		}
	};

	return (
		<div className={scss.order_container}>
			{menuList.map(({ title, count, price, id }, index) => (
				<div key={index} className={scss.order_box}>
					<h1>{title}</h1>
					<h2>price: {price}</h2>
					<h2>count: {count}</h2>
					<button className={scss.button} onClick={() => handleDelete(id, index)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default Result;

import React, { useEffect, useState } from "react";
import scss from "./TotalPrice.module.scss";

const TotalPrice = ({ menuList }) => {
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const renderTotalOrder = () => {
		let totalQuantitySet = 0;
		let totalPriceSet = 0;

		menuList.forEach((item) => {
			totalQuantitySet += item.count;
			totalPriceSet += item.price * item.count;
		});

		setTotalQuantity(totalQuantitySet);
		setTotalPrice(totalPriceSet); 
	};

	useEffect(() => {
		renderTotalOrder();
	}, [menuList]);

	return (
		<div className={scss.totalPrice}>
			<h1>У вас {totalQuantity} товаров в корзине.</h1>
			<h2>Сумма: ${totalPrice}</h2>
			{menuList.length === 0 && <h3>Список заказов пуст</h3>}
		</div>
	);
};

export default TotalPrice;

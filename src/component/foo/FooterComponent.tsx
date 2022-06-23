import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Store from "./Store";

interface Props {}

const FooterComponent = observer(() => {
	const { a, b } = Store.instance;

	useEffect(() => {
		console.log("render Footer");
	}, [a, b]);

	console.log("render Footer");

	return (
		<>
			<div>Footer</div>
		</>
	);
});

export default FooterComponent;

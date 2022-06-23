import { observer } from "mobx-react";
import React from "react";
import ContentComponent from "./ContentComponent";
import Store from "./Store";

const HeaderComponent = observer(() => {
	const { a, b, setA, setB } = Store.instance;

	const onClickButton = () => {
		setA(a + "a");
		setB(b + "b");
	};

	console.log("render Header");

	return (
		<>
			<div>
				<button type="button" onClick={onClickButton}>
					useEffect test
				</button>
				<br />
				Header
				<br />
				<ContentComponent />
			</div>
		</>
	);
});

export default HeaderComponent;

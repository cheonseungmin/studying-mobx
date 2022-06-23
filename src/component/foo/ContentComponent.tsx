import { observer } from "mobx-react";
import React, { useContext } from "react";
import FooterComponent from "./FooterComponent";
import Store from "./Store";

interface Props {}

const ContentComponent = observer(() => {
	const { a, b } = Store.instance;

	console.log("render Content");
	return (
		<>
			Content
			<br />
			<FooterComponent />
		</>
	);
});

export default ContentComponent;

import { observer } from "mobx-react";
import React, { useEffect } from "react";
import Store from "./Store";

interface Props {}

const FooterComponent: React.FC<Props> = observer(({}) => {
	const { a, b } = Store.instance;

	useEffect(() => {
		console.log("a: ", a);
		console.log("b: ", b);
	}, [a, b]);

	return <>footer</>;
});

export default FooterComponent;

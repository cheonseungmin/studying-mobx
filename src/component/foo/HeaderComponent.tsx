import { observer } from "mobx-react";
import React from "react";
import Store from "./Store";

interface Props {}

const HeaderComponent: React.FC<Props> = observer(({}) => {
	const { a, b, setA, setB } = Store.instance;

	const onClickButton = () => {
		setA(a + "a");
		setB(b + "b");
	};

	return (
		<>
			<div>
				<button type="button" onClick={onClickButton}>
					useEffect test
				</button>
			</div>
		</>
	);
});

export default HeaderComponent;

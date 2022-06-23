import React, { useContext } from "react";

interface Props {}

const ContentComponent: React.FC<Props> = ({}) => {
	console.log("ContentComponent render");

	return <>Content</>;
};

export default ContentComponent;

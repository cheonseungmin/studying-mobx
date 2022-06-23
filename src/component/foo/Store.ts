import { makeAutoObservable } from "mobx";

class Store {
	static instance: Store;
	a: string = "a";
	b: string = "b";

	constructor() {
		makeAutoObservable(this);
	}

	setA = (value: string): void => {
		this.a = value;
	};

	setB = (value: string): void => {
		this.b = value;
	};
}

Store.instance = new Store();

export default Store;

import React from "react";
import styles from "./App.module.scss";
import Text from "./components/Text";
import Topbar from "./components/Topbar";

function App() {
	return (
		<div className={styles.app}>
			<Topbar />
			<Text>Find covers of your favorite songs!</Text>
		</div>
	);
}

export default App;
	
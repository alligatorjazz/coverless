import React from "react";
import styles from "./App.module.scss";
import CoverView from "./components/CoverView";
import Topbar from "./components/Topbar";

function App() {
	return (
		<div className={styles.app}>
			<Topbar/>
			<CoverView />
		</div>
	);
}

export default App;
	
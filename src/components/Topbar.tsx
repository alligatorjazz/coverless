import React from "react";
import { Header } from "./Text";
import styles from "./Topbar.module.scss";

export default function Topbar() {
	return (
		<div className={styles.topbar}>
			<Header size={1}>coverless.io</Header>
		</div>
	);
}	
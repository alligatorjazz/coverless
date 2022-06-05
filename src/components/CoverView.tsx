import React from "react";
import SearchBar from "./SearchBar";
import Text from "./Text";
import styles from "./CoverView.module.scss";

export default function CoverView() {
	return (
		<div className={styles.coverview}>
			<Text>Find out which of your favorite songs are in need of a cover.</Text>
			<SearchBar/>
		</div>
	);
}
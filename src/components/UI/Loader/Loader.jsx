import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
	return (
		<div className={styles.loader}>
			<span>LOADING</span>
		</div>
	);
}

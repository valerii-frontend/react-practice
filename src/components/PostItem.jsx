import React from "react";
import styles from "./PostItem.module.css";

export default function PostItem({ post, number }) {
	return (
		<div className={styles.post}>
			<div className={styles.post__content}>
				<h3>
					{number}. {post.title}
				</h3>
				<p>{post.body}</p>
				<div className={styles.post__btns}>
					<button>Delete</button>
				</div>
			</div>
		</div>
	);
}

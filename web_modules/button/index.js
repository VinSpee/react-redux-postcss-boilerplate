import styles from './index.css';
export default React => ({
	label,
	icon,
}) => (
	<button className={styles.dark}>
		<div>{icon}</div>
		<div>{label}</div>
	</button>
);

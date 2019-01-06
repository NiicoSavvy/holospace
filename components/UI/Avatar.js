import { StyleSheet, css } from "aphrodite/no-important";

if (typeof window !== "undefined") {
	StyleSheet.rehydrate(window.__NEXT_DATA__.ids);
}
const Avatar = props => (
	<span
		className={css(
			styles.avatar,
			props.src && styles.image,
			props.size && styles.lg
		)}
		style={props.style}
	>
		{props.src ? (
			<img src={props.src} alt={props.alt} />
		) : (
			<span className={css(props.text)}>{props.children}</span>
		)}
	</span>
);

const styles = StyleSheet.create({
	avatar: {
		display: "inline-block",
		width: "2em",
		height: "2em",
		lineHeight: "2em",
		textAlign: "center",
		background: "#ccc",
		color: "#fff",
		borderRadius: "50%",
		overflow: "hidden"
	},
	square: {
		borderRadius: "2px"
	},
	image: {
		background: "transparent",
		"> img": {
			display: "block",
			width: "100%",
			height: "100%",
			borderStyle: "none"
		}
	},
	text: {
		fontSize: "1vw"
	},
	lg: {
		width: "2.5em",
		height: "2.5em",
		lineHeight: "2.5em"
	}
});

export default Avatar;

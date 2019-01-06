import classNames from "classnames";

const Banner = props => (
	<div
		className={classNames("banner", props.info && "info", props.className)}
	>
		{props.children}
		<style jsx>{`
			.banner {
				height: 64px;
				max-height: 64px;
				color: #fff;
				line-height: 64px;
				padding: 0 1em;
			}

			.success {
				background-color: green;
			}

			.info {
				background-color: blue;
			}

			.warning {
				background-color: yellow;
			}
		`}</style>
	</div>
);

export default Banner;

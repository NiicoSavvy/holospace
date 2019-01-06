import classNames from "classnames";

const PartitionBody = props => (
	<div
		className={classNames(
			"partition__body",
			props.horizontal && "horizontal",
			props.className
		)}
	>
		{props.children}

		<style jsx>{`
			.partition__body {
				display: flex;
				flex-direction: column;
				flex: 1;
				color: #fff;
			}

			.horizontal {
				flex-direction: row;
			}

			.p2b {
				background-color: #303030;
				background-color: rgba(48, 48, 48, 0.8) !important;
			}

			.p3b {
				background-color: #424242;
				background-color: rgba(66, 66, 66, 0.8) !important;
			}
			.p4b {
				background-color: #212121;
				background-color: rgba(33, 33, 33, 0.8) !important;
			}
		`}</style>
	</div>
);

export default PartitionBody;

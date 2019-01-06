import classNames from "classnames";

const PartitionHeader = props => (
	<div className={classNames("partition__header", props.className)}>
		{props.children}
		<style jsx>{`
			.partition__header {
				height: 64px;
				max-height: 64px;
				color: #fff;
				line-height: 64px;
			}

			.p2h {
				background-color: #303030;
			}

			.p3h {
				background-color: #424242;
			}

			.p4h {
				background-color: #212121;
				background-color: rgba(33, 33, 33, 0.8) !important;
			}
		`}</style>
	</div>
);

export default PartitionHeader;

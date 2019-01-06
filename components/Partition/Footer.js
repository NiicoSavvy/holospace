import classNames from "classnames";

const PartitionFooter = props => (
	<div className={classNames("partition__footer", props.className)}>
		{props.children}
		<style jsx>{`
			.partition__footer {
				height: 64px;
				max-height: 64px;
				color: #fff;
				line-height: 64px;
			}

			.p4f {
				background-color: #212121;
			}
		`}</style>
	</div>
);

export default PartitionFooter;

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import classNames from "classnames";

const Partition = props => (
	<div
		className={classNames(
			"partition",
			props.fixed && "fixed",
			props.horizontal && "horizontal",
			props.stretch && "stretch",
			props.collapsed && "collapsed",
			props.className
		)}
	>
		{props.children}

		<style jsx>{`
			.partition {
				height: 100%;
				width: 240px;
				display: flex;
				flex-direction: column;
			}

			.col {
				height: 100vh;
			}

			.fixed {
				width: 80px;
			}

			.horizontal {
				display: flex;
				flex-direction: row;
			}

			.stretch {
				flex: 1;
			}

			.collapsed {
				width: 0;
			}

			.p1 {
				background-color: #111;
				background-color: rgba(17, 17, 17, 0.8) !important;
			}
		`}</style>
	</div>
);

Partition.Header = Header;
Partition.Body = Body;
Partition.Footer = Footer;

export default Partition;

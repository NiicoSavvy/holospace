import classNames from "classnames";
import User from "../User";

const CurrentDisk = ({ disk }) => (
	<div className={classNames("holodisk__current")}>
		<span>
			<button style={{ marginRight: "1em" }}>X</button>
			{disk.name}
			{disk.topic && <span className="topic">{disk.topic}</span>}
		</span>
		<span className="actions">
			<button>S</button>
			<button>N</button>
			<button>C</button>
		</span>

		<style jsx>{`
			.holodisk__current {
				padding: 0 4em;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.topic {
				border-left: 1px solid #999;
				color: #999;
				padding-left: 7px;
				margin-left: 7px;
			}
		`}</style>
	</div>
);

export default CurrentDisk;

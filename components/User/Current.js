import classNames from "classnames";
import Avatar from "../UI/Avatar";
import User from "../User";
import { getColorHash } from "../../utils/colors";

const CurrentUser = ({ user }) => (
	<div className={classNames("user__current")}>
		<User user={user} />
		<span className="actions">
			<button>^</button>
			<button>*</button>
		</span>

		<style jsx>{`
			.user__current {
				padding: 0 1em;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		`}</style>
	</div>
);

export default CurrentUser;

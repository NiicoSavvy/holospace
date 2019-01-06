import Avatar from "../UI/Avatar";
import { getColorHash } from "../../utils/colors";

const User = ({ user }) => (
	<div style={{ display: "flex", alignItems: "center" }}>
		{user.avatar ? (
			<Avatar src={user.avatar} />
		) : (
			<Avatar
				style={{
					background: getColorHash(user.username)
				}}
			>
				{user.username.charAt(0)}
			</Avatar>
		)}
		<span style={{ margin: "0 0.5em" }}>{user.username}</span>
	</div>
);

export default User;

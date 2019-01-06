import User from "../User";

const UserList = ({ users }) => (
	<ul>
		{users.map(user => (
			<li key={user.id}>
				<User user={user} />
			</li>
		))}

		<style jsx>{`
			li {
				margin: 0.5em 1em;
				background-color: transparent;
				transition: all 0.5s ease-out;
			}
			li:hover {
				background: black; /* For browsers that do not support gradients */
				background: linear-gradient(
					to right,
					rgba(0, 0, 0, 1),
					rgba(0, 0, 0, 0)
				);
			}
		`}</style>
	</ul>
);

export default UserList;

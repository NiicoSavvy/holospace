import Link from "next/link";

const Login = () => (
	<div>
		<h1>Login</h1>
		<Link href="/register">
			<a>Register</a>
		</Link>
	</div>
);

export default Login;

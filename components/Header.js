import Link from "next/link";

const linkStyle = {
	marginRight: 15
};

const Header = () => (
	<header>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/login">
			<a style={linkStyle}>Login</a>
		</Link>

		<style jsx>{`
			header {
				display: block;
				border: 1px solid green;
				padding: 2em;
			}
		`}</style>
	</header>
);

export default Header;

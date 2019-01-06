const Layout = props => (
	<div>
		{props.children}
		<style global jsx>{`
			html,
			body {
				margin: 0;
				padding: 0;
				height: 100vh;
			}
			ul {
				padding: 0;
			}

			li {
				list-style: none;
				margin: 5px 0;
			}
		`}</style>
		<style jsx>{`
			div {
				display: flex;
				flex-direction: row;
			}

			.vertical {
				flex-direction: column;
			}
		`}</style>
	</div>
);

export default Layout;

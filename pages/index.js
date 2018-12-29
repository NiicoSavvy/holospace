import Header from "../components/Header";
import Layout from "../components/Layout";
import Link from "next/link";

const HoloLink = props => (
	<li>
		<Link
			as={`/holograms/${props.id}`}
			href={`/hologram?title=${props.title}`}
		>
			<a>{props.title}</a>
		</Link>
	</li>
);

const Index = () => (
	<Layout>
		<Header />
		<h1>Holograms</h1>
		<ul>
			<HoloLink id="f35v6e" title="Cmd Center" />
			<HoloLink id="rw5etg" title="Captains Corner" />
			<HoloLink id="bdj87d" title="HoloDeck9" />
		</ul>
	</Layout>
);

export default Index;

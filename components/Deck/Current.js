import classNames from "classnames";

const CurrentDeck = ({ deck }) => (
	<div className={classNames("deck__current")}>
		<span>{deck.name}</span>
		<span className="actions">
			<button>v</button>
		</span>

		<style jsx>{`
			.deck__current {
				padding: 0 1em;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		`}</style>
	</div>
);

export default CurrentDeck;

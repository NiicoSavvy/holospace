import Avatar from "../UI/Avatar";
import Link from "next/link";
import { getColorHash } from "../../utils/colors";

const DeckList = ({ decks }) => (
	<ul style={{ textAlign: "center" }}>
		{decks.map(deck => (
			<li key={deck.id}>
				<Link
					as={`/disks/${deck.id}/${deck.diskId}`}
					href={`/public?deckId=${deck.id}&diskId=${deck.diskId}`}
				>
					<a>
						{deck.icon ? (
							<Avatar src={deck.icon} size={"lg"} />
						) : (
							<Avatar
								style={{
									background: getColorHash(deck.name)
								}}
								size={"lg"}
							>
								{deck.name.charAt(0)}
							</Avatar>
						)}
					</a>
				</Link>
			</li>
		))}
	</ul>
);

export default DeckList;

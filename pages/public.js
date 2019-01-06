import Layout from "../components/Layout.js";
import Partition from "../components/Partition";

import Decks from "../components/Deck/List";
import Users from "../components/User/List";
import Disks from "../components/Disk/List";
import CurrentUser from "../components/User/Current";
import CurrentDeck from "../components/Deck/Current";
import CurrentDisk from "../components/Disk/Current";
import Banner from "../components/UI/Banner";

import { getAllDecks, getDeckById } from "../api/decks";
import { getDeckMembers } from "../api/memberships";
import { getDiskById, getDeckDisks } from "../api/disks";
import { getUser } from "../api/users";

const PublicChatPage = props => (
	<Layout>
		<Partition width={"80px"} fixed className="col p1">
			<Decks decks={getAllDecks()} />
		</Partition>

		<Partition stretch className="col">
			{false && <Banner info>Info Banner</Banner>}

			<Partition.Body horizontal>
				<Partition minWidth={0}>
					<Partition.Header className="p2h">
						<CurrentDeck deck={getDeckById(props.deckId)} />
					</Partition.Header>
					<Partition.Body className="p2b">
						<Disks disks={getDeckDisks(props.deckId)} />
					</Partition.Body>
				</Partition>

				<Partition stretch>
					<Partition.Header className="p3h">
						<CurrentDisk disk={getDiskById(props.diskId)} />
					</Partition.Header>
					<Partition.Body className="p3b">messages...</Partition.Body>
				</Partition>

				<Partition>
					<Partition.Header className="p4h">
						<span style={{ margin: "0 1em" }}>
							<button style={{ marginRight: "1em" }}>X</button>{" "}
							Members
						</span>
					</Partition.Header>
					<Partition.Body className="p4b">
						<Users users={getDeckMembers(props.deckId)} />
					</Partition.Body>
					<Partition.Footer className="p4f">
						<CurrentUser user={getUser()} />
					</Partition.Footer>
				</Partition>
			</Partition.Body>
		</Partition>
	</Layout>
);

PublicChatPage.getInitialProps = function(context) {
	const { deckId, diskId } = context.query;
	return { deckId, diskId };
};

export default PublicChatPage;

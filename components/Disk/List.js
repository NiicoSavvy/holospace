import Link from "next/link";

const DiskList = ({ disks }) => (
	<ul>
		{disks.map(disk => (
			<li key={disk.id}>
				<Link
					as={`/disks/${disk.deckId}/${disk.id}`}
					href={`/public?deckId=${disk.deckId}&diskId=${disk.id}`}
				>
					<a>{disk.name}</a>
				</Link>
			</li>
		))}
	</ul>
);

export default DiskList;

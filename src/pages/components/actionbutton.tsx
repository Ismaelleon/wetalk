import Link from 'next/link';
import { MdPostAdd } from 'react-icons/md';

export default function ActionButton () {
	return (
		<Link href="/new-post" className="fixed right-4 bottom-24 flex flex-row items-center font-bold bg-black p-4 text-white rounded-full">
			<MdPostAdd size={32} />
		</Link>
	);
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineHome, MdHomeFilled, MdOutlinePerson, MdPerson } from 'react-icons/md';

export default function Navigation () {
	const router = useRouter();

	return (
		<nav className="p-4 fixed bottom-0 left-0 flex flex-row justify-around w-full border-t border-neutral-400 bg-white">
			<Link href="/">
				{ router.pathname === '/' ? <MdHomeFilled size={32} /> : <MdOutlineHome size={32} /> }
			</Link>
			<Link href="/profile">
				{ router.pathname === '/profile' ? <MdPerson size={32} /> : <MdOutlinePerson size={32} /> }
			</Link>
		</nav>
	);
}

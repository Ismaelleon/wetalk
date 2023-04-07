import { useSession } from 'next-auth/react';
import Image from 'next/image';
import HTMLHead from './components/htmlhead';
import Header from './components/header';
import ActionButton from './components/actionbutton';
import Navigation from './components/navigation';

export default function Profile () {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return (
			<>
				<HTMLHead />
				<Header />
				<main className="flex flex-col pt-16">
					<section className="flex flex-col items-center p-4">
						<img src={session.user?.image} width={128} height={128} alt="User" className="rounded-full" />
						<h2 className="text-xl my-2 font-semibold">{session.user?.name}</h2>
					</section>
				</main>
				<ActionButton />
				<Navigation />
			</>
		);
	}

	return (
		<>
			
		</>
	);
}

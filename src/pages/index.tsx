import Link from 'next/link';
import { getSession, useSession, signIn } from 'next-auth/react';
import HTMLHead from './components/htmlhead';
import Header from './components/header';
import Navigation from './components/navigation';

export default function Home () {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return (
			<>
				<HTMLHead />
				<main className="flex flex-col">
					<Header />
				</main>
				<Navigation />
			</>
		);
	}

	return (
		<>
			<HTMLHead />
			<main className="flex flex-col h-screen">
				<Header />
				<section className="flex flex-col w-full h-full justify-center items-center p-4">
					<h2 className="text-4xl font-serif font-semibold">Join WeTalk</h2>
					<p className="text-lg">and connect with your friends!</p>
					<section className="pt-5 flex flex-col w-full">
						<button className="flex flex-row p-2 border border-neutral-400 rounded my-1" onClick={() => signIn('google')}>
							Sign Up with Google
						</button>
					</section>
				</section>
			</main>
		</>
	);
}

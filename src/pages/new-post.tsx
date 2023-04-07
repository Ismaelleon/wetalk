import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ActionButton from './components/actionbutton';
import Header from './components/header';
import HTMLHead from './components/htmlhead';
import Navigation from './components/navigation';

export default function NewPost () {
	const router = useRouter();

	return (
		<>
			<HTMLHead />
			<Header/>
			<main className="flex flex-col pt-16">
				<section className="p-4">
					<textarea className="w-full p-2" rows={10} placeholder="Your post here..."></textarea>
					<button className="w-full p-2 bg-black text-white rounded my-1">Publish post</button>
					<button className="w-full p-2 bg-red-500 text-white rounded my-1" onClick={() => router.back()}>Cancel</button>
				</section>
			</main>
			<Navigation />
		</>
	);
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context);
	
	if (!session) {
		return {
			redirect: {
				destination: '/',
			}
		};
	}

	return {
		props: { session },
	};
}

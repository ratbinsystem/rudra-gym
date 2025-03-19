import CommingSoon from "../components/commingSoon";
import footerImage from '/images/footer.jpg';

function Home() {
	const src = [
		{
			srcSet: footerImage,
			media: '(min-width: 1024px)'
		},
		{
			srcSet: footerImage,
			media: '(min-width: 768px)'
		},
		{
			srcSet: footerImage,
			media: '(min-width: 320px)'
		}
	]
	return (
		<div>
			<CommingSoon src={src} height='100vh' />
		</div>
	);
}

export default Home;
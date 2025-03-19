import CopyRight from '../CopyRight';
import PictureGradiant from '../picture-gradiant';
import './style.css';
import footerImage from '/images/footer.jpg';
export default function Footer() {
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
		<footer className='footer'>
			<PictureGradiant src={src} height='20rem' imageGradiantColor='--color-primary'/>
			<div className=' footer__content bg-primary'>
				<div className='container p-3'>
					<h2 className='footer__title'>About Us</h2>
					<p className='footer__text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						ultricies, nunc in tincidunt aliquam, mi ex ultricies est, nec
						fermentum arcu justo eu dui.
					</p>
				</div>
				<CopyRight />
			</div>
		</footer>
	);
}
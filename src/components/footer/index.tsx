import CopyRight from '../CopyRight';
import Hero from '../hero';
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
			<Hero src={src} height='20rem' imageGradiantColor='--color-primary' />
			<div className=' footer__content bg-primary'>
				<div className='container p-3'>
					<div className="row">
						<div className="col-md-6 col-12">
							<h3 className='text-white'>About Us</h3>
							<p className='text-white'>Lorem ipsum dolor sit amet,.</p>
						</div>
						<div className="col-md-6 col-12">
							<h3 className='text-white'>Contact Us</h3>
							<p className='text-white'>123, Main Road, Your City, NY 11111</p>
							<p className='text-white'>
								<a href="tel:+1234567890" className='text-white'>+123-456-7890</a>
							</p>
						</div>

					</div>
				</div>
				<CopyRight />
			</div>
		</footer>
	);
}
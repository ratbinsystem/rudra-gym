import PictureGradiant from "../picture-gradiant";
import './style.css';

interface Props {
    height?: React.CSSProperties['height'];
    src: { srcSet: string, media: string }[];
    imageGradiantColor?: string;

}
export default function CommingSoon({ src, height, imageGradiantColor }: Props) {

    return (
        <>
        <div className="hero">
            <PictureGradiant src={src} height={height} imageGradiantColor={imageGradiantColor} />
            <div className="content">
                <div className="fs-1">
                    <h4 className="text-danger">Rudra</h4>
                    <h1 className="text-white">GYM</h1>
                </div>
                <h1>
                    <span className="text-white">Comming </span>
                    <span className="text-danger">soon!</span>
                </h1>
                <h2 className="text-white">01-May-2025</h2>
            </div>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmrhp46T3JrJaOKEGn95zRcbV9yuiV6hpd1LAPHDz3ENAzrA/viewform?embedded=true" width="100%" height="1100px">Loading…</iframe>

        </>
    );
}

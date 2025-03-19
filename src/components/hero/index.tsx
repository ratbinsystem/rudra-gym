import PictureGradiant from "../picture-gradiant";
import './style.css';

interface Props {
    height?: React.CSSProperties['height'];
    src: { srcSet: string, media: string }[];
    imageGradiantColor?: string;

}
export default function Hero({ src, height, imageGradiantColor }: Props) {

    return (
        <div className="hero">
            <PictureGradiant src={src} height={height} imageGradiantColor={imageGradiantColor} />
            <div className="content">
                <h1 className="text-white fs-1">Comming Soon!</h1>
                <h2 className="text-white">01-May-2025</h2>
            </div>
        </div>
    );
}
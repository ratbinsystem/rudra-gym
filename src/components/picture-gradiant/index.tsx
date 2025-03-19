import footerImage from '/images/footer.jpg';

interface Props {
    height?: React.CSSProperties['height'];
    src: { srcSet: string, media: string }[];
    imageGradiantColor?: string;
}

export default function PictureGradiant({ height = '20rem', src, imageGradiantColor = '--color-primary' }: Props) {
    return (
        <div className='g-image' style={{ "--image-height": height, "--image-gradiant-color": `var(${imageGradiantColor})` } as React.CSSProperties}>
            <picture className='gradiant__container'>
                {src.map((src, index) => (
                    <source key={index} srcSet={src.srcSet} media={src.media} />
                ))}
                <img src={footerImage} alt='footer' className='gradiant__image' />
            </picture>
        </div>
    )
}

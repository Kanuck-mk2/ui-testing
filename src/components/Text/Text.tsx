import TextSpan from "./TextSpan";

interface TextProps {
    content: string;
}

const Text: React.FC<TextProps> = ({ content }) => {
    const text: string[] = content.split('');

    return (
        <div className="flex flex-row justify-center m-10">
            {text.map((letter, index) => (
                <TextSpan key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </TextSpan>
            ))}
        </div>
    );
}

export default Text;

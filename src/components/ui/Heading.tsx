import React from "react";

interface HeadingProps {
    text: string;
    description?: string | undefined;
}

const Heading: React.FC<HeadingProps> = ({ text, description }) => {
    return (
        <div className="heading">
            <h6 className="heading__badge">{text}</h6>
            {description && <h2 className="heading__title">{description}</h2>}
        </div>
    );
};

export default Heading;

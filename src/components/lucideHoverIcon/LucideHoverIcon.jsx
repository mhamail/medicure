import { useState } from 'react';

const LucideHoverIcon = ({ Icon, color, hcolor,stroke, size, className }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="hover:text-green-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon color={!isHovered ? color : hcolor}
                size={size}
                strokeWidth={stroke}
                className={className} />
        </div>
    );
};

export default LucideHoverIcon;

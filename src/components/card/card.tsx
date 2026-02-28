import React from "react";
import "./card.scss";

interface CardProps {
    children: React.ReactNode;
    bordered?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, bordered = false, className = '' }) => (
    <div className={`appcard ${bordered ? 'bordered' : ''} ${className}`.trim()}>
        {children}
    </div>
);

export default Card;

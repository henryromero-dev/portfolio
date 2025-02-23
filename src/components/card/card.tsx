import React from "react";
import "./card.scss";

interface CardProps {
    children: React.ReactNode;
    bordered?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, bordered = false, className }) => (
    <div className={`d-flex w-100 flex-column appcard p-3 p-lg-4 ${bordered ? 'bordered' : ''} ${className}`}>
        {children}
    </div>
);

export default Card;
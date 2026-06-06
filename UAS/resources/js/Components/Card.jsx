// components/ui/card.jsx

function Card({ className = "", ...props }) {
    return (
        <div
            className={`bg-white rounded-lg shadow-sm ${className}`}
            {...props}
        />
    );
}

function CardHeader({ className = "", ...props }) {
    return (
        <div
            className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 md:p-6 ${className}`}
            {...props}
        />
    );
}

function CardTitle({ className = "", ...props }) {
    return (
        <h2
            className={`text-xl md:text-3xl font-bold text-gray-800 flex-1 ${className}`}
            {...props}
        />
    );
}

function CardActions({ className = "", ...props }) {
    return (
        <div
            className={`flex flex-col sm:flex-row gap-2 sm:ml-auto ${className}`}
            {...props}
        />
    );
}

function CardContent({ className = "", ...props }) {
    return (
        <div
            className={`p-4 md:p-6 pt-0 ${className}`}
            {...props}
        />
    );
}

function CardFooter({ className = "", ...props }) {
    return (
        <div
            className={`flex items-center p-4 md:p-6 pt-0 ${className}`}
            {...props}
        />
    );
}

export { Card, CardHeader, CardTitle, CardActions, CardContent, CardFooter };
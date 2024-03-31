import { GoAlert } from "react-icons/go";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex
        items-center gap-x-2 text-sm text-destructive bg-red-100">
            <GoAlert className="h-4 w-4 text-red-600"/>
            <p className="text-red-600">{message}</p>
        </div>
    )
}

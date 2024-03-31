import { GoCheckCircle } from "react-icons/go";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex
        items-center gap-x-2 text-sm text-destructive bg-green-100">
            <GoCheckCircle className="h-4 w-4 text-green-600"/>
            <p className="text-green-600">{message}</p>
        </div>
    )
}

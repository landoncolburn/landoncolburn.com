import { ReactNode } from "react";

enum Variant {
    primary = "bg-green-500 rounded-md px-6 py-2",
    secondary = "border-green-500 border-2 rounded-md px-6 py-2",
}

type VariantString = keyof typeof Variant;

type IButtonProps = {
    id?: string;
    variant?: VariantString;
    action?: VoidFunction;
    children?: ReactNode;
};

const Button: React.FC<IButtonProps> = ({ variant, action, children }) => {
    return (
        <button
            className={"block" + " " + (variant && Variant[variant])}
            onClick={action}
        >
            {children ?? "Default"}
        </button>
    );
};

export default Button;

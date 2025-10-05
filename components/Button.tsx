import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    type?: "top" | "right" | "number";
    icon?: React.ReactElement;
};

export default function Button({ title, icon, type, ...rest}: ButtonProps) {
    const bgColor = 
        type === "right" && title === "=" ? "bg-yellow-500" : "bg-light";

    const textColor = 
        type === "right" && title === "=" ? "text-white" : 
        type === "top" || type === "right" ? "text-yellow-500" : "text-black";

    return (
        <TouchableOpacity
        {...rest}
        className={`h-24 w-24 rounded-full p-2 items-center justify-center border-2 border-black ${bgColor}`}
        >
        {icon
            ? React.cloneElement(icon, {
                color:
                type === "right" && title === "="
                    ? "white"
                    : type === "top" || type === "right"
                    ? "#EAB308"
                    : "black",
            })
            : <Text className={`text-4xl font-semibold ${textColor}`}>{title}</Text>}
        </TouchableOpacity>
    );
}
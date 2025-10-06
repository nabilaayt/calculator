import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    type?: "top" | "right" | "number";
    icon?: React.ReactElement;
    onPress?: Function
};

export default function Button({ title, icon, type, onPress, ...rest}: ButtonProps) {
    const bgColor =
        title === "AC"
        ? "bg-red"
        : type === "right" && title === "="
        ? "bg-yellow"
        : "bg-light";

    const textColor = "text-black";
    const iconColor = "black";

    return (
        <TouchableOpacity
        {...rest}
        className={`h-24 w-24 rounded-full p-2 items-center justify-center border-2 border-black ${bgColor}`}
        onPress={onPress}
        >
        {icon
            ? React.cloneElement(icon, { color: iconColor })
            : <Text className={`text-4xl font-semibold ${textColor}`}>{title}</Text>}
        </TouchableOpacity>
    );
}
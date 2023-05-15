import React from "react";
import {KeysToComponentMap} from "./KeysToComponentMap";

export function RenderCard(config) {
    if (typeof KeysToComponentMap[config.component] !== "undefined") {
        return React.createElement(
            KeysToComponentMap[config.component],
            {
                src: config.src,
                herf: config.herf,
                title: config.title,
                open: config.isOpen,
            },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map(c => RenderCard(c)))
        );
    } else{
        console.log(config.component);
    }
}

// @flow
import React from "react";
import "./index.less";

type TProp = {
    children: any,
    url: string,
};

export const CustomLink = ({ children, url }: TProp): React$Node => {
    return (
        <a className="link" href={url}>
            {children}
        </a>
    );
};

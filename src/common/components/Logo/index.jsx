// @flow
import cn from "classnames";
import { CustomLink } from "common/components/Link";
import React from "react";
import "./index.less";

type TProps = {
    className?: string,
};

export const Logo = ({ className }: TProps): React$Node => {
    return (
        <CustomLink className={cn("logo", className)} url="/">
            <img className="logo__img" src="/images/logo.jpg" alt="Logo" />
        </CustomLink>
    );
};

// @flow
import { Button } from "common/components/Button";
import { CustomLink } from "common/components/Link";
import React from "react";
import { FormattedMessage } from "react-intl";

export const ShopNowButton = (props: any): React$Node => {
    return (
        <CustomLink url="/shop">
            <Button {...props}>
                <FormattedMessage id="common.buttons.shopNow.title" />
            </Button>
        </CustomLink>
    );
};

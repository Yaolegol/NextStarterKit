// @flow
import cn from "classnames";
import { CustomLink } from "common/components/Link";
import CartIcon from "icons/cart.svg";
import { selectCartProductsTotal } from "modules/Cart/selectors";
import React from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    cartProductsTotal: number,
};

const CartLink = ({ cartProductsTotal }: TProps): React$Node => {
    return (
        <CustomLink className="cart-link" url="/cart">
            <div className="cart-link__icon-container">
                <CartIcon className="cart-link__icon" />
                <span
                    className={cn(
                        "cart-link__counter",
                        cartProductsTotal === 0
                            ? "cart-link__counter_hidden"
                            : null
                    )}
                >
                    {cartProductsTotal}
                </span>
            </div>
        </CustomLink>
    );
};

export default (connect((state) => ({
    cartProductsTotal: selectCartProductsTotal(state),
}))(CartLink): any);

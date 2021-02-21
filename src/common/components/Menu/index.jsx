// @flow
import cn from "classnames";
import { CustomLink } from "common/components/Link";
import { MenuItem } from "common/components/Menu/MenuItem";
import { actionLogout } from "modules/Auth/actions";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { selectMobileMenuShowStatus } from "modules/MobileMenu/selectors";
import { selectUser } from "modules/User/selectors";
import React, { useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

type TProps = {
    className?: string,
};

export const Menu = ({ className }: TProps): React$Node => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isMobileMenuShowing = useSelector(selectMobileMenuShowStatus);

    const hideMobileMenu = useCallback(() => {
        if (isMobileMenuShowing) {
            dispatch(actionHideMobileMenu());
        }
    }, [dispatch, isMobileMenuShowing]);

    const logout = useCallback(() => {
        dispatch(actionLogout());
        hideMobileMenu();
    }, [dispatch, hideMobileMenu]);

    const adminLinks = useMemo(() => {
        return (
            <>
                <button onClick={hideMobileMenu}>
                    <CustomLink
                        activeClassName="menu__link_active"
                        className="menu__link"
                        url="/admin"
                    >
                        <MenuItem>
                            <FormattedMessage id="common.menu.adminDashboard" />
                        </MenuItem>
                    </CustomLink>
                </button>
            </>
        );
    }, [hideMobileMenu]);

    const registeredLinks = useMemo(() => {
        return (
            <>
                <button onClick={hideMobileMenu}>
                    <CustomLink
                        activeClassName="menu__link_active"
                        className="menu__link"
                        url="/profile"
                    >
                        <MenuItem>
                            <FormattedMessage id="common.menu.profile" />
                        </MenuItem>
                    </CustomLink>
                </button>
                <button className="menu__button" onClick={logout}>
                    <MenuItem>
                        <FormattedMessage id="common.menu.logOut" />
                    </MenuItem>
                </button>
            </>
        );
    }, [hideMobileMenu, logout]);

    const unregisteredLinks = useMemo(() => {
        return (
            <>
                <button onClick={hideMobileMenu}>
                    <CustomLink
                        activeClassName="menu__link_active"
                        className="menu__link"
                        url="/signup"
                    >
                        <MenuItem>
                            <FormattedMessage id="common.menu.signUp" />
                        </MenuItem>
                    </CustomLink>
                </button>
                <button onClick={hideMobileMenu}>
                    <CustomLink
                        activeClassName="menu__link_active"
                        className="menu__link"
                        url="/login"
                    >
                        <MenuItem>
                            <FormattedMessage id="common.menu.logIn" />
                        </MenuItem>
                    </CustomLink>
                </button>
            </>
        );
    }, [hideMobileMenu]);

    return (
        <div className={cn("menu", className)}>
            <button onClick={hideMobileMenu}>
                <CustomLink
                    activeClassName="menu__link_active"
                    exact={true}
                    className="menu__link"
                    url="/"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.mainPage" />
                    </MenuItem>
                </CustomLink>
            </button>
            <button onClick={hideMobileMenu}>
                <CustomLink
                    activeClassName="menu__link_active"
                    className="menu__link"
                    url="/shop"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.shopPage" />
                    </MenuItem>
                </CustomLink>
            </button>
            {user && user.admin ? adminLinks : null}
            {user ? registeredLinks : unregisteredLinks}
        </div>
    );
};

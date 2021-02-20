// @flow
import { actionGetUser } from "modules/User/actions";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainPage = React.lazy(() => import("pages/Main"));
const ShopPage = React.lazy(() => import("pages/Shop"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionGetUser());
    }, [dispatch]);

    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path="/shop">
                        <ShopPage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

// TODO remove hot from prod
export default (hot(App): any);

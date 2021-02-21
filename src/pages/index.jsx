// @flow
import {Layout} from "common/components/Layout";
import {Description} from "pages/Main/Description";
import {Portfolio} from "pages/Main/Portfolio";
import {Hero} from "pages/Main/Hero";
import {CustomIntl} from "app/components/CustomIntl";
import React from "react";
import "styles/index.less";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <CustomIntl>
            <Layout hero={<Hero/>}>
                <div className="main-page">
                    <Description/>
                    <Portfolio/>
                </div>
            </Layout>
        </CustomIntl>
    );
};

export default MainPage;

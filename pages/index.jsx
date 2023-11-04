import React from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import HomeJalyuzi from '~/components/partials/homepage/home-default/HomeJalyuzi';

const HomepageDefaultPage = () => {
    return (
        <PageContainer title="Multipurpose Marketplace React Ecommerce Template">
            <main id="homepage-1">
                <HomeDefaultBanner />
                <SiteFeatures />
                <HomeAdsColumns />
                <HomeJalyuzi/>
                <HomeDefaultTopCategories />
                <DownLoadApp />
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;

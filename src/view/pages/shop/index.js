import React from 'react';
import CustomCommonBanner from '../../../components/shared/CustomCommonBanner';
import CustomDrops from '../../../components/shared/CustomDrops';
import CustomCategories from '../../../components/shared/CustomCategoires';
import CustomFeaturedProducts from '../../../components/shared/CustomFeaturedProducts';
import CommonContainer from '../../../components/container';

const ShopPage = () => {
    return (
        <>
            <CustomCommonBanner />
            <CommonContainer maxWidth="lg">
                <CustomFeaturedProducts showDropDown={true} />
            </CommonContainer>
            <CustomCategories border={true} />
            <CustomDrops />
        </>
    );
};

export default ShopPage;

import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import data from '~/utilities/data';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import Link from 'next/link';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { id } = Router.query;
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const item = data.filter((item) => item.id == Number(id));
    console.log('item', item);

    //Views
    let productItemsViews;

    if (!loading) {
        if (category && category.products.length > 0) {
            productItemsViews = (
                <ProductItems columns={4} products={category.products} />
            );
        } else {
            productItemsViews = <p>No Product found</p>;
        }
    } else {
        productItemsViews = <p>Loading...</p>;
    }

    const breadCrumb = [
        {
            text: 'Asosiy sahifa',
            url: '/',
        },
        {
            text: `Jalyuzilar`,
        },
    ];

    console.log('slug', id);
    return (
        <PageContainer
            footer={<FooterFullwidth />}
            title={category ? category.name : 'Category'}
            boxed={true}>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div
                    className="ps-container"
                    style={{
                        backgroundImage: `url(/static/fon/photo_2023-11-02_11-23-37.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <Link href="/jalyuzi">
                        <a>
                            <div className="seaction_name"> pardalar </div>
                        </a>
                    </Link>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                <div className="ps-block--category">
                                    <div
                                        className="parda_item"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            width: '100%',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '220px',
                                        }}>
                                        <Link href={`/jalyuzi/${item.id}`}>
                                            <a className="ps-block__overlay"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default ProductCategoryScreen;

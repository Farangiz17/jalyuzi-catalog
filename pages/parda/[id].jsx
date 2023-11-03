import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import data from '~/utilities/data';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { id } = Router.query;
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const item = data.filter((item) => item.id == Number(id))
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
            text: `Parda-${id}`,
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
                <div className="container">
                  <h2 className='text-gray py-3 text-center'>Parda - {id} </h2>
                   <div style={{display:'flex', justifyContent:'center'}}>
                    <img src={`${item[0].image}`} alt={`${item[0].image}`} />
                   {/* <div 
                    style={{
                        backgroundImage:`url(${item[0].image})`,
                        width:'100%',
                        minHeight:'800px',
                        // maxHeight:'1000px',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'contain'
                    }}
                    >

                    </div> */}
                   </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default ProductCategoryScreen;

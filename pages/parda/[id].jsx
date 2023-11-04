import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
// import data from '~/utilities/data';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { id } = Router.query;
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const data = [
        {
            id: 1,
            image: '/static/pardalar/IMG_3523.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 2,
            image: '/static/pardalar/IMG_3639.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 3,
            image: '/static/pardalar/IMG_3640.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 4,
            image: '/static/pardalar/IMG_3641.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 5,
            image: '/static/pardalar/IMG_3642.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 6,
            image: '/static/pardalar/IMG_3643.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 7,
            image: '/static/pardalar/IMG_3645.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 8,
            image: '/static/pardalar/IMG_3646.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 9,
            image: '/static/pardalar/IMG_3647.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 10,
            image: '/static/pardalar/IMG_3648.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 11,
            image: '/static/pardalar/IMG_3649.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 12,
            image: '/static/pardalar/IMG_3651.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 13,
            image: '/static/pardalar/IMG_3652.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 14,
            image: '/static/pardalar/IMG_3653.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 15,
            image: '/static/pardalar/IMG_3655.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 16,
            image: '/static/pardalar/IMG_3656.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 17,
            image: '/static/pardalar/IMG_3657.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 18,
            image: '/static/pardalar/IMG_3658.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 19,
            image: '/static/pardalar/IMG_3659.JPG',
            price: 1000000,
            description: 'baxmal',
        },
        {
            id: 20,
            image: '/static/pardalar/IMG_3659.JPG',
            price: 1000000,
            description: 'baxmal',
        },
    ];
    

    
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
                    <img src={`${item[0]?.image}`} alt={`${item[0]?.image}`} />
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

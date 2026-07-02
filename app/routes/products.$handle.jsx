import {useLoaderData} from 'react-router';
import {getSelectedProductOptions, Analytics} from '@shopify/hydrogen';
import {ProductGallery} from '../components/product/ProductGallery';
import {ProductInfo} from '../components/product/ProductInfo';
import {VariantSelector} from '../components/product/VariantSelector';
import {AddToCart} from '../components/product/AddToCart';
import {ScarcityEngine} from '../components/product/ScarcityEngine';

export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;
  const selectedOptions = getSelectedProductOptions(request);
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });
  if (!product?.id) {
    throw new Response('Product not found', {status: 404});
  }
  return {product};
}

export default function ProductPage() {
  const {product} = useLoaderData();
  const selectedVariant = product.selectedOrFirstAvailableVariant;
  const images = product.images.nodes;
  return (
    <div className="product-page">
      <div className="product-page-inner">
          <div className="product-page-left">
            <ProductGallery
              images={images}
              variants={product.variants.nodes}
              scarcity={<ScarcityEngine stockCount={4} endHours={2} />}
            />
          </div>
        <div className="product-page-right">
          <ProductInfo product={product} selectedVariant={selectedVariant} />
          <VariantSelector
            options={product.options}
            variants={product.variants.nodes}
          />
          <div className="scarcity-warning">
              <div className="scarcity-warning-dot" />
              <span className="scarcity-warning-text">ALMOST GONE — ONLY 4 REMAINING</span>
            </div>
            <AddToCart selectedVariant={selectedVariant} />
        </div>
      </div>
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}

const PRODUCT_QUERY = `#graphql
  query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
    product(handle: $handle) {
      id
      title
      descriptionHtml
      vendor
options {
  name
  optionValues {
    name
  }
}
      selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions) {
        id
        availableForSale
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        title
        selectedOptions { name value }
      }
      variants(first: 20) {
        nodes {
          id
          availableForSale
          price { amount currencyCode }
          selectedOptions { name value }
          image {
            id
            url
            altText
          }
        }
      }
      images(first: 10) {
        nodes {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`;
import {useLoaderData, Link} from 'react-router';
import {getPaginationVariables, Image, Money} from '@shopify/hydrogen';
import {useState} from 'react';

export async function loader({params, request, context}) {
  const {handle} = params;
  const paginationVariables = getPaginationVariables(request, {pageBy: 12});

  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response('Collection not found', {status: 404});
  }

  return {collection};
}

export default function CollectionPage() {
  const {collection} = useLoaderData();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'NEW IN', 'BEST SELLERS', 'SALE'];

  return (
    <div className="col-page">

      {/* SIDEBAR */}
      <aside className="col-sidebar">
        <div className="col-sidebar-brand">STYLEIQ</div>

        <div className="col-sidebar-section">
          <span className="col-sidebar-label">COLLECTION</span>
          <h2 className="col-sidebar-title">
            {collection.title.toUpperCase()}
          </h2>
          {collection.description && (
            <p className="col-sidebar-desc">{collection.description}</p>
          )}
        </div>

        <div className="col-sidebar-section">
          <span className="col-sidebar-label">FILTER</span>
          <div className="col-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`col-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="col-sidebar-section">
          <span className="col-sidebar-label">CATEGORY</span>
          <div className="col-filters">
            {['TOPS', 'BOTTOMS', 'OUTERWEAR', 'ACCESSORIES'].map((c) => (
              <button key={c} className="col-filter-btn">{c}</button>
            ))}
          </div>
        </div>

        <div className="col-sidebar-section">
          <span className="col-sidebar-label">PRICE</span>
          <div className="col-filters">
            {['UNDER ₱5K', '₱5K - ₱10K', '₱10K - ₱20K', 'OVER ₱20K'].map((p) => (
              <button key={p} className="col-filter-btn">{p}</button>
            ))}
          </div>
        </div>

        <div className="col-sidebar-deco">
          {collection.title.toUpperCase()}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="col-main">

        {/* TOP BAR */}
        <div className="col-topbar">
          <span className="col-topbar-count">
            {collection.products.nodes.length} PIECES
          </span>
          <div className="col-topbar-sort">
            <span>SORT BY</span>
            <span className="col-topbar-sort-active">FEATURED ↓</span>
          </div>
        </div>

        {/* GRID */}
        <div className="col-grid">
          {collection.products.nodes.map((product, i) => (
            <Link
              key={product.id}
              to={`/products/${product.handle}`}
              className={`col-card ${i === 0 ? 'col-card-featured' : ''}`}
            >
              <div className="col-card-img">
                {product.featuredImage && (
                  <Image
                    data={product.featuredImage}
                    aspectRatio="3/4"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="col-card-photo"
                  />
                )}
                <div className="col-card-overlay">
                  <span className="col-card-cta">SHOP NOW</span>
                </div>
                {i === 0 && (
                  <span className="col-card-badge">NEW</span>
                )}
              </div>
              <div className="col-card-info">
                <h3 className="col-card-name">{product.title}</h3>
                <Money
                  className="col-card-price"
                  data={product.priceRange.minVariantPrice}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE */}
        {collection.products.pageInfo.hasNextPage && (
          <div className="col-load-more">
            <Link
              to={`?cursor=${collection.products.pageInfo.endCursor}`}
              className="col-load-btn"
            >
              LOAD MORE
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

const COLLECTION_QUERY = `#graphql
  query Collection($handle: String!, $first: Int, $after: String) {
    collection(handle: $handle) {
      id
      title
      description
      products(first: $first, after: $after) {
        nodes {
          id
          title
          handle
          featuredImage {
            id
            url
            altText
            width
            height
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
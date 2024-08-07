import ProductsPagination from './parts/Products';
import ProductsGroupsPagination from './parts/ProductsGroups';
import ProductsAttributesPagination from './parts/ProductsAttributes';
import ProductsBrandsPagination from './parts/ProductsBrands';
import ProductsCategoriesPagination from './parts/ProductsCategories';
import ProductsCouponsPagination from './parts/ProductsCoupons';
import ProductsLabelsPagination from './parts/ProductsLabels';
import ProductsTagsPagination from './parts/ProductsTags';
import Home from './parts/Home';

const newCRM = {
    Home : Home,
    Products : ProductsPagination,
    ProductsGroups : ProductsGroupsPagination,
    ProductsAttributes : ProductsAttributesPagination,
    ProductsBrands : ProductsBrandsPagination,
    ProductsCategories : ProductsCategoriesPagination,
    ProductsCoupons : ProductsCouponsPagination,
    ProductsLabels : ProductsLabelsPagination,
    ProductsTags : ProductsTagsPagination,
}
export default newCRM;
import ProductPrice from "@/components/Common/ProductPrice"

const ProductTextInformations = () => {
    return (
        <>

            <h2>Company</h2>
            <h1>Lorem ipsum dolor sitamet</h1>
            <ProductPrice
                cname="product-page-price"
                discountPercent={3}
                price={102}
                showPercent={true}
            />
        
        </>
    )
}


export default ProductTextInformations
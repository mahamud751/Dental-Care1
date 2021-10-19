import { useEffect, useState } from "react"


const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('../components/dummyData/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default useProducts;
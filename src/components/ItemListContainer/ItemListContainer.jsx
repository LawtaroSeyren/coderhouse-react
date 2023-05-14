import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query, orderBy } from 'firebase/firestore'
import { database } from '../../services/firebase/config';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();


    // useEffect(() => {
    //    const functionProducts = idCategory ? getProductsByCategory : getProducts;
    //   functionProducts(idCategory)
    //     .then(res => setProducts(res))
    //   .catch(error => console.error(error))
    //}, [idCategory])

    useEffect(() => {
        const myProducts = idCategory ? query(collection(database, "products"), where("idCat", "==", idCategory)) : (collection(database, "products"));
        getDocs(myProducts)
            .then(response => {
                const newProducts = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                  }).sort((a, b) => parseInt(a.id) - parseInt(b.id));
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
    }, [idCategory])



    return (
        <>
            <div className="container">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer
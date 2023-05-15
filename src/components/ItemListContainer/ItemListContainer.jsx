import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore'
import { database } from '../../services/firebase/config';
import Cargando from '../Cargando/Cargando';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();

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
            .finally(() => setLoading(false));
    }, [idCategory])

    if (loading) {
        return (<Cargando/>)
    }

    return (
        <>
            <div className="container">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer
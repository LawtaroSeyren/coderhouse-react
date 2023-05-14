import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { database } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import { getProduct } from "../../asyncmock";

const ItemDetailContainer = () => {
    const [product, setProducto] = useState(null);

    const [loading, setLoading] = useState(true);

    const { idItem } = useParams();

    // useEffect(() => {
    //    getProduct(idItem)
    //         .then(res => setProducto(res))
    //}, [idItem])

    useEffect(() => {

        const newDoc = doc(database, "products", idItem);

        getDoc(newDoc)

            .then(response => {
                const data = response.data();
                const newProduct = { id: response.id, ...data }
                setProducto(newProduct);
            })

            .catch(error => console.log(error))

    }, [idItem])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

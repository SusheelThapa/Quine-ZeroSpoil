import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ItemDetailProps {
    // Define your props here
}

interface Product {
    id: number;
    product_name: string;
    description: string;
    expiry_date: Date;
    purchase_date: Date;
    quantity: number;
    // Add other fields as needed
}

const ItemDetail: React.FC<ItemDetailProps> = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Fetch product details based on the id parameter
        axios.get(`http://localhost:8000/api/expirytrackers/${id}/`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details', error));

    }, [id]);

    if (!product) {
        return <div>Invalid product id</div>;
    }

    return (
        <>

            <div className="flex h-screen px-[28vh] py-[10vh]">
                {/* Left side - Image */}
                <div className="">
                    <img
                        src="https://picsum.photos/200/300"
                        alt={product.product_name}
                        className="h-full rounded-lg w-[70vh]"
                    />
                </div>

                {/* Right side - Product Description */}
                <div className="px-10 ml-4 bg-gradient-to-r from-gray-200  to-slate-300 text-b rounded-lg w-[100vh]">
                    <h1 className="text-3xl font-bold mb-4 mt-10">{product.product_name}</h1>
                    <br />
                    <p className="rounded-xl px-3 py-4 h-[50vh]">{product.description}</p>

                </div>
            </div>
        </>

    );
};

export default ItemDetail;

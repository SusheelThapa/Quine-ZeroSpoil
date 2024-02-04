import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import product_image from '@/assets/img/avatar/AB.png';

import { useNavigate } from 'react-router-dom';
import Products from '../Products';

interface Product {
    id: number;
    product_name: string;
    description: string;
    expiry_date: string;
    purchase_date: string;
    quantity: number;
    // Add other fields as needed
}

const ExpiryTrack: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Fetching Data from Backend');
        axios
            .get('http://localhost:8000/api/expirytrackers/') // Update the API endpoint
            .then((result) => {
                setProducts(result.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleRemove = (deleteProduct:Product) => {
        try {
          // Make a delete request using Axios
          axios
            .delete(
              `http://localhost:8000/api/expirytrackers/${deleteProduct.id}/`
            )
            .then(() =>
              setProducts(products.filter((p:Product) => p.id !== deleteProduct.id))
            )
            .catch(() => {
              console.log("error while in delete endpoint")
            });
        } catch (error) {
          console.error("Error deleting Project:", error);
        }
      };


    return (
        <>
            <div className="px-60 pt-10 flex justify-center">
                {/* Navigation menu */}
                <div>
                    <ul className="flex gap-10 justify-start items-center font-medium">
                        <li className="hover:text-green-600 cursor-pointer">Product list</li>
                        <li
                            className="hover:text-green-600 cursor-pointer"
                            onClick={() => navigate('/expiry_track/add_item')}
                        >
                            Add Item
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-60 py-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[60px]"></TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Purchase Date</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Quantity</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Loop through the products array */}
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img className="" src={product_image} alt="product item image" />
                                </TableCell>
                                <TableCell className="">{product.product_name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.expiry_date}</TableCell>
                                <TableCell>{product.purchase_date}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>
                                    <button
                                        type="submit"
                                        onClick={()=> handleRemove(product)}
                                        className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        remove
                                    </button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default ExpiryTrack;

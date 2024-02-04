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

import { useNavigate } from 'react-router-dom';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



interface Product {
    id: number;
    product_name: string;
    description: string;
    expiry_date: Date;
    purchase_date: Date;
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

    const handleRemove = (deleteProduct: Product) => {
        try {
            // Make a delete request using Axios
            axios
                .delete(
                    `http://localhost:8000/api/expirytrackers/${deleteProduct.id}/`
                )
                .then(() =>
                    setProducts(products.filter((p: Product) => p.id !== deleteProduct.id))
                )
                .catch(() => {
                    console.log("error while in delete endpoint")
                });
        } catch (error) {
            console.error("Error deleting Project:", error);
        }
    };



    const handleDate = (startDate: Date, timeEnd: Date) => {
        const newStartDate= new Date(startDate);
        const newEndDate=new Date(timeEnd);
        const one_day = 1000*60*60*24;
        let result
        result = Math.ceil((newEndDate.getTime()-newStartDate.getTime())/(one_day))
        console.log('date Converter result', result)
        if (result <= 7 ) {return ', expires in ' + result + ' days' }
           
      }
    


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
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Purchase Date</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Loop through the products array */}
                        {products.map((product) => (
                            <TableRow key={product.id}>

                                <TableCell className="">{product.product_name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.expiry_date.toLocaleString()} <span className='text-sm text-red-400 mx-1'> {handleDate(product.purchase_date, product.expiry_date)} </span></TableCell>
                                <TableCell>{product.purchase_date.toLocaleString()}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>


                                    <AlertDialog>
                                        <AlertDialogTrigger> <button
                                            type="submit"
                                            className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            remove
                                        </button></AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your item.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                onClick={() => handleRemove(product)} className='hover:bg-red-500'>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

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

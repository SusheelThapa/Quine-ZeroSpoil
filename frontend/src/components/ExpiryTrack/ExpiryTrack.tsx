import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import product_image from "@/assets/img/avatar/AB.png"

import { useNavigate } from "react-router-dom";

const ExpiryTrack = () => {

    const navigate = useNavigate();

    return (
        <>

            <div className="px-60 pt-10 flex justify-center" >

                {/* navigation menu */}
                <div>
                    <ul className="flex gap-10  justify-start items-center font-medium">
                        <li className="hover:text-green-600 cursor-pointer">Product list</li>
                        <li className="hover:text-green-600 cursor-pointer" onClick={()=> navigate('/expiry_track/add_item')}>Add Item</li>
                    </ul>
                </div>

                {/* login button */}
                {/* <Button className="text-xl bg-green-400 text-black p-6 font-medium hover:bg-green-500 hover:text-white">
              <IoLockClosed className="mr-2" />
                 Login
                </Button> */}
            </div>

            <div className="px-60 py-10">

                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[60px]"></TableHead>
                            <TableHead >Name</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Purchase Date</TableHead>
                            <TableHead>Quantity</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* loop here */}
                        <TableRow>
                            <TableCell>
                                <img className="" src={product_image} alt="product item image" />
                            </TableCell>
                            <TableCell className="font-medium">
                                Peanut butter</TableCell>
                            <TableCell>2024/01/06</TableCell>
                            <TableCell>2024/01/01</TableCell>
                            <TableCell>06</TableCell>
                        </TableRow>
                        {/* loop ends here */}
                    </TableBody>
                </Table>
            </div>

        </>
    );
}

export default ExpiryTrack;
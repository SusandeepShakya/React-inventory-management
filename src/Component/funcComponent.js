import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

export default function AddProduct() {
    const initialValue = [];
    const [product, setProduct] = useState(initialValue)

    const addingProduct = (e) => {
        e.preventDefault()
        const formData = e.target;
        const newProduct = {
            product_name: formData.product_name.value,
            product_price: formData.product_price.value,
            product_qty: Number(formData.product_qty.value),
        }
        setProduct([...product, newProduct]);
        console.log(product);
    }

    const Add = (e) => {
        const indexOfArray = e.target.value;
        product[indexOfArray].product_qty = product[indexOfArray].product_qty + 1;
        setProduct([...product])
    }
    const Remove = (e) => {
        const indexOfArray = e.target.value;
        product[indexOfArray].product_qty = product[indexOfArray].product_qty - 1;
        setProduct([...product])
    }

    return (
        <>
            <div className='container'>
                <div className='AddProduct'>
                    <Form onSubmit={addingProduct}>
                        <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name : </Form.Label>
                            <Form.Control type="text" placeholder="Enter the product Name" name="product_name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price of the product</Form.Label>
                            <Form.Control type="number" placeholder="Add Product Price" name="product_price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label>Quantity of Product</Form.Label>
                            <Form.Control type="number" placeholder="Add Product Quantity" name="product_qty" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add to inventory
                        </Button>
                    </Form>
                </div>
                <div className="mt-5 listProduct">
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.product_price}</td>
                                            <td>{item.product_qty}</td>
                                            <td>
                                                <Button variant="success" onClick={Add} value={index}>+</Button>
                                                <Button variant="danger" onClick={Remove} value={index}>-</Button>
                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>

    )
}
import Card from "./Card";

const products=[
    {id:1, name:"Widget", price:9.99},
    {id:2, name:"Gadget", price:14.99},
    {id:3, name:"Tool", price:19.99}
];

function ProductList(){
    return(
        <>
        {products.map((product)=>(
            <Card key={product.id} title={product.name}>
                <p>Price: ${product.price}</p>
            </Card>
        ))}
        </>
    );
}

export default ProductList;

// Created the List of products
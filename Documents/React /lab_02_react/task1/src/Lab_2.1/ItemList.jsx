function ItemList(){
    // Array of items to render
    const items = [ { id: 1, name: 'Apple' }, { id: 2, name:'Banana'},
        { id: 3, name: 'Cherry' } ];

    return(
        <ul>
            {items.map((item)=> (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    )
}

export default ItemList;

// Component that maps an array to a list using JSX expressions
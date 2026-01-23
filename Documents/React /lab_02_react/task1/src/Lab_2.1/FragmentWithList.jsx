import ItemList from "./ItemList";

function FragmentWithList(){
    const items = [ { id: 1, name: 'Apple' }, { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' } ];

    return(
        <>
        {/* Title */}
        <h2>Fruit List</h2>

        {/* List rendered */}
        <ul>
            {items.map((item)=> (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>

        {/* Summary */}
        <p>Total:{items.length} items</p>
        </>
    )
}

export default FragmentWithList;

// Component that combines fragment + List +summary
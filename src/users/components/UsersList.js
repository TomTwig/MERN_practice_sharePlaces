import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css"

export default function UsersList({items}) {

if (items.length === 0){
    return <div>
        <h2>No Users found</h2>
    </div>
}


return(
<ul className="user-list">
    {items.map((user)=> <UserItem 
    key={user.id}
    id={user.id}
    image={user.image}
    name={user.name}
    placeCount={user.places} />)}
</ul>

)


  
}

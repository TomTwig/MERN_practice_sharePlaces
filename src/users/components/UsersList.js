import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css"

export default function UsersList({items}) {

if (items.length === 0){
    return <div>
        <h2>No Users found</h2>
        <Card/>
    </div>
}


return(
<ul className="users-list">
    {items.map((user)=> <UserItem 
    key={user.id}
    id={user.id}
    image={user.image}
    name={user.name}
    placeCount={user.places} />)}
</ul>

)


  
}

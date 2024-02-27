import styles from "./ContactsItem.module.css"
function ContactItem ({ data :{ id,name , lastName , email , phone},
    deleteHandler},
    ){
    return (<li className={styles.item}>
        <p>{name} {lastName}</p>
        <p> {email}
        </p>
        <p>{phone}</p>
        <button onClick={()=> deleteHandler(id)}>delete</button>
    </li>)
   
}
export default ContactItem
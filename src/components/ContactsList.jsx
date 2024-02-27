import ContactItem from "./ContactItem"
import styles from "./ContactList.module.css"
function ContactsList({Contacts ,deleteHandler}){
    return(
        <div className={styles.container}>
            <h3>ContactList</h3>
            {Contacts.length ? (
            <ul className={styles.contacts}>
                {Contacts.map ((Contact) =>( 
                <ContactItem  key={Contact.id} data={Contact} deleteHandler={deleteHandler}/>
                ))}
            </ul>):( <p className={styles.massage} >no contacts yet!</p> )}
            
        </div>
    );
};
export default ContactsList
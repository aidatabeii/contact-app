import { useState } from "react"
import ContactsList from "./ContactsList";
import inputs from "../constants/input";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

function Contacts(){
    const [Contacts, setContacts]=useState([]);
    const [alert, setAlert]=useState("");
    const[Contact, setContact]= useState({
      id:"",  name:"", lastName :"",email:"",phone:"",
    });
    const changeHandler= (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact)=>({...contact,[name]:value }))
    };
    const addHandler=()=>{
        if (!Contact.name || !Contact.lastName||!Contact.email ||!Contact.phone){
            setAlert("please enter valid data!");
            return;
        }
        setAlert("")
        const newContact = {...Contact , id:v4 ()};
        setContacts(Contacts=>([...Contacts ,newContact]));
        setContact({
         name:"", lastName :"",email:"",phone:"",
        })
    };
    const deleteHandler = id =>{
        const newContacts=Contacts.filter(Contact=>Contact.id !== id);
        setContacts(newContacts);
    }

    return <div className={styles.continer}>
        <div className={styles.form}>
            {
                inputs.map((input , index) =>(<input
                key={index}
                     type={input.type} 
                      placeholder={input.placeholder}
                       name={input.name} 
                    value={Contact[input.name]}
                    onChange={changeHandler} />))
            }
            
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert} </p>} </div>
        <ContactsList Contacts={Contacts} deleteHandler={deleteHandler}/>

    </div>
}
export default Contacts
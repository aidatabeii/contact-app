import styles from "./Header.module.css";

function Header () {
    return <div className={styles.continer}>
        <h1>Contact App </h1>
        <p>
            <a href="https://botostart.ir">botostart</a> |React.js Full Course
        </p>
    </div>
}
export default Header;
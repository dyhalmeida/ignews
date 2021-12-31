import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}>home</a>
                    <a>posts</a>
                </nav>
            </div>
        </header>
    );
}
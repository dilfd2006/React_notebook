import styles from './Logo.module.css';
function Logo({image}) {
  return (
    <img src={image} className={styles.logo} alt="Logo" />
);
}

export default Logo;

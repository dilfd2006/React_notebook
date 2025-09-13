import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

function SelectUser() {
 const {userId, setUserId} = useContext(UserContext);
  const changeUser = (e) =>{
    setUserId(Number(e.target.value));
  };
  return (
    <>
  <select name="name" className={styles.select} value={userId} id="name" onChange={changeUser}>
    <option value="1">Антон</option>
    <option value="2">Вася</option>
  </select>
  </>
);
}

export default SelectUser;

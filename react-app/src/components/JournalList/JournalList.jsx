import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
import { UserContext } from '../../context/user.context';
import { useContext, useMemo } from 'react';

function JournalList({items, setItem}) {
   if (items.length === 0){
    return <p>Записей пока нет, добавьте первую</p>;
  }

  const sortItems = (a, b) =>{
    if (a.date < b.date){
      return 1;
    }
    else {
      return -1;
    }
  };
  const filteredItems = useMemo(() => items.
      filter(el => el.userId === userId).
      sort(sortItems), [items, userId]);
 
  return <>
    {filteredItems.map(el => (
          <CardButton key={el.id} onClick={() => setItem(el)}>
            <JournalItem
              title={el.title}
              date={el.date}
              text={el.text}
            />
          </CardButton>
          ))
      }
  </>;
  }

  export default JournalList;
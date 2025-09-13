import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';
function mapItems(items){
  if (!items){
     return [];
  }
  return items.map(i => ({
     ...i, 
     date: new Date(i.date)
  }));
}
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
const [rawItems, setItems] = useLocalStorage('data');
  const items = mapItems(rawItems);
  const addItem = newItem => {
     if (!newItem.id){
      setItems([...items, {
       ...newItem,
       date: new Date(newItem.date),
       id: Math.max(...items.map(i => i.id), 0) + 1
     }]);
     }
     else{
      setItems([...items.map(i => {
        if (i.id === newItem.id){
          return {
            ...newItem
          };
        }
        return i;
      })]);
     }
  };
  const deleteItem = (id) => {
    setItems([...items.filter(el => el.id !== id)]);
  };

  return (
    <UserContextProvider>
    <div className="app">
      <LeftPanel>
        <Header/>
        <JournalAddButton clearForm={() => setSelectedItem(null)}/>
        <JournalList items={items} setItem={setSelectedItem}/>
      </LeftPanel>
      <Body>
        <JournalForm onDelete={deleteItem} onSubmit={addItem} data={selectedItem}/>
      </Body>
    </div>
    </UserContextProvider>
  );
}

export default App;

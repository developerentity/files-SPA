import React from 'react'
import './App.css';

const App = props => {

  const { files, sortBy } = props

  const itemsList = files?.map(item => {
    return (<div key={item.id} style={{ margin: '10px', border: '1px solid black' }}>
      <div><b>{item.alt_description}</b></div>
      <div>{item.created_at}</div>
      <div>{item.updated_at}</div>
    </div>)
  })

  return (
    <div className="App">
      <div><button onClick={() => sortBy('alt_description')}>имени</button></div>
      <div><button onClick={() => sortBy('created_at')}>дате создания</button></div>
      <div><button onClick={() => sortBy('updated_at')}>дате изменения</button></div>
      {itemsList}
    </div>
  );
}

export default App;

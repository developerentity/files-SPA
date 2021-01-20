import React, { useState } from 'react'
import './App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const App = props => {

  const { files, sortBy, sortFlag } = props

  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)

  const itemsList = files?.map(item => {
    return (
      <div key={item.id} className='content-item'>
        <div><b>{item.alt_description}</b></div>
        <div>{item.created_at}</div>
        <div>{item.updated_at}</div>
      </div>)
  })

  return (
    <div className="main-wrap">
      <div className='header'>
        <h1>Files</h1>
        <div className='dropdownWrap'>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="primary" caret>
              Сортировать по:
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className={sortFlag === 'alt_description' ? 'active' : ''} onClick={() => sortBy('alt_description')}>по имени</DropdownItem>
              <DropdownItem className={sortFlag === 'created_at' ? 'active' : ''} onClick={() => sortBy('created_at')}>по дате создания</DropdownItem>
              <DropdownItem className={sortFlag === 'updated_at' ? 'active' : ''} onClick={() => sortBy('updated_at')}>по дате изменения</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
      <div className='main-content'>
        {itemsList}
      </div>
    </div>
  );
}

export default App;

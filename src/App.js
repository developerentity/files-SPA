import React, { useState } from 'react'
import './App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const App = props => {

  const { files, sortBy, sortFlag } = props

  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)

  const itemsList = files?.map(item => {
    return (
      <div key={item.file} className='content-item'>
        <div>Имя: {item.name.split('.')[0]}</div>
        <hr />
        <div>размер: <br /> {item.size_now}</div>
        <hr />
        <div>дата создания: {item.ctime}</div>
        <hr />
        <div>дата модификации: {item.mtime}</div>
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
              <DropdownItem className={sortFlag === 'name' ? 'active' : ''} onClick={() => sortBy('name')}>по имени</DropdownItem>
              <DropdownItem className={sortFlag === 'size_now' ? 'active' : ''} onClick={() => sortBy('size_now')}>по размеру</DropdownItem>
              <DropdownItem className={sortFlag === 'ctime' ? 'active' : ''} onClick={() => sortBy('ctime')}>по дате создания</DropdownItem>
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

import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import Button from '../Button'
import AccountModel from '../Modals/AccountModel';

const Account = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModel(!showModel);
  }
  return (
    <div className="flex-item-0-item-2">
      <h3>
        <MdAccountCircle style={{ width: '30px', height: '30px' }} />
        <Button buttonName='akashsah946@gmail.com' onClick={toggleModal} ></Button>
        {showModel && <AccountModel/>}
      </h3>
    </div>
  )
}

export default Account
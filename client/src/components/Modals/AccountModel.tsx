import { MdOutlineSettings, MdLogout, MdOutlineHelpCenter, MdEdit } from "react-icons/md";
const AccountModel = () => {
  return (
    <div className='modal'>
      <div>
        <a href="">
          <MdEdit style={{width:'22px', height:'22px'}} />
          <span>Custom instructions</span>
        </a>
      </div>
      <div>
        <a href="">
          <MdOutlineSettings style={{width:'22px', height:'22px'}} />
          <span>Settings</span>
        </a>
      </div>
      <div>
        <a href="">
          <MdOutlineHelpCenter style={{width:'22px', height:'22px'}} />
          <span> Help and FAQ</span>
        </a>
      </div>
      <div>
        <a href="">
          <MdLogout style={{width:'22px', height:'22px'}} />
          <span>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default AccountModel

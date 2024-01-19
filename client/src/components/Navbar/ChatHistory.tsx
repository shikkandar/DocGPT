import { MdOutlineMessage } from "react-icons/md";

const ChatItem = ({ title }: { title: string }) => {
  return (
    <div>
      <MdOutlineMessage style={{ width: '22px', height: '22px' }} />

      <a href=""> {title} </a>
    </div>
  )
}

const ChatHistory = () => {
  const chatItems = [
    '1. Software Development',
    '2. Design & Planning',
    '3. Project Management',
    '4. Data Structures and Algorithms',
    '5. Operating System',
    '6. Professional Ethincs',
    '7. Green Computing',
    '1. Software Development',
    '2. Design & Planning',
    '3. Project Management',
    '4. Data Structures and Algorithms',
    '5. Operating System',
    '6. Professional Ethincs',
    '7. Green Computing'
  ]
  return (
    <div className='flex-item-0-item-1'>
      {chatItems.map((item: string, index: number) => {
        return (
          <ChatItem key={index} title={item} />
        );
      })}
    </div>
  )
}

export default ChatHistory

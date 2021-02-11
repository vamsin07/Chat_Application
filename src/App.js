import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
        height="100vh"
        projectID="a965b9f8-1644-4a61-9e65-77c2bd199060"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}
      />
  );
}   


export default App;

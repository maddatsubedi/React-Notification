import './App.css';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';
import NotificationPage from './components/NotificationPage/NotificationPage';
import { NotificationProvider } from './components/Notification/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <>
        <div className="page">
          <Navbar />
          <Notification position={`topCenter`} />
          <main className="main">
          <NotificationPage />
          </main>
        </div>
      </>
    </NotificationProvider>
  );
}

export default App;
import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  return (
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      < SideBar />
    </div>
  )
}
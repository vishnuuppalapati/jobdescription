import './MainDashboard.css';
import SearchIcon from './SearchIcon.png';
import Setting from './Setting.png';
import EmailNotification from './EmailNotification.jpeg';
import Logout from './Logout.png';

import MainContent from './MainContent';

function RightContent() {
    return (
        <div class="RightContent">
            <div class="header">
                <div class="headerItems">
                    <div class="imageListItems">
                        <ul class="listItems">
                            <li><img src={SearchIcon} width={20} height={20} alt="search_icon" /></li>
                        </ul>
                    </div>
                    <div class="menuItems">
                        <ul class="listItems">
                            <li>Blog</li>
                            <li>Questions</li>
                            <li>Companies</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="logoutMenuItems">
                        <ul class="listItems">
                            <li><img src={Setting} width={20} height={20} alt="setting_icon"/></li>
                            <li><img src={EmailNotification} width={20} height={20} alt="notification_icon"/></li>
                            <li><img src={Logout} width={20} height={20} alt="logout_icon"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="MainContent">
                <MainContent />
            </div>
        </div>
    );
}

export default RightContent;
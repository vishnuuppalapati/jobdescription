import './MainDashboard.css';
import Avatar  from './Avatar.png';

import DashboardImg from './DashboardImg.jpg';
import JobImg from './JobImg.png';
import SeaDocsImg from './SeaDocsImg.jpg';
import ConnectionsImg from './ConnectionsImg.png';

function LeftNav () {
    return(
        <div class="sideNav">
            <div class="leftNavContent">
                <img class="avatarImg" src={Avatar} alt = "avatar_logo" width={100} height={100}/>
                <div class="profileData">
                    <p>Devinder Kumar</p>
                    <p>Chief Officer</p>
                </div>
                <div class="updateProfileButton">
                    <button>Update Profile</button>
                </div>

                <div class="leftMenuItems">
                    <div>
                        <ul class="leftMenuList">
                            <li><img src={DashboardImg} width={50} height={50} alt="dashboard_icon"/></li>
                        </ul>
                        <p>DASHBOARD</p>
                    </div>
                    <div class="listSecondElement">
                        <ul class="leftMenuList">
                            <li><img src={JobImg} width={50} height={50} alt="job_icon"/></li>
                        </ul>
                        <p>JOBS</p>
                    </div>
                    <div>
                        <ul class="leftMenuList">
                            <li><img src={SeaDocsImg} width={50} height={50} alt="seadocs_icon"/></li>
                        </ul>
                        <p>SEA DOCS</p>
                    </div>
                    <div>
                        <ul class="leftMenuList">
                            <li><img src={ConnectionsImg} width={50} height={50} alt="connection_icon"/></li>
                        </ul>
                        <p>CONNECTIONS</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftNav;
import './MainDashboard.css'
import LeftNav from './LeftNav';
import RightContent from './RightContent';

function MainDashboard() {
    return (
        <div className="MainDashboard">
            <LeftNav />
            <RightContent />
        </div>
    );
}

export default MainDashboard;
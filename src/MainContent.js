import Signal from './Signal.png';
import Reload from './Reload.png';
import Edit from './Edit.jpg';
import Delete from './Delete.png';
import Facebook from './Facebook.png';
import MersyShips from './MersyShips.png';
import Hudson from './Hudson.png';
import Costa from './Costa.png';
import Phoenicians from './Phoenicians.png';


function MainContent() {
    return (
        <div>
            <div class="contentClass">
                <div>
                    <p>Master</p>
                    <p>Chemical Tanker</p>
                </div>
                <div>
                    <ul class="secondHeader">
                        <li><button><img id="activeIcon" src={Signal} width={10} height={10} alt="active_icon" />Active</button></li>
                        <li><img src={Reload} width={20} height={20} alt="reload_icon" /></li>
                        <li><img src={Edit} width={20} height={20} alt="edit_icon" /></li>
                        <li><img src={Delete} width={20} height={20} alt="delete_icon" /></li>
                    </ul>
                </div>
            </div>
            <div class="subHeader">
                <div class="subMenuItems">
                    <p>DESCRIPTION</p>
                    <p>INSIGHT</p>
                    <p>APPLICANTS</p>
                    <p>NOTIFICATIONS</p>

                </div>
            </div>

            <div class="contentTwo">
                <div class="jobDescription">
                    <h3>Job Description</h3>
                    <div>
                        <table>
                            <tr class="tablerow">
                                <td class="tdone">Rank</td>
                                <td>Master</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Ship Type</td>
                                <td>Chemical Tanker</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Min. Experience</td>
                                <td>06 Months</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">US Visa</td>
                                <td>Required</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Approx Joining</td>
                                <td>20 September 2016</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Salary</td>
                                <td>5000 USD</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Ship Details</td>
                                <td>Chembulk gibrlater 20000DWT 2010 Built</td>
                            </tr>
                            <tr class="tablerow">
                                <td class="tdone">Description</td>
                                <td class="lastTd">This content i am adding statically, it is not related to any thing please ignore this content</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="subContent">
                    <div class="facebook">
                        <img src={Facebook} width={40} height={40} alt="facebook_icon" />
                        <div>
                            <p>Share on facebook</p>
                        </div>
                    </div>
                </div>
                <div class="subContent2">
                    <h3>Other Jobs</h3>
                    <div class="subContentInside">
                        <img src={MersyShips} width={40} height={40} alt="facebook_icon" />
                        <div class="textContent">
                            <p id="poneId">Master</p>
                            <p>Chemical Tanker</p>
                            <p>Posted: 20 Aug 2016</p>
                        </div>
                    </div>
                    <div class="subContentInside">
                        <img src={Hudson} width={40} height={40} alt="facebook_icon" />
                        <div class="textContent">
                            <p id="poneId">Chief Officer</p>
                            <p>Oil Tanker</p>
                            <p>Posted: 20 Aug 2016</p>
                        </div>
                    </div>
                    <div class="subContentInside">
                        <img src={Costa} width={40} height={40} alt="facebook_icon" />
                        <div class="textContent">
                            <p id="poneId">Executive Officer</p>
                            <p>Bulk Carrier</p>
                            <p>Posted: 20 Aug 2016</p>
                        </div>
                    </div>
                    <div class="subContentInside">
                        <img src={Phoenicians} width={40} height={40} alt="facebook_icon" />
                        <div class="textContent">
                            <p id="poneId">Master</p>
                            <p>Chemical Tanker</p>
                            <p>Posted: 20 Aug 2016</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
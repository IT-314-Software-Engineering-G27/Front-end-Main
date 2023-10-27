import React from 'react';
import './EventRegistration.css';
import Logo from '../icons/Logo';
import Profile from '../icons/Profile';
import Chat from '../icons/Chat';
import Post from '../icons/Post';
import IdeaSharing from '../icons/IdeaSharing';
import Updates from '../icons/Updates';
import Settings from '../icons/Settings';
import ProfilePicture from '../icons/ProfilePicture';
import OrganizerLogo from '../icons/OrganizerLogo';

function EventRegistration() {
  return (
    <div>
      <table className="main-container" style={{ width: '100%', height: '100%' }}>
        <tbody>
          <tr>
            <td className="sidebar-container">
              <table className="sidebar">
                <tbody>
                  <tr>
                    <td>
                      <Logo />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <Profile /> <br /> Profile
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <Chat /> <br /> Chat
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <Post /> <br /> Post
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <IdeaSharing /> <br /> Idea Sharing
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <Updates /> <br /> Updates
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">
                        <Settings /> <br /> Settings
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td style={{ width: '2%' }}></td>
            <td className="event-container">
              <table style={{ width: '100%', height: '100%' }}>
                <tbody>
                  <tr className="header">
                    <td className="title">
                      <span>Event Registration</span>
                    </td>
                    <td className="search-bar">
                      <input type="text" />
                    </td>
                    <td style = {{ width: '2px' }}></td>
                    <td className="profile-picture">
                      <a href="#">
                        <ProfilePicture />
                      </a>
                    </td>
                  </tr>
                  <tr style={{ height: '93%', padding: '20%' }}>
                    <td colSpan="4" style={{ backgroundColor: 'white', borderRadius: '30px' }}>
                      <table style={{ width: '100%', height: '100%' }}>
                        <tbody>
                          <tr style={{ width: '70%' }}>
                            <td>
                              <table>
                                <tbody>
                                  <tr>
                                    <td style={{ width: '40%', height: '40%', backgroundColor: '#DED7FD', borderRadius: '50%', overflow: 'hidden', textAlign: 'center' }}>
                                      <a href="#">
                                        <OrganizerLogo />
                                      </a>
                                    </td>
                                    <td style={{ width: '60%', marginLeft: '10px' }}>
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td rowspan="2" style={{ width: '10px' }}></td>
                                            <td>
                                              <span style={{ fontWeight: 'bold', fontSize: '28px' }}>Title of the Event</span>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <span>Event Organizer</span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr style={{ height: '10px' }}></tr>
                                  <tr>
                                    <td style={{ width: '50%', textAlign: 'center' }}>
                                      <div style={{ height: '30px', backgroundColor: '#EDE9FE', border: '1px solid', borderColor: '#C5B7FB', borderRadius: '10px' }}>
                                        <span style={{ fontWeight: 'bold' }}>Event Date</span>
                                      </div>
                                      <span>1 January 2001</span>
                                    </td>
                                    <td style={{ width: '50%', textAlign: 'center' }}>
                                      <div style={{ height: '30px', backgroundColor: '#EDE9FE', border: '1px solid', borderColor: '#C5B7FB', borderRadius: '10px' }}>
                                        <span style={{ fontWeight: 'bold' }}>Last Date</span>
                                      </div>
                                      <span>1 January 2001</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td style={{ width: '20%' }}></td>
                            <td style={{ width: '10%' }}>
                              <div style={{ width: '120px', height: '30px', backgroundColor: '#C5B7FB', borderRadius: '10px', textAlign: 'center' }}>Event Category</div>
                            </td>
                          </tr>
                          <tr style={{ height: '50%' }}>
                            <td colSpan="3" style={{ width: '100%', border: '1px solid', borderColor: '#C5B7FB', borderRadius: '30px', textAlign: 'center', verticalAlign: 'top', margin: '0 auto' }}>
                              <span>About the Event</span>
                            </td>
                          </tr>
                          <tr style={{ height: '10%' }}>
                            <td colSpan="3">
                              <table style={{ width: '100%', height: '100%' }}>
                                <tbody>
                                  <tr>
                                    <td style={{ width: '30%' }}></td>
                                    <td style={{ width: '20%', alignContent: 'right' }}>
                                      <a href="#">
                                        <div style={{ width: '200px', height: '30px', backgroundColor: '#C5B7FB', borderRadius: '10px', textAlign: 'center' }}>Register Individually</div>
                                      </a>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                      <a href="#">
                                        <div style={{ width: '200px', height: '30px', backgroundColor: '#C5B7FB', borderRadius: '10px', textAlign: 'center' }}>Register Organization</div>
                                      </a>
                                    </td>
                                    <td style={{ width: '30%' }}></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style={{ height: '2%' }}></tr>
                </tbody>
              </table>
            </td>
            <td style={{ width: '2%' }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventRegistration;
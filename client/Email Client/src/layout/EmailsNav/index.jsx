import styles from './style.module.css';
import EmailType from '../../components/EmailType';
import NewMsgBtn from '../../components/NewMsgBtn';
import DropDown from '../../components/DropDown';
import LabelBadge from '../../components/LabelBadge';
import { useState } from 'react';
import { FaInbox } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { axiosReq } from '../../functions/axiosReq';
import { useEffect } from 'react';

export default function EmailsNav() {

  const [numOfNotRead, setNumOfNotRead] = useState(0);

  const fetchData = async () => {
    try {
      const num = await axiosReq({ method: 'GET', url: '/chat' });
      return num?.result?.numOfNewChats;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  useEffect(() => {
    fetchData().then(num => {
      setNumOfNotRead(num);
    }).catch(error => {
      console.error(error);
    });
  }, []);
  

  const icons = [
    { icon: <RiSendPlaneFill />, name: 'Sent Emails' },
    { icon: <TiStarFullOutline />, name: 'Favourite' },
    { icon: <BsPencilFill />, name: 'Draft' },
    { icon: <MdDelete />, name: 'Deleted' }
  ];

  const labels = [
    { text: 'trabajo', color: '#B3BDCC0' },
    { text: 'work in progress', color: '#FD5E5E' },
    { text: 'personal', color: '#FFD700' },
    { text: 'urgent', color: ' #FF347' },
    { text: 'importent', color: '#FFA07A' },
    { text: 'family', color: '#6495ED' },
    { text: 'social', color: '#FFB6C1' },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.back}>
            <MdArrowBackIosNew />
          </div>
          <h1>Mailbox</h1>
        </div>
        <div className={styles.list}>
          <NewMsgBtn />
          <EmailType icon={<FaInbox />} name={'Inbox'} num={numOfNotRead} />
          {icons.map((item) => (

            <EmailType icon={item.icon} name={item.name} key={item.name} />
          ))}
          <DropDown icon={<MdOutlineExpandMore />} name={"More"} />
          {/* <div className={styles.labels}>
            {labels.map((item) => (

              <LabelBadge icon={item.icon} name={item.name} num={2} key={item.name} />
            ))}
          </div> */}
        </div>
      </div>
      <Outlet />
    </>
  );
}

import styles from './style.module.css';
import MainIcon from '../../components/MainIcon';
import { RxTimer } from "react-icons/rx";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoVideocam } from "react-icons/io5";
import { Outlet } from 'react-router-dom';
export default function EmailList() {
  const icons = [
    { icon: <RxTimer />, title: 'timer' },
    { icon: <FaCalendarCheck />, title: 'tasks' },
    { icon: <IoMdEye />, title: 'search' },
    { icon: <MdPeople />, title: 'emails' },
    { icon: <VscGraph />, title: 'statistics' },
    { icon: <IoVideocam />, title: 'video' }
  ];

  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src='logo-mail-box.png' width={"30px"} />
        </div>

        <div className={styles.icons}>

          {icons.map((item) => (

              <MainIcon icon={item.icon} title={item.title} key={item.title}/>
          ))}

        </div>


        <div className={styles.image}>
          <div className={styles.circle}>
            <img src='./images/1.webp' alt='' />
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

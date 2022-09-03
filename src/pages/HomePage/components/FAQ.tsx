import clsx from 'clsx';
import { FC } from 'react';
import styles from './FAQ.module.less';
import { Collapse } from 'antd';
import { Button } from 'components/Button';

const { Panel } = Collapse;

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.
`;

export const FAQ: FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className={clsx(styles.root, 'container text-center')}>
      <div className={clsx(styles.faqHeader, 'container-fluid d-flex justify-content-center align-items-center')}>
        ***
      </div>
      <div className="mb-5">
        <span className={`${styles.faqTitle}`}>FAQ</span>
      </div>
      <Collapse className={`${styles.collapse}`} defaultActiveKey={['1']} onChange={onChange}>
        <Panel className={`${styles.panel}`} header="Lorem ipsum dolor sit amet?" key="1">
          <p>{text}</p>
        </Panel>
        <Panel className={`${styles.panel}`} header="Lorem ipsum dolor sit amet?" key="2">
          <p>{text}</p>
        </Panel>
        <Panel className={`${styles.panel}`} header="Lorem ipsum dolor sit amet?" key="3">
          <p>{text}</p>
        </Panel>
        <Panel className={`${styles.panel}`} header="Lorem ipsum dolor sit amet?" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <div className="mt-5">
        <Button type="primary">SEE ALL FAQs</Button>
      </div>
      <div className={`${styles.videoWrapper} my-5`}>
        <video
          className={styles.videoWrapper}
          src="https://cdn.blockbar.com/media/uploads/product/Product/218a7fc7-0b08-40b9-a37a-7e7998175620/PAT-Blockbar-Hero_3.mp4"
          loop={true}
          autoPlay
          muted
        />
      </div>
      <div className={`${styles.videoContent} position-absolute container-fluid`}>
        <p>WHY WE USE POLYGON</p>
        <p>
          “Polygon’s focus on environmental issues was the decisive factor that persuaded Verdant to choose Polygon as
          its vendor.”
        </p>
      </div>
    </div>
  );
};

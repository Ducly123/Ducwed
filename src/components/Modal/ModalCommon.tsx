import { FC } from 'react';
import styles from './Modal.module.css';
import { Modal } from 'antd';
import clsx from 'clsx';

interface Props {
  visible: boolean;
  handleCancel: () => void;
  content: any;
}

export const ModalCommon: FC<Props> = ({ visible, handleCancel, content }) => {
  return (
    <Modal
      className={clsx(styles.root)}
      visible={visible}
      onCancel={handleCancel}
      title={null}
      footer={null}
      closable={false}
      bodyStyle={{ padding: '40px 60px', background: '#ffffff' }}
      width={600}
    >
      {content}
    </Modal>
  );
};

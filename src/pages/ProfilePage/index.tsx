import clsx from 'clsx';
import { FC } from 'react';
import styles from './styles.module.less';
import { Tabs, message, Upload, Button, Form, Input } from 'antd';
import Copy from 'assets/images/copy.png';
import CarbonUser from 'assets/images/carbon_user-avatar-filled-alt.png';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { TabPane } = Tabs;
const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const rules = [{ required: true, message: 'Please input this field!' }];

const ProfilePage: FC<{ formProfile: any; formPassword: any; formEmail: any }> = ({
  formProfile,
  formPassword,
  formEmail,
}) => {
  return (
    <div className={clsx(styles.root, 'container')}>
      <div className={`container-fluid`}>
        <Tabs className={`${styles.tabs}`} defaultActiveKey="1">
          <TabPane tab="Account" key="1" className={`${styles.tabPaneAccount}`}>
            <div>
              <p>BASIC INFORMATION</p>
              <p>You have signed up using: abc.xyz@gmail.com</p>
              <p>
                Your address: 0x9b5F...c4d7 <img src={Copy} alt="Copy" />
              </p>
            </div>
            <div className={`my-5`}>
              <p>AVATAR</p>
              <div className={`d-flex flex-column justify-content-center align-items-center`}>
                <img src={CarbonUser} alt="CarbonUser" />
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
            </div>
            <div>
              <p>EDIT PROFILE</p>
              <Form layout="vertical" onFinish={(e) => console.log(e)} form={formProfile}>
                <Form.Item className={clsx(styles.formItem, 'mb-3')} label="First Name" name="firstName" rules={rules}>
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item className={clsx(styles.formItem, 'mb-3')} label="Last Name" name="lastName" rules={rules}>
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item
                  className={clsx(styles.formItem, 'mb-3')}
                  label="Phone Number"
                  name="phoneNumber"
                  rules={rules}
                >
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item className={clsx(styles.formItem, 'mb-3')} label="Date Of Birth" name="dob" rules={rules}>
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <div className={`d-flex justify-content-center`}>
                  <Button htmlType={'submit'}>SAVE</Button>
                </div>
              </Form>
            </div>
            <div className={`my-5`}>
              <p>EDIT PASSWORD</p>
              <Form layout="vertical" onFinish={(e) => console.log(e)} form={formPassword}>
                <Form.Item
                  className={clsx(styles.formItem, 'mb-3')}
                  label="Current Password"
                  name="currentPassword"
                  rules={rules}
                >
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item
                  className={clsx(styles.formItem, 'mb-3')}
                  label="New Password"
                  name="newPassword"
                  rules={rules}
                >
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item
                  className={clsx(styles.formItem, 'mb-3')}
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={rules}
                >
                  <Input className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <div className={`d-flex justify-content-center`}>
                  <Button htmlType={'submit'}>CHANGE PASSWORD</Button>
                </div>
              </Form>
            </div>
          </TabPane>
          <TabPane tab="Google 2FA" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Active Email Code" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="My Wallet" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>

      <div className={`${styles.subscribe} mt-5 px-4 py-2 d-flex justify-content-between align-items-center`}>
        <p className={`d-inline-block w-50 mb-0`}>Subscribe to our newsletter</p>
        <div className={`w-50 ${styles.formEmail}`}>
          <Form layout="inline" onFinish={(e) => console.log(e)} form={formEmail}>
            <Form.Item label="Email" name="email" rules={rules}>
              <Input />
            </Form.Item>
            <Form.Item {...{ span: 14, offset: 4 }}>
              <Button htmlType={'submit'}>SUBSCRIBE</Button>{' '}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

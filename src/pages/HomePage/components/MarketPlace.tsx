import { Typography } from 'antd';
import { FC } from 'react';
import styles from './MarketPlace.module.css';
import clsx from 'clsx';
import { Col, Row } from 'antd';
import MarketPlaceImg from 'assets/images/MarketPlaceImg.png';
import { Button } from 'components/Button';

const { Title } = Typography;

export const MarketPlace: FC = () => {
  return (
    <div className={clsx(styles.root, 'container text-center')}>
      <div className="my-5">
        <span className={`${styles.marketplaceTitle}`}>MARKETPLACE</span>
      </div>
      <div className={clsx(styles.marketplaceGrid, 'container')}>
        <Row justify="space-around" gutter={[16, 61]}>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col flex="4 1 250px" className={`${styles.marketplaceGridCol}`}>
            <div className={`${styles.marketplaceGridColRec}`}>
              <img src={MarketPlaceImg} alt="MarketPlaceImg" />
            </div>
            <div className={clsx(styles.marketplaceGridColContent, 'w-100 d-flex flex-column justify-content-around')}>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>LISTING PRICE</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>EDITION</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>9.37 ETH</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>#7</span>
                </Row>
                <Row>
                  <span className={`${styles.marketplaceGridColContentNote}`}>~$30,000.00</span>
                </Row>
              </div>
              <div>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentHeader}`}>OWNED BY</span>
                  <span className={`${styles.marketplaceGridColContentHeader}`}>BRAND</span>
                </Row>
                <Row justify="space-between">
                  <span className={`${styles.marketplaceGridColContentBody}`}>@Midas1</span>
                  <span className={`${styles.marketplaceGridColContentBody}`}>Dictador</span>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="my-5">
          <Button type="primary">EXPLORE MORE</Button>
        </div>
      </div>
    </div>
  );
};

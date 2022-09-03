import clsx from 'clsx';
import { FC } from 'react';
import styles from './Brand.module.less';
import { Col, Row, Typography } from 'antd';
import { Carousel } from 'components/Carousel';
import BrandCircleImg from 'assets/images/BrandCircleImg.png';
import CheckBoxImg from 'assets/images/CheckBoxImg.png';
import { Button } from 'components/Button';

const { Title } = Typography;
const EXAMPLE_LIST = [1, 2, 4, 5, 6, 7, 8, 9];

export const Brands: FC = () => {
  return (
    <div className={clsx(styles.root, 'container text-center')}>
      <div className={clsx(styles.brandHeader, 'container-fluid d-flex justify-content-center align-items-center')}>
        ***
      </div>
      <div className="mb-2">
        <span className={`${styles.brandTitle}`}>BRANDS</span>
      </div>
      <div className={`${styles.brandDes} d-flex justify-content-center align-items-center mb-2`}>
        <span>
          We partner with the top luxury liquor brands <br /> to bring you unique access to unique and rare bottles.
        </span>
      </div>
      <Carousel
        autoPlay={true}
        slidesPerRow={4}
        className={`${styles.carousel}`}
        responsive={[
          {
            breakpoint: 1270,
            settings: {
              slidesPerRow: 3,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesPerRow: 2,
            },
          },
          {
            breakpoint: 678,
            settings: {
              slidesPerRow: 1,
            },
          },
        ]}
        draggable
        infinite
      >
        {EXAMPLE_LIST?.map((item, index) => (
          <div key={index} className={`${styles.carouselItem}`}>
            <img src={BrandCircleImg} alt="img" />
          </div>
        ))}
      </Carousel>
      <div className={clsx(styles.brandHeader, 'container-fluid d-flex justify-content-center align-items-center')}>
        ***
      </div>
      <div className="mb-2">
        <span className={`${styles.brandTitle}`}>What is VERDANT?</span>
      </div>
      <div className={clsx(styles.brandGrid, 'container-fluid')}>
        <Row justify="space-around" gutter={[16, 61]}>
          <Col flex="2 1 400px" className={`${styles.brandGridCol} d-flex`}>
            <div>
              <img src={CheckBoxImg} alt="CheckBoxImg" />
            </div>
            <div className={`${styles.brandGridColContent} d-flex flex-column`}>
              <div>
                <span>Lorem ipsum dolor</span>
              </div>
              <div>
                <span className={`text-break`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
              </div>
            </div>
          </Col>
          <Col flex="2 1 400px" className={`${styles.brandGridCol} d-flex`}>
            <div>
              <img src={CheckBoxImg} alt="CheckBoxImg" />
            </div>
            <div className={`${styles.brandGridColContent} d-flex flex-column`}>
              <div>
                <span>Lorem ipsum dolor</span>
              </div>
              <div>
                <span className={`text-break`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
              </div>
            </div>
          </Col>
          <Col flex="2 1 400px" className={`${styles.brandGridCol} d-flex`}>
            <div>
              <img src={CheckBoxImg} alt="CheckBoxImg" />
            </div>
            <div className={`${styles.brandGridColContent} d-flex flex-column`}>
              <div>
                <span>Lorem ipsum dolor</span>
              </div>
              <div>
                <span className={`text-break`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
              </div>
            </div>
          </Col>
          <Col flex="2 1 400px" className={`${styles.brandGridCol} d-flex`}>
            <div>
              <img src={CheckBoxImg} alt="CheckBoxImg" />
            </div>
            <div className={`${styles.brandGridColContent} d-flex flex-column`}>
              <div>
                <span>Lorem ipsum dolor</span>
              </div>
              <div>
                <span className={`text-break`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-2">
        <Button type="primary">SEE MORE </Button>
      </div>
    </div>
  );
};

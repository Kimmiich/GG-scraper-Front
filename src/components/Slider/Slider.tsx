import React, { CSSProperties } from 'react';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import { SliderData } from './sliderData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Button from '../_buttons/Button/Button';

import { styled } from '../../../stitches.config';

const StyledContainer = styled('div', {
  width: '100vw',
});

const Slider = () => {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    background: 'none',
    zIndex: 2,
    top: 'calc(45% - 15px)',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    borderRight: '7px solid rgba(255,255,255,.5)',
    borderBottom: '7px solid rgba(255,255,255,.5)',
    borderLeft: 'none',
    borderTop: 'none',
  };

  const indicatorStyles: CSSProperties = {
    background: 'rgba(255,255,255,.5)',
    width: 30,
    height: 3,
    display: 'inline-block',
    margin: '0 4px',
    cursor: 'pointer',
  };

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      statusFormatter={(current, total) =>
        `Current slide: ${current} / Total: ${total}`
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15, transform: 'rotate(135deg)' }}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15, transform: 'rotate(315deg)' }}
          />
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#fff' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index + 1}
            style={{
              height: '70vh',
              width: '100%',
            }}
          >
            <Image
              loader={imageLoader}
              unoptimized
              src={slide.image}
              alt={'hero'}
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'0 0'}
            />
            <div style={{ display: 'none' }}>
              <Image
                loader={imageLoader}
                unoptimized
                src={slide.logo}
                alt={'logo'}
                width={250}
                height={100}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                padding: '0px 20px 50px 20px',
                width: '100%',
                textAlign: 'left',
                color: 'white',
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem' }}>{slide.title}</h3>
              <div
                style={{
                  padding: '25px 0px',
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  width: '100%',
                  gap: 15,
                  justifyContent: 'space-between',
                }}
              >
                {slide.links.map((link, index) => {
                  return (
                    <Button
                      key={link + index}
                      href={`/${link}`}
                      type="transparent"
                      text={link}
                    />
                  );
                })}
              </div>
              <p>{slide.description}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;

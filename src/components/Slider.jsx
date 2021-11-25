import React from 'react';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import SwiperCore, {EffectCoverflow, Pagination, Navigation} from 'swiper';
import fitoNyash from '../img/fito-nyash.jpg'
import indokach from '../img/indokach.jpg'
import indys from '../img/indys.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Icon from "./assets/Icon";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Slider = () => {
    return (
        <Section>
            <h5>Our Instructors</h5>
            <h1>Meet Our Extreamly Talented Trainers</h1>
            <Wrapper>
                <Swiper
                    className={'swipe'}
                    navigation={{
                        prevEl: '.prev1',
                        nextEl: '.next1',
                    }}
                    effect={"coverflow"}
                    centeredSlidesBounds={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={'9.7%'}
                    coverflowEffect={{
                        rotate: '30',
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                >
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img src={fitoNyash} alt=""/>
                            <div className="name">
                                <h3>Monica Sellesa</h3>
                                <h4>Nutrition Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img className={'top'} src={indys} alt=""/>
                            <div className="name">
                                <h3>Jhonson Russoe</h3>
                                <h4>Meditation Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img src={indokach} alt=""/>
                            <div className="name">
                                <h3>Jason Holder</h3>
                                <h4>Cardio Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img src={fitoNyash} alt=""/>
                            <div className="name">
                                <h3>Monica Sellesa</h3>
                                <h4>Nutrition Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img src={indokach} alt=""/>
                            <div className="name">
                                <h3>Jason Holder</h3>
                                <h4>Cardio Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img className={'top'} src={indys} alt=""/>
                            <div className="name">
                                <h3>Jhonson Russoe</h3>
                                <h4>Meditation Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide className={'slide'}>
                        <Block>
                            <img src={indokach} alt=""/>
                            <div className="name">
                                <h3>Jason Holder</h3>
                                <h4>Cardio Expert</h4>
                            </div>
                        </Block>
                    </SwiperSlide>
                </Swiper>
                <Navigations>
                    <div className={"prev1"}><FontAwesomeIcon icon={faLongArrowAltLeft} /></div>
                    <div className={"next1"}><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                </Navigations>
            </Wrapper>
            <DecorBlock>
                <div>{}</div>
            </DecorBlock>
            <Arm>
                <Icon arm/>
            </Arm>
            <Rope>
                <Icon rope/>
            </Rope>
            <Talia>
                <Icon navel/>
            </Talia>
        </Section>
    );
};

export default Slider;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6vw 0 11.563vw 0;
  position: relative;
  
  h5 {
    font-size: 1.625vw;
    color: var(--red);
    @media(max-width: 433px){
        font-size: 5.5vw;padding: 29vw 0 10.563vw 0;
      
    }
  }

  h1 {
    font-size: 2.750vw;
    width: 27.813vw;
    color: var(--dark);
    text-align: center;
    font-weight: bold;
    margin: 1.875vw 0 0 0;
    line-height: 130%;
    @media(max-width: 433px){
        font-size: 6.6vw;
      width: 70vw;
    }
  }
`
const DecorBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  div {
    position: relative;
    width: 7.125vw;
    height: 9.894vw;
    background: #FF262512;
    border-radius: 0.313vw;

    &:after {
      content: '';
      width: 6.438vw;
      height: 13.563vw;
      background: #FF262512;
      border-radius: 0.313vw;
      position: absolute;
      bottom: -8.313vw;
      right: -1.250vw;
    }
  }

`
const Arm = styled.div`
  position: absolute;
  top: 33.875vw;
  left: 5.438vw;
  width: 3.313vw;
  height: 3.313vw;
`
const Rope = styled.div`
  position: absolute;
  top: 2.313vw;
  left: 27.313vw;
  width: 3.125vw;
  height: 3.125vw;
`
const Talia = styled.div`
  width: 3.125vw;
  height: 3.125vw;
  position: absolute;
  top: 11.250vw;
  right: 23.000vw;
`
const Wrapper = styled.div`
  width: 65vw;
  height: 31.250vw;
  @media(max-width: 433px){
      width: 88vw;
    height: 30.25vw;
  }
  .swipe {
    width: 100%;
    height: 36vw;
    display: flex;
    justify-content: space-between;
    padding: 4vw 0;
    @media(max-width: 433px){
        height: 67vw;
    }
  }

  .swiper-container-3d {
    perspective: 75.000vw;
    @media(max-width:433px){
      perspective: 244vw;
    }
  }
  
  .slide {
    width: 16.625vw;
    height: 31.250vw;
    margin: 0;
    cursor: grab;
  }

  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: var(--swiper-navigation-size);
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FCD15D;
  }
`
const Navigations = styled.div`
  font-size: 3vw;
  display: flex;
  position: absolute;
  right: 21.875vw;
  z-index: 80;
  bottom: 6.9vw;
  width: 8vw;
  justify-content: space-between;
  @media(max-width: 433px){
      bottom: -18vw;
    font-size: 10vw;
    right: 37%;
    width: 25vw;
  }
  .next1, .prev1 {
   
    user-select: none;
    cursor: pointer;
    color: var(--dark);
    display: grid;
    place-items: center;
    transition: 300ms ease-in-out;
    transition-property: transform, color;
    &:hover {
      transform: scale(1.6);
      color: var(--red);
    }
  }
`
const Block = styled.div`
  width: 17.625vw;
  height: 29.25vw;
  border-radius: 1.250vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 2.500vw;
  overflow: hidden;
  position: relative;
  @media(max-width: 433px){
      width: 26.625vw;
    height: 40.25vw;
    border-radius: 3.250vw;
    //width: 37.625vw;
    //height: 59.25vw;
    //border-radius: 4.25vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  .name {
    position: absolute;
    width: 100%;
    height: 8.500vw;
    bottom: -2vw;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Alegreya-Regular, sans-serif;
    @media(max-width: 433px){
        height: 11.500vw;
      padding-bottom: 2vw;
    }
    h4 {
      font-size: 1.250vw;
      @media(max-width: 433px){
          font-size: 1.7vw;
      }
    }

    h3 {
      font-size: 1.800vw;
      line-height: 160%;
      font-weight: 700;
      @media(max-width: 433px){
          font-size: 2.7vw;
      }
    }
  }
`
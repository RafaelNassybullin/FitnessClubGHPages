import React,{useState} from 'react';
import styled from 'styled-components'
import Icon from "./assets/Icon";
import {motion, AnimateSharedLayout} from "framer-motion";

const Subscribe = (props) => {

    const [thank, setThank] = useState(false)

    const handlerr = ()=>{
        setThank(true)
        setTimeout(()=>{setThank(false)}, 2000)
    }

    return (
        <Section {...props}>
            <AnimateSharedLayout >
                <motion.h1 animate={{textAlign: 'center'}} layout >{thank ? 'Thank You' : 'Subscribe Our Fitness Articles'}</motion.h1>

            <motion.p layout>Physical activity is defined as any bodily movement produced by
                skeletal muscles that results in energy expenditure</motion.p>
            <motion.label layout>
                <input type="text" placeholder={'Type Your Email Address'}/>
                <button onClick={handlerr}>
                    Subscribe
                </button>
            </motion.label>
        </AnimateSharedLayout>

            <DecorBlock>
                <div>{}</div>
            </DecorBlock>
            <Talia>
                <Icon navel/>
            </Talia>
            <Push>
                <Icon pushIc/>
            </Push>
            <Run>
                <Icon runer/>
            </Run>
        </Section>
    );
};

export default Subscribe;


const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 9.5vw 0 16.375vw 0;
  position: relative;
  @media(max-width:433px){
    padding: 25.5vw 0 34.375vw 0;
  }
  h1 {
    font-size: 2.750vw;
    color: var(--dark);
    font-family: JosefinSans-Bold, sans-serif;
    text-align: center;
    @media(max-width:433px){
      font-size: 7.75vw;
      width: 83%;
    }
  }

  p {
    font-size: 1.500vw;
    width: 39.563vw;
    line-height: 160%;
    font-family: Alegreya-Regular, sans-serif;
    margin: 1.500vw 0 2.281vw 0;
    text-align: center;
    @media(max-width:433px){
      margin: 6.5vw 0 14.281vw 0;
      font-size: 3.5vw;
      width: 69.563vw;
    }
  }

  label {
    width: 39.563vw;
    height: 4.750vw;
    background: #fff;
    border-radius: 2.281vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.500vw;
    box-shadow: 0 2.500vw 7.500vw #FFA9A975;
    @media(max-width:433px){
      width: 92.563vw;
      height: 16.75vw;
      border-radius: 9.281vw;
    }
    input {
      font-size: 1.5vw;
      height: 3.000vw;
      margin-left: 1.5vw;
      width: 21.563vw;
      outline: none;
      border: none;
      background: transparent;
      font-family: Alegreya-Regular, sans-serif;
      @media(max-width:433px){
        font-size: 4.5vw;
        height: 16vw;
        width: 53.563vw;
        margin-left: 4.5vw;
      }
    }
  }

  button {
    margin: 0;
    @media(max-width:433px){
      width: 32.5vw;
      height: 13.625vw;
      border-radius: 48vw;
      font-size: 4.375vw;
    }
    
  }
`

const Run = styled.div`
  position: absolute;
  bottom: 11.875vw;
  right: 20%;
  width: 3.750vw;
  height: 3.750vw;
`

const Talia = styled.div`
  position: absolute;
  width: 3.125vw;
  height: 3.125vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`
const Push = styled.div`
  position: absolute;
  bottom: 11.875vw;
  width: 3.125vw;
  height: 3.125vw;
  left: 20%;
`
const DecorBlock = styled.div`
  position: absolute;
  top: 1.188vw;
  left: 0;
  width: 3.125vw;
  height: 3.125vw;

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
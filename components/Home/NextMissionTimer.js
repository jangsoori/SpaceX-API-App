import React from "react";

import styled from "@emotion/styled";
import Countdown from "react-countdown";

const StyledNextMissionTimer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  color: white;
  justify-content: flex-start;
  text-align: center;
`;
const NumberWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;
const Number = styled.p`
  font-weight: bold;
  font-size: 3.6rem;
  background: rgba(1, 2, 20, 0.32);
  padding: 1rem 0.5rem;
`;
const Desc = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
`;
const TimerSection = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
`;
export default function NextMissionTimer({ launchDate }) {
  return (
    <StyledNextMissionTimer>
      <TimerSection>
        {launchDate && (
          <Countdown
            date={launchDate}
            renderer={({ days, hours, minutes, seconds, completed }) => (
              <>
                <NumberWrapper>
                  <Number>{days < 10 ? `0${days}` : days}</Number>
                  <Desc>days</Desc>
                </NumberWrapper>
                <NumberWrapper>
                  <Number>{hours < 10 ? `0${hours}` : hours}</Number>
                  <Desc>hours</Desc>
                </NumberWrapper>
                <NumberWrapper>
                  <Number>{minutes < 10 ? `0${minutes}` : minutes}</Number>
                  <Desc>minutes</Desc>
                </NumberWrapper>
                <NumberWrapper>
                  <Number>{seconds < 10 ? `0${seconds}` : seconds}</Number>
                  <Desc>Seconds</Desc>
                </NumberWrapper>
              </>
            )}
          />
        )}
      </TimerSection>
    </StyledNextMissionTimer>
  );
}

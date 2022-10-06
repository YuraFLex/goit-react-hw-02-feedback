import React from "react";
import { StatBoard, StatTitle, StatArea, StatValue } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatBoard>
        <StatTitle>Statistics</StatTitle>
        <StatArea variant="good" border="good">
          <StatValue>Good:</StatValue>
          <StatValue>{good}</StatValue>
        </StatArea>
        <StatArea variant="neutral" border="neutral">
          <StatValue>Neutral:</StatValue>
          <StatValue>{neutral}</StatValue>
        </StatArea>
        <StatArea variant="bad" border="bad">
          <StatValue>Bad:</StatValue>
          <StatValue>{bad}</StatValue>
        </StatArea>
        <StatArea variant="total" border="total">
          <StatValue>Total:</StatValue>
          <StatValue>{total}</StatValue>
        </StatArea>
        <StatArea variant="positive" border="positive">
          <StatValue>Positive feedback:</StatValue>
          <StatValue>{positivePercentage}%</StatValue>
        </StatArea>
      </StatBoard>
    </>
  );
};

export default Statistics;

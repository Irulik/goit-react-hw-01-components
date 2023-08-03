import React from 'react';
import { StatisticsContainer, StatList, StatListItem, Label, Percentage, Title } from './Statistics.styled';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      
      <StatList>
        {stats.map((stat) => (
          <StatListItem key={stat.id} bgColor={getRandomHexColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};


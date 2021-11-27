import React from 'react';
import styled from 'styled-components';

const FWrapper = styled.footer`
  padding: 8px 16px;
  width: 100%;
  height: 56px;

  address {
    color: var(--color-black);
    font-size: var(--font-size-small);
    word-break: break-all;
  }
`;

const Footer = () => {
  return (
    <FWrapper>
      <address>
        This is an individual project, which is not created for a commercial purpose. 
        &copy; All righs are reserved by Riot Games, Inc, as per the Riot's legal policy: https://www.riotgames.com/en/legal
      </address>
    </FWrapper>
  );
};

export default Footer;
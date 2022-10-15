import type { NextPage } from 'next'
import Head from 'next/head'
import { Rightbar } from '../components/rightbar/Rightbar'
import { Sidebar }from '../components/sidebar/Sidebar'

import styled from '@emotion/styled';
import { Topbar } from '../components/topbar/Topbar'

interface Props {
  title: string,
  children: React.ReactNode
}

const StyledMain = styled.main`
  height: 100%;
  display: flex;
`

const StyledDiv = styled.div`
  flex-direction: column;
  width: 33%;
  height: 100%;
  margin-top: 0;
  @media (max-width: 1200px) {
    width: 55%;
  };
  @media (max-width: 1000px) {
    width: 65%;
  };
  @media(max-width: 720px) {
    width: 85%;
  };
`
export const Layout: NextPage<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}/Twitter</title>
      </Head>
      <StyledMain>
        <Sidebar />
        <StyledDiv>
          <Topbar title={title}/>
          {children}
        </StyledDiv>
        <Rightbar />
      </StyledMain>
    </div>
  )
}

export default Layout
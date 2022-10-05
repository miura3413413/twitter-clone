import { NextPage } from "next"
import { IconText } from '../icon/IconText';
import styled from '@emotion/styled'
import Image from "next/image";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from "@mui/material";

const StyledDiv = styled.div`
  width: 25%;
  height: 100%;
  position: sticky;
  top: 0;
  @media (max-width: 1200px) {
    width:15%;
    margin: 0 0 0 30px;
  };
  @media(max-width: 520px) {
    width: 15%;
    margin-left: 20px;
  }
`

const StyledItem = styled.div`
  width: fit-content;
  padding-top: 10px;
  margin: 20px auto 0 auto;
`

export const Sidebar: NextPage = () => {
  return (
    <StyledDiv >
      <StyledItem>
        <IconButton size="large" color="info">
          <Image  src="/2021 Twitter logo - blue.png"  width="25" height="25" objectFit="cover" />
        </IconButton>
        <IconText Icon={HomeIcon} text="ホーム" display="none" weight="bold" />
        <IconText Icon={SearchIcon} text="話題を検索" display="none" weight="bold"/>
        <IconText Icon={NotificationsNoneIcon} text="通知" display="none" weight="bold"/>
        <IconText Icon={MailOutlineIcon} text="メッセージ" display="none" weight="bold"/>
        <IconText Icon={BookmarkBorderIcon} text="ブックマーク" display="none" weight="bold"/>
        <IconText Icon={ListAltIcon} text="リスト" display="none" weight="bold"/>
        <IconText Icon={PermIdentityIcon} text="プロフィール" display="none" weight="bold"/>
        <IconText Icon={MoreHorizIcon} text="もっと見る" display="none" weight="bold"/>
      </StyledItem>
     </StyledDiv>
  )

}



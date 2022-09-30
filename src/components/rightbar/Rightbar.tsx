import { NextPage } from "next"

import { styled } from '@mui/material/styles';

const StyledDiv = styled("div")({
  width: "30%",
  height: "100%",
//  backgroundColor: "cyan"
})
 
const Rightbar: NextPage = () => {
  return (
    <StyledDiv >
      <input type="text" placeholder="キーワード検索" />
      <p>いまどうしてる？</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eligendi cupiditate hic eaque, animi aut quia suscipit porro laudantium soluta veritatis est. Suscipit doloremque eligendi numquam quod quia ut laboriosam.</p>
    </StyledDiv>
  )

}


export default Rightbar 
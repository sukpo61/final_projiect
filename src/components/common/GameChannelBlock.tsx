import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Game {
  id: any;
  tiny_image: string;
  response: any;
  data: any;
}

interface Props {
  game: any;
}

function GameChannelBlock({ game }: any) {
  const navigate = useNavigate();

  return (
    <GameListBlock>
      <GameChannelImgArea>
        <GameChannelImg src={`${game?.header_image}`} />
      </GameChannelImgArea>
      <GameChannelDetailPart>
        <div>
          <TitleLinear>
            <GameChannelTitle>{`${game?.name}`}</GameChannelTitle>
          </TitleLinear>
          <GameChannelInfo>
            <GameChannelCategory>
              {game.genres ? game?.genres[0]?.description : null}&nbsp;
              {game.genres ? game?.genres[1]?.description : null}&nbsp;
              {game.genres ? game?.genres[2]?.description : null}&nbsp;
            </GameChannelCategory>

            <NumberOfPlayer>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#23DE79",
                }}
              ></div>
              {/* {`${}`} */}명
            </NumberOfPlayer>
          </GameChannelInfo>
        </div>
        <AdmitButton
          onClick={() =>
            navigate(`/teamchat/:${game.name.replaceAll(" ", "_")}`, {
              state: game?.filter(
                (x: any) => x.steam_appid === game.steam_appid
              ),
            })
          }
          key={game?.id}
        >
          입장하기
        </AdmitButton>
      </GameChannelDetailPart>
    </GameListBlock>
  );
}

const GameListBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px; // 홈에서 width 길이 조절 필요
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
`;

const GameChannelImgArea = styled.div`
  // 썸네일
  /* background-color: lightgrey; */
  width: 212px;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const GameChannelImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: auto;
  height: 100px;
  object-fit: cover;
`;
const GameChannelDetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 688px; // 홈에서 사이즈 조절 필요
  height: 100px;

  background-color: #263245;
  padding: 24px 24px 24px 20px;
`;

const TitleLinear = styled.div`
  background: linear-gradient(
    90deg,
    rgba(38, 50, 69, 0) 47.28%,
    rgba(38, 50, 69, 0.703125) 77.75%,
    #263245 100%
  );
`;

const GameChannelTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: white;
  letter-spacing: -0.03em;
  line-height: 29px;
  font-size: 24px;

  margin-bottom: 12px;
  width: 450px;
  height: 29px;
  overflow: hidden; // 제목이 길면 잘리게 해놓음!! 마우스 호버시 가로로 스크롤 되게 해야함
`;

const GameChannelInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const GameChannelCategory = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 14px;
  color: #a7a9ac;
  letter-spacing: -0.03em;
`;

const NumberOfPlayer = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const AdmitButton = styled.button`
  width: 100px;
  height: 42px;
  background: #00b8c8;
  border-radius: 8px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;

export default GameChannelBlock;

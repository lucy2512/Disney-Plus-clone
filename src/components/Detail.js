import styled from "styled-components";

const Detail =() => {
    return(
        <Container>
            <Background>
                <img
                    alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img
                alt=""
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78"
                />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>Play</span>
                    </Player>
                </Controls>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;

        @media(max-width: 768px){
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack : start;
    justify-content: flex-atart;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;

`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);

    img{
        width: 32px;
    }

    &:hover{
        background: rgb(198,198,198);
    }
    @media (max-width: 768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width: 25px;
        }
    }
`;

export default Detail;
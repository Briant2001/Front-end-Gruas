import { useRef,useEffect,useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled, { css } from "styled-components";

const Slidershow = ({children,controls=true ,autoplay=false, velocidad ="500" ,intervalo="000"})=>{
    const iconsPropertis = {
        izq:{color:"rgba(255,255,255,.7)",fontSize:"30px"},
        der:{color:"rgba(255,255,255,.7)",fontSize:"30px"}
    };
    const slidershow= useRef(null);
    const intervaloSlider= useRef(null);

    const siguiente = useCallback(()=>{
        // console.log(slidershow.current);     
        if (slidershow.current) {
        if (slidershow.current.children.length >0) {
            //Obtenemos el primer elemento
            const primerElement =slidershow.current.children[0];
            slidershow.current.style.transition = `${velocidad}ms ease-out all`;
            const tanamo = slidershow.current.children[0].offsetWidth;
            //movemos slidershow
            slidershow.current.style.transform = `translateX(-${tanamo}px)`;

            const transition =()=>{
                slidershow.current.style.transition=`none`;
                slidershow.current.style.transform=`translateX(0)`;
                //enviamos  el primer elemento y lo enviamos al final
                slidershow.current.appendChild(primerElement);
                slidershow.current.removeEventListener('transitionend',transition)
            }

            slidershow.current.addEventListener('transitionend',transition)
            
        }
    }       
    

    },[velocidad,slidershow])
    
    const anterior = ()=>{
        if (slidershow.current.children.length >0) {
            // console.log("object");
            // //Obtenemos el primer elemento
            const primerElement =slidershow.current.children[slidershow.current.children.length-1];
        
            slidershow.current.insertBefore(primerElement,slidershow.current.firstChild)
            
            slidershow.current.style.transition = `none`;
            const tanamo = slidershow.current.children[0].offsetWidth;

            slidershow.current.style.transform = `translateX(-${tanamo}px)`;
            
            setTimeout(()=>{
                slidershow.current.style.transition = `${velocidad}ms ease-out all`;
                slidershow.current.style.transform = `translateX(0)`;

            },100)
             
        }
    

    }
    useEffect(()=>{

        if(autoplay){ 
            intervaloSlider.current = setInterval(siguiente,intervalo)
            // slidershow.current.addEventListener('mouseenter',()=>{
            //     clearInterval(intervaloSlider.current)
            // })

            // slidershow.current.addEventListener('mouseleave',()=>{
            //     intervaloSlider.current = setInterval(siguiente,intervalo)
            // })
        }
       
    },[autoplay,intervalo,siguiente]);
    return ( 
        <section className="content-modal">

            <ContentMain>
                <ContentSlideSwho ref={slidershow}>
                    {children ? children : null}
                </ContentSlideSwho>
                {controls && <Controls>
                    <Boton onClick={anterior}>
                        <AiOutlineLeft style={iconsPropertis.izq}/>
                    </Boton >
                    <Boton derecha onClick={siguiente}>
                        <AiOutlineRight style={iconsPropertis.der}/>
                    </Boton>
                </Controls>}
            </ContentMain>
        </section>

    )
}
const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;
const ContentMain = styled.div`
    
    height: 100%;
    position: relative;

`;
const ContentSlideSwho = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;

`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    position: relative; 
`;
const TextoSlide = styled.div`
    background:${props => props.colorFondo ? props.colorFondo: 'rgba(0,0,0,.5)'};
    color: ${props => props.color ? props.color: '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 700px)
    {
        position: relative;
    }
`;
const Controls = styled.div`
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
    top: 0;
`;
const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #fff;
        }
        
    }
    path{
        filter: ${props => props.derecha ? 'drop-shadow(-2px 0px 0x #fff)': 'drop-shadow(2px 0px 0x #fff)'};
    }
    ${props => props.derecha ? 'right: 0': 'left:0'} 
`;
const Div = styled.div`
    position: absolute;
    left: 10%;
    display: flex;
    flex-direction: column;
    top: 25%;
    width: calc(100vw - 55%);
    text-align: center;
    justify-content: space-around;
    align-items: center;

`;
const Img = styled.img`
    width: calc(100vw - 70%);
    height: 60%;
    position: absolute;
    border-radius: 5px;
    right: 10%;
    top: 15%;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,.5);
`;


const H1 = styled.h1`
    color:#fff;
    font-size: 32px;
    margin-bottom: 8px;
    font-weight: 700;
`;

const P = styled.p`
    color: #fff;
    font-size: 1.25rem;
    line-height: normal;
`;

const BotonLlamar = styled.a`
    text-align: center;
    display: flex;
    width: 100%;
    max-width: 350px;
    min-width: 100px;
    box-sizing: border-box;
    
    border-radius: 5px;
        cursor: pointer;
    text-decoration: none;
    color: #fff;
    align-items: center;
    justify-content: center;
    p{
        margin-left: 8px;
    }
    ${props =>props != null && css`
        background: ${props.color};
        border: 1px solid ${props.color};
    `}
`;

export {Slidershow,Slide,TextoSlide,H1,P,Img,Div,BotonLlamar}
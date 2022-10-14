import { FiltreTitle, GenreContainer } from "./styled"
import Tag from "../Tag/Tag"

const HomePageFiltre = () => {
    return(
        <>
            <FiltreTitle>FILTRE POR:</FiltreTitle>
            <GenreContainer>
                <Tag name={'Aventura'}/>
                <Tag name={'Pornt'}/>
                <Tag name={'Rentai'}/>
                <Tag name={'History'}/>
                <Tag name={'Docs'}/>
                <Tag name={'HBO'}/>
                <Tag name={'Netflix'} selected={true}/>
                <Tag name={'Super'}/>
                <Tag name={'Aventura'}/>
                <Tag name={'Aventura'} selected={true}/>
                <Tag name={'Aventura'}/>
                <Tag name={'Jojo Toddynho'}/>
                <Tag name={'Romance'}/>
                <Tag name={'Netflix'}/>
                <Tag name={'Aventura'}/>
                <Tag name={'Aventura'}/>
                <Tag name={'Aventura'}/>
                <Tag name={'Aventura'}/>
            </GenreContainer>
        </>
    )
}

export default HomePageFiltre
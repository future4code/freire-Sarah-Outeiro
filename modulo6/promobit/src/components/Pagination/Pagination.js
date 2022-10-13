import { Div, PageNumber, Seta } from './styled'
import Path from '../../assets/images/pathvector.png'

const Pagination = () => {
    return(
        <Div>
            <PageNumber>1</PageNumber>
            <PageNumber>2</PageNumber>
            <PageNumber>3</PageNumber>
            <PageNumber>4</PageNumber>
            <PageNumber>5</PageNumber>
            <Seta src={Path} alt='Próxima página'/>
            <PageNumber>Última</PageNumber>
        </Div>
    )
}

export default Pagination
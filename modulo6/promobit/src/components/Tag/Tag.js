import { TagBody } from './styled'
import XVector from '../../assets/images/xvector.png'

const Tag = ({name, selected}) => {
    return(
        <TagBody selected={selected}>
            {name}
            {selected ? <img src={XVector} alt='X'/> : null}
        </TagBody>
    )
}

export default Tag
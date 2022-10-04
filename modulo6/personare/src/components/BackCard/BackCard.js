import { backImage } from '../../constants/urls'

const BackCard = (props) => {
    return(
        <>
            <div onClick={() => props.onClick()}>
                <img src={backImage} alt='Backside Tarot Card'/>
            </div>
        </>
    )
}

export default BackCard
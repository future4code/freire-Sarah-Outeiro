export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToCards = (navigate) => {
    navigate('/cards')
}

export const goToCardDetail = (navigate, id) => {
    navigate(`/carrddetail/${id}`)
}
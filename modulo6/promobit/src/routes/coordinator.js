export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToDetail = (navigate, movie) => {
    navigate(`/detail`, {state: movie})
}
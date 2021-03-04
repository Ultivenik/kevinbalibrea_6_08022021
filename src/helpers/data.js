import data from '../../FishEyeDataFR.json';


export const getPhotographerById = ({id}) => data.photographers.find((photographer) => photographer.id === id)
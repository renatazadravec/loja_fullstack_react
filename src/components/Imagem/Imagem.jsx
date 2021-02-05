export const Imagem = ({name}) => {
    return(<img src={require('../../images/'+name).default}/>)
}
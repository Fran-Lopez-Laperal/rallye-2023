import "./bulding.css"
import placa from "../../assets/images/placa2023.jpeg";


function Building() {

    return (
        <>
            <div className="building">
                <h1>Estamos creando la Web para el rallye de Pontevedra 2023</h1>
                <img src={placa} alt="" />
            </div>
        </>
    )
}

export default Building;
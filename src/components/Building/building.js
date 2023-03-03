import "./bulding.css"
import placa from "../../assets/images/placa2023.png";


function Building() {

    return (
        <>
            <div className="building">
                <h1>Web Rallye de Pontevedra 2023 en construcción</h1>
                <img src={placa} alt="" />
            </div>
        </>
    )
}

export default Building;
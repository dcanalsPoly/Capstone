import './ReportForm.css';

function ReportForm  (props){
    return(
        <div className="containerReport">

            <form>

            <p className>
            <label>Tipo de error:</label>
            <select placeholder="Elige un error">
                <option value="Data">Error en la data</option>
                <option value="Grafico">Error en gráficas</option>
                <option value="Otro">Otro error</option>
            </select><br/>

            <label>Descripción:</label><br/>
            <textarea placeholder="Dá mas detalles sobre el error..." className="textAreaRep"></textarea>
            </p>
            </form>
        </div>
    );
}
export default ReportForm;
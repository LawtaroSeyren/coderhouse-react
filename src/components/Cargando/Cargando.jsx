import './Cargando.css'
import gear from '../../Images/gear.gif'

const Cargando = () => {
  return (
    <div className="loading">
    <h3>Cargando...</h3>

    <img className = "imgLoading" src={gear} />
    <div className = "container divButton">
    </div>

</div>
  )
}

export default Cargando
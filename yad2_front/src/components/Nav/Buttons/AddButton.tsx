import { Link } from 'react-router-dom'
import PlusIco from '../../../assets/icons/plus.svg';



export default function AddButton() {
    return (
        <button >
            <Link className='btn-green flex' to={'/personal/publish'}>

                <img src={PlusIco} alt="plus" height='24' />


                <span>פרסום מודעה</span>
            </Link>
        </button>
    )
}
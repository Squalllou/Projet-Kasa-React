import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import '../styles/Collapse.sass'

function Collapse({ titre, children, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false) /** destructuration de tableau contenant isopen utilisant la fonction setisopen et utilisant usestatea false pour avoir un etat de base */
  const toggle = () => setIsOpen(!isOpen) /** fonction fleche qui va servir a changer l'etat de isopen */

  return (
    <div className={`collapse collapse--${variant}`}>
      <h2 className="collapse__title">
        {titre}
        <FaChevronUp
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`} /** le nom de la classe est definit par l'etat de isopen si c'est true elle prend arrow--open sinon rien */
          onClick={toggle} /** gestion de l'evenement du clic sur le chevron */
        />
      </h2>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  )
}

export default Collapse

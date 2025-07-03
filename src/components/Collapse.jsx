import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import '../styles/Collapse.sass'

function Collapse({ titre, children, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={`collapse collapse--${variant}`}>
      <h2 className="collapse__title">
        {titre}
        <FaChevronUp
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
          onClick={toggle}
        />
      </h2>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  )
}

export default Collapse

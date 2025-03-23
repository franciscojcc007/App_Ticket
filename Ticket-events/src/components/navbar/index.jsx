import { useState } from 'react';

const Navbar = ({onSearch}) => {
  const [search, setSearch] = useState('')

  const handInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <div>
      <p>Eventos</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  )
}

export default Navbar;
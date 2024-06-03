export function Nav() {
  const links = [
    { path: '#', name: "Sobre" },
    { path: '#projects', name: "Projetos" },
    { path: '#contact', name: "Contato" },
  ]

  return (
    <nav >
      <ul className="flex gap-8">
        {links.map(({ name, path }) => (
          <li className="nav">
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
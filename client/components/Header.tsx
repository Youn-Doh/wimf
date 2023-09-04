import Nav from './Nav'

export default function Header() {
  return (
    <>
      <header className="header-container">
        <div className="logo-container">
          <img className="head-logo" src="./client/images/wimf-round.png" />
          <Nav />
        </div>
      </header>
    </>
  )
}

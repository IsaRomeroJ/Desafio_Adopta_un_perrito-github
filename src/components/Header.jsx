import './Header.css';

function Header({ titulo }) {
  return (
    <>
      <header className="py-3">
        <div>
          <h1>{titulo}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
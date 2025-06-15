import { useEffect } from "react";
import BalrogPage from './BalrogPage/BalrogPage';

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = `/favicon.ico?v=${new Date().getTime()}`; // força o cache a atualizar
    }
  }, []);

  return <BalrogPage />;
}

export default App;

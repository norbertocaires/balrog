import React from 'react';
import './BalrogPage.css';
import balrogImage from '../assets/balrog.jpg'; // Você precisa adicionar essa imagem

const BalrogPage = () => {
  return (
    <div className="balrog-container">
      <h1>🔥 Balrog 🔥</h1>
      <img src={balrogImage} alt="Balrog" className="balrog-image" />
      <section className="balrog-story">
        <h2>História</h2>
        <p>
          Os Balrogs são criaturas poderosas e demoníacas da Terra-média, originalmente Maiar corrompidos por Morgoth, o primeiro Senhor do Escuro. Com chamas e sombras ao seu redor, eles espalhavam medo por onde passavam.
        </p>
        <p>
          Um dos Balrogs mais famosos aparece em <em>O Senhor dos Anéis: A Sociedade do Anel</em>, nas Minas de Moria. Conhecido como Durin’s Bane (A Perdição de Durin), ele enfrentou Gandalf em uma batalha épica na Ponte de Khazad-dûm.
        </p>
        <p>
          Gandalf confrontou o Balrog com as palavras: <strong>"Você não passará!"</strong>. Ambos caíram no abismo, e lutaram por dias até Gandalf finalmente vencer, mas ao custo de sua própria vida – retornando depois como Gandalf, o Branco.
        </p>
      </section>
    </div>
  );
};

export default BalrogPage;

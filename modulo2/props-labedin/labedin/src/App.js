import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Sarah Diniz Outeiro" 
          descricao="Oi, eu sou a Sarah. Sou aluna da Labenu. Descobri que amo desenvolver interfaces e mais especificamente, trabalhar nelas para deixá-las com um design lindo usando CSS e mais clara possível para o usuário. Já fazia isso antes no e-commerce que tinha, mas agora trabalhando com códigos, tenho maior liberdade para deixar os projetos melhores ainda e muito bem estilizados."
        />
      
        <ImagemButton 
          imagem="https://e7.pngegg.com/pngimages/182/131/png-clipart-computer-icons-scalable-graphics-file-format-font-down-arrow-angle-symbol.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container-small">
        <CardPequeno
          imagem="https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png"
          email="sarahdinizouteiro@gmail.com"
        />
        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/883/1005/png-transparent-computer-icons-taxi-mougharbel-address-logo-cdr-heart-monochrome-photography.png"
          endereco="Rua Sarah Outeiro"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aprendendo e ganhando experiência com front-end, usando HTML5, CSS3, Javacript e REACT" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/57/57589.png" 
          nome="Loja Prisma Lab" 
          descricao="CEO da Loja Prisma Lab 2018-2022 (Loja de acessórios criativos para câmeras fotográficas), onde trabalhei com a plataforma Nuvemshop, também com a administração de finança, estoque, social media e marketing." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;

import Products from '../Products';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_FT_PVD6152._CB414514693_.jpg"
          alt="banner_image"
        />

        <div className="home__row">
          <Products
            id="1"
            title="Parafusadeira/furadeira A Bateria, Carregador Bivolt Automático, Pfv 012 Vonder 12 V"
            price={243.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51OAL0TlojL._AC_SL1000_.jpg"
          />
          <Products
            id="2"
            title="Novo Echo Dot (4ª Geração): Smart Speaker com Alexa - Cor Preta"
            price={284.5}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Products
            id="3"
            title="Smart TV 55' 4K Samsung UN55TU8000GXZD, Crystal UHD, Borda Infinita, Alexa Built In, Visual Livre de Cabos, Modo Ambiente Foto, Controle Único"
            price={2.789}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/615YEQwQmRL._AC_SL1200_.jpg"
          />

          <Products
            id="4"
            title="Controle Dualshock 4 - PlayStation 4 - Preto"
            price={264.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Ieq0twp%2BL._AC_SL1000_.jpg"
          />

          <Products
            id="5"
            title="Celular Xiaomi Redmi Note 9 Pro 64gb / 6gb Ram Tela 6.67' Versão Global - Interstellar Grey - Cinza"
            price={1.709}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61EE6j8GHvL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Products
            id="6"
            title="Mouse Pad Grande 70 X 30 Cm Gamer, Havit, Hv-MP861, Preto"
            price={52.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51YFYzyTHnL._AC_SL1000_.jpg"
          />
        </div>
      </div>

      
    </div>
  )
}

export default Home;
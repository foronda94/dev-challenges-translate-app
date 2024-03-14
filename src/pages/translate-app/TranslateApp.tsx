import { Translate } from '../../styled-components/trasnlateApp';
import logoImg  from '../../assets/img/logo.svg';

export const TranslateApp = () => {
    return (
      <Translate>
        <div className='container__logo'>
          <img src={logoImg} alt="logo-dev" />
        </div>
      </Translate>
    )
  }
  
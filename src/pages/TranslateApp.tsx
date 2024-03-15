import { Translate } from '../styled-components/trasnlateApp';
import logoImg  from '../assets/img/logo.svg';
import { BoxTranslate } from '../components/BoxTranslate';
import { useState } from 'react';

export const TranslateApp = () => {

  const [activeFilterTranslation, setActiveFilterTranslation] = useState('firstFilter');
  const [activeFilterTranslated, setActiveFilterTranslated] = useState('firstFilter');

  const handleFilterClick = (filter: string, translation: boolean) => {
    if( translation === true) {
      setActiveFilterTranslation(filter);
      return
    }

    setActiveFilterTranslated(filter);
  }

  return (
    <Translate>
      <div className='container__logo'>
        <img src={logoImg} alt="logo-dev" />
      </div>
      <div className='box-translate'>
        <BoxTranslate 
          detectLanguage="Detect Language" 
          activeFilter={activeFilterTranslation} 
          handleFilterClick={handleFilterClick}
          translation={true}
        />
        <BoxTranslate activeFilter={activeFilterTranslated}  handleFilterClick={handleFilterClick} />
      </div>
    </Translate>
  )
}
  
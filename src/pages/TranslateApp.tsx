import { Translate } from '../styled-components/trasnlateApp';
import logoImg  from '../assets/img/logo.svg';
import { BoxTranslate } from '../components/BoxTranslate';
import { useState } from 'react';
import { ColorsApp } from '../utilies/ColorApp';

export const TranslateApp = () => {

  const [activeFilterTranslation, setActiveFilterTranslation] = useState('firstFilter');
  const [activeFilterTranslated, setActiveFilterTranslated] = useState('firstFilter');
  const [text, setText] = useState("Hello, how are you?");

  const handleFilterClick = (filter: string, translation: boolean) => {
    if( translation === true) {
      setActiveFilterTranslation(filter);
      return
    }

    setActiveFilterTranslated(filter);
  }

  const handleChangeText:React.ChangeEventHandler<HTMLTextAreaElement> = ({target}) => {
    setText(target.value);
  }

  return (
    <Translate>
      <div className='container__logo'>
        <img src={logoImg} alt="logo-dev" />
      </div>
      <div className='box-translate'>
        <BoxTranslate 
          activeFilter={activeFilterTranslation} 
          backgroundColor={ColorsApp.midnightTransparent}
          detectLanguage="Detect Language"
          handleFilterClick={handleFilterClick}
          handleChangeText={handleChangeText}
          initialText={text}
          translation={true}
        />
        <BoxTranslate 
          activeFilter={activeFilterTranslated}  
          backgroundColor={ColorsApp.slateTransparent}
          detectLanguage=""
          handleFilterClick={handleFilterClick} 
          handleChangeText={handleChangeText}
          initialText=""
          translation={false}
        />
      </div>
    </Translate>
  )
}
  
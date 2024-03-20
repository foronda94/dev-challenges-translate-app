import Swal from 'sweetalert2';
import { Translate } from '../styled-components/trasnlateApp';
import logoImg  from '../assets/img/logo.svg';
import { BoxTranslate } from '../components/BoxTranslate';
import { useEffect, useState } from 'react';
import { ColorsApp } from '../utilies/ColorApp';
import useTranslate from '../hooks/useTranslate';

export const TranslateApp = () => {

  const { workTranslated, apiTranslated } = useTranslate();
  console.log('workTranslated', workTranslated);
  
  const [activeFilterTranslation, setActiveFilterTranslation] = useState('englishFilter');
  const [activeFilterTranslated, setActiveFilterTranslated] = useState('frenchFilter');
  const [textTranslation, setTextTranslation] = useState("Hello, how are you?");
  const [textTranslated, setTextTranslated] = useState("");
  const [langPairTranslation, setLangPairTranslation] = useState("en");
  const [langPairTranslated, setLangPairTranslated] = useState("fr");

  console.log('langPairTranslation', langPairTranslation);
  console.log('langPairTranslated', langPairTranslated);

  const handleFilterClick = (filter: string, translation: boolean, langPair: string) => {
    console.log('filter-', filter);
    
    if( translation === true && activeFilterTranslated !== filter) {
      setActiveFilterTranslation(filter);
      setLangPairTranslation(langPair);
      return
    }

    if( translation === false && activeFilterTranslation !== filter ) {
      setActiveFilterTranslated(filter);
      setLangPairTranslated(langPair);
    }

    Swal.fire('Por favor seleccione dos idiomas distintos');

  }

  const handleChangeText:React.ChangeEventHandler<HTMLTextAreaElement> = ({target}) => {
    setTextTranslation(target.value);
  }

  const handleTranslated = (currenWorkTranslation: string, langPairTranslation: string, langPairTranslated: string) => {
    apiTranslated(currenWorkTranslation, langPairTranslation, langPairTranslated)
  }
  
  useEffect(() => {
    const currenWorkTranslation = textTranslation.replace(/ /g, '%20');
    console.log('currenWorkTranslation', currenWorkTranslation);
    
    apiTranslated(currenWorkTranslation, langPairTranslation, langPairTranslated);
  }, [textTranslation, langPairTranslation, langPairTranslated])
  

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
          handleChangeText={handleChangeText}
          handleFilterClick={handleFilterClick}
          handleTranslated={handleTranslated}
          initialText={textTranslation}
          translation={true}
        />
        <BoxTranslate 
          activeFilter={activeFilterTranslated}  
          backgroundColor={ColorsApp.slateTransparent}
          detectLanguage=""
          handleChangeText={handleChangeText}
          handleFilterClick={handleFilterClick} 
          handleTranslated={handleTranslated}
          initialText={workTranslated}
          translation={false}
        />
      </div>
    </Translate>
  )
}
  
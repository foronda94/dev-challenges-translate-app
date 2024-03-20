import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
  
  const useTranslate = () => {

    const [ workTranslated , setWorkTranslated ] = useState();

    /*useEffect(() => {
        apiTranslated('en', 'fr');
    }, [])*/
    

    const apiTranslated = async(currenWorkTranslation: string, langPairTranslation: string, langPairTranslated: string) => {
      try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${currenWorkTranslation}&langpair=${langPairTranslation}|${langPairTranslated}`);

        const translated = await response.json();
        if( translated.responseData.translatedText === "PLEASE SELECT TWO DISTINCT LANGUAGES") {
          Swal.fire('Por favor seleccione dos idiomas distintos');
          return
        }
        setWorkTranslated(translated.responseData.translatedText);
      } catch (error) {
        console.log('error', error);
      }
    }

    return {
      // Properties
      workTranslated,

      // Methods
      apiTranslated

    }
  }
  
  export default useTranslate
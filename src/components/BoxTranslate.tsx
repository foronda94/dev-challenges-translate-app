import { Box } from "../styled-components/BoxTranslate";
import sound from '../assets/img/sound_max_fill.svg';
import copy from '../assets/img/Copy.svg';
import alfa from '../assets/img/Sort_alfa.svg';


export const BoxTranslate = ({ detectLanguage, activeFilter, handleFilterClick, translation }: any) => {
  
  return (
    <Box>
      <div className='box-translate__header'>
        <p>{detectLanguage}</p>
        <button
          className={ activeFilter === 'firstFilter' ? 'box-translate__header-button active' : 'box-translate__header-button' } 
          onClick={ () => handleFilterClick('firstFilter', translation) }
        >
          English
        </button>
        <button
          className={ activeFilter === "secondFilter" ? 'box-translate__header-button active' : 'box-translate__header-button' }
          onClick={ () => handleFilterClick('secondFilter', translation) }
        >
          French
        </button>
        <button
          className={ activeFilter === "thirdFilter" ? 'box-translate__header-button active' : 'box-translate__header-button' }
          onClick={ () => handleFilterClick('thirdFilter', translation) }
        >
          Spanish
        </button>
      </div>
      <div className='box-translate__body'>
        <textarea maxLength={500}/>
        <span>19/500</span>
      </div>
      <div className='box-translate__footer'>
        <div>
          <span className='box-translate__footer-span'>
            <img className='box-translate__footer-img' src={sound} alt="sound" />
          </span>
          <span className='box-translate__footer-span'>
            <img className='box-translate__footer-img' src={copy} alt="copy" />
          </span>
        </div>
        <button className="box-translate__footer-button">
          <span>
            <img src={alfa} alt="alfa" />
          </span>
          Translate
        </button>
      </div>
    </Box>
  )
}

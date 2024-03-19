import { Box } from "../styled-components/BoxTranslate";
import sound from '../assets/img/sound_max_fill.svg';
import copy from '../assets/img/Copy.svg';
import alfa from '../assets/img/Sort_alfa.svg';
import expandDown from '../assets/img/Expand_down.svg';
import horizontalBtn from '../assets/img/Horizontal_top_left_main.svg';

export const BoxTranslate = ({ activeFilter, backgroundColor, detectLanguage, handleFilterClick, handleChangeText, initialText, translation }: any) => {

  
  return (
    <Box background={backgroundColor}>
      <div className='box-translate__header'>
        <div className={translation === true ? "box-header__display-translation" : "box-header__display-translation box-header__display"}>
          {detectLanguage.length > 0 ? <p>{detectLanguage}</p> : "" }
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
          <span className='box-translate__header-button-expandDown'>
            <img className='' src={expandDown} alt="sound" />
          </span>
        </div>
        {
          translation !== true 
          ?
            <div>
              <span className='box-translate__footer-span mt-2'>
                <img className='box-translate__footer-img' src={horizontalBtn} alt="copy" />
              </span>
            </div>
          :
            ""
        }
      </div>
      <div className='box-translate__body'>
        <textarea 
          maxLength={500} 
          defaultValue={initialText} 
          onChange={(e) => handleChangeText(e)}
          disabled={translation === true ? false : true }
        />
        { translation === true ? <span>{initialText.length}/500</span> : "" }
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
        {
          translation === true 
          ?
            <button className="box-translate__footer-button">
              <span>
                <img src={alfa} alt="alfa" />
              </span>
              Translate
            </button>
          :
            ""
        }
      </div>
    </Box>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'
import EnglishImg from './images/gb.png';
import GermanImg from './images/de.png';
import FrenchImg from './images/fr.png';
import PortugueseImg from './images/pt.png';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English <img src={EnglishImg} alt="English" />
      <input type="radio" value="de" name="language" /> German <img src={GermanImg} alt="German" />
      <input type="radio" value="fr" name="language" /> French <img src={FrenchImg} alt="French" />
      <input type="radio" value="pt" name="language"/> Portuguese <img src={PortugueseImg} alt="Portuguese" />
    </div>
  )
}

export default LanguageSelector
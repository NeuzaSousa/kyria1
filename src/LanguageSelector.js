import React from 'react'
import { useTranslation } from 'react-i18next'
import EnglishImg from './images/gb.png';
import GermanImg from './images/de.png';
import FrenchImg from './images/fr.png';
import PortugueseImg from './images/pt.png';
import Container from 'react-bootstrap/Container';
//import Dropdown from 'react-bootstrap/Dropdown';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Container fluid className="container1">
      <select id="flags" name="language" onChange={changeLanguage}>
        <option value="en" defaultChecked> EN <img src={EnglishImg} alt="English" /> </option>
        <option value="de"> DE <img src={GermanImg} alt="German" /> </option>
        <option value="fr"> FR <img src={FrenchImg} alt="French" /> </option>
        <option value="pt"> PT <img src={PortugueseImg} alt="Portuguese" /> </option>
      </select>
    </Container>

  )
}

export default LanguageSelector
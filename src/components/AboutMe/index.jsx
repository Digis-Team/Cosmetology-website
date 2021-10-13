import React from 'react';
import { ABOUT_ME_ICONS, BUTTON_LINK } from '../../constants/aboutMe';

export const AboutMe = () => {
  return(
  <div className="about-me-container">
    <div className="about-me-line"/>
    <div className="about-me-text-parent">
      <h1>About me</h1>
    </div>
    <div className="about-me-paragraph">Лікар-косметолог з 5-річним стажем та медичною освітою. Запишіться на безкоштовну 
    консультацію або пройдіть онлайн тест на визначення необхідного догляду за шкірою</div>
    <div className="about-me-icons">
      {ABOUT_ME_ICONS.map((item) => {
        return(
          <div className="about-me-icon">
            <a href={item.href} className="icon-link">
              <i className= {item.iconClass}></i>
            </a>
            <p className="about-me-icon-text">{item.titleText}</p>
          </div>
        )
      })}
    </div>
    <button className="about-me-button">
      <a className="button-link" href={BUTTON_LINK}>See more <i class="fas fa-arrow-right"></i></a>
    </button>
  </div> 
  )
}

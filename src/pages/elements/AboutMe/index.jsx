import React from 'react';
import { ABOUT_ME_ICONS, BUTTON_LINK } from '../../../constants';

export const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-line" />
    <div className="about-me-text-parent">
      <h1>About me</h1>
    </div>
    <div className="about-me-paragraph">
      Лікар-косметолог з 5-річним стажем та медичною освітою. Запишіться на безкоштовну
      консультацію або пройдіть онлайн тест на визначення необхідного догляду за шкірою
    </div>
    <div className="about-me-icons">
      {ABOUT_ME_ICONS.map((item) => (
        <div className="about-me-icon">
          <a href={item.href} className="icon-link">
            <i className={item.iconClass} />
          </a>
          <p className="about-me-icon-text">{item.titleText}</p>
        </div>
      ))}
    </div>
    <button type="button" className="about-me-button">
      <a className="button-link" href={BUTTON_LINK}>
        See more
        <i className="fas fa-arrow-right" />
      </a>
    </button>
  </div>
);

import React from 'react';
import {
  ABOUT_ME_ICONS, BUTTON_LINK, ABOUT_ME_TITLE, SEE_MORE_TITLE, ABOUT_ME_DESCRIPTION,
} from '../../../../constants';

export const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-line" />
    <div className="about-me-text-parent">
      <h1>{ABOUT_ME_TITLE}</h1>
    </div>
    <div className="about-me-paragraph">{ABOUT_ME_DESCRIPTION}</div>
    <div className="about-me-icons">
      {ABOUT_ME_ICONS.map((item) => (
        <div className="about-me-icon" key={item.id}>
          <a href={item.href} className="icon-link">
            <i className={item.iconClass} />
          </a>
          <p className="about-me-icon-text">{item.titleText}</p>
        </div>
      ))}
    </div>
    <button type="button" className="about-me-button">
      <a className="button-link" href={BUTTON_LINK}>
        {SEE_MORE_TITLE}
        <i className="fas fa-arrow-right" />
      </a>
    </button>
  </div>
);

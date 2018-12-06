import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'header';

const Header = ({
  name, surname, whoiam, aboutMe, email,
}) => (
  <section className={baseClassName}>
    <ul className={`${baseClassName}__contacts`}>
      <li className={`${baseClassName}__contacts__contact`}>
        <a className={`${baseClassName}__contacts__contact__link email`} href={`mailto:${email}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 299.997 299.997" xmlSpace="preserve">
            <g>
              <g>
                <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
                  C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
                  c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
                  l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
                  c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
                  c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
                  c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
                  V196.423z"
                />
              </g>
            </g>
          </svg>
          <span className="hide-a11y">Email me</span>
        </a>
      </li>
      <li className={`${baseClassName}__contacts__contact`}>
        <a className={`${baseClassName}__contacts__contact__link linkedin`} href="/hi">
          <svg enableBackground="new 0 0 49.652 49.652" viewBox="0 0 49.652 49.652" xmlns="http://www.w3.org/2000/svg">
            <path d="m29.35 21.298c-2.125 0-3.074 1.168-3.605 1.988v-1.704h-4.002c.052 1.128 0 12.041 0 12.041h4.002v-6.727c0-.359.023-.72.131-.977.29-.72.948-1.465 2.054-1.465 1.448 0 2.027 1.104 2.027 2.724v6.442h4.002.001v-6.905c-.002-3.696-1.977-5.417-4.61-5.417zm-3.608 2.03h-.025c.008-.014.02-.027.025-.041z" />
            <path d="m15.523 21.582h4.002v12.041h-4.002z" />
            <path d="m24.826 0c-13.689 0-24.826 11.137-24.826 24.826 0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826 0-13.689-11.136-24.826-24.826-24.826zm13.165 36.055c0 1.056-.876 1.91-1.959 1.91h-22.581c-1.08 0-1.957-.854-1.957-1.91v-22.844c0-1.055.877-1.91 1.957-1.91h22.581c1.082 0 1.959.856 1.959 1.91z" />
            <path d="m17.551 15.777c-1.368 0-2.264.898-2.264 2.08 0 1.155.869 2.08 2.211 2.08h.026c1.396 0 2.265-.925 2.265-2.08-.027-1.181-.868-2.08-2.238-2.08z" />
          </svg>
          <span className="hide-a11y">Connect with me on LinkedIn</span>
        </a>
      </li>
    </ul>

    <h1 className={`${baseClassName}__name`}>
      {name}
      <span className={`${baseClassName}__name__highlight`}>{surname}</span>
    </h1>

    <h2 className="hide-a11y">Who I am</h2>
    <p className={`${baseClassName}__whoiam`}>{whoiam}</p>

    <h2 className="hide-a11y">About me</h2>
    {aboutMe.map((paragraph, index) => (
      <p key={index} className={`${baseClassName}__about-me`}>{paragraph}</p>
    ))}
  </section>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  whoiam: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  aboutMe: PropTypes.array.isRequired,
};

export default Header;

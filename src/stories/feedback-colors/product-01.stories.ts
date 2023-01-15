import { html, render } from 'lit-html';
import { ColorsFeedback } from '../../global/enums/color.enum';
import { namespace } from '../../global/constants/global.constant';

export default {
  title: 'Color System/Feedback Colors',
};

interface Config {
  scheme: string;
  theme: string;
}

const Template = () => {
  setTimeout(() => {
    // variable declarations
    let config: Config = { scheme: '', theme: '' };

    const deviceDefaultScheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}`;
    const htmlEl = document.documentElement;
    const snipetEl: HTMLElement = document.querySelector('.snipet');
    const schemeRadioFormEl = document.querySelector('#scheme-switcher');

    // function calls
    config.scheme = 'dark'; // color system default scheme
    config.theme = `${namespace}-color-theme-product-01`; // color system default theme
    setTheme();
    render(setSnipet(config), snipetEl);
    toggleScheme(deviceDefaultScheme);

    // event listeners
    window.matchMedia('(prefers-color-scheme: dark)').addListener((mediaQuery) => {
      const devicePreferenceScheme = `${mediaQuery.matches ? 'dark' : 'light'}`;
      toggleScheme(devicePreferenceScheme);
    });

    schemeRadioFormEl.addEventListener('input', (event) => {
      const userSchemePreference = (event.target as HTMLInputElement).value;
      toggleScheme(userSchemePreference);
    });

    // functions
    function setTheme() {
      htmlEl.setAttribute('class', `hydrated ${config.theme}`);
    }

    function toggleScheme(scheme) {
      const radioEl: HTMLInputElement = schemeRadioFormEl.querySelector(`#${scheme}`);

      config.scheme = `${namespace}-color-scheme-${scheme}`;
      radioEl.checked = true;
      htmlEl.setAttribute('class', `hydrated ${config.scheme} ${config.theme}`);
      render(setSnipet(config), snipetEl);
    }

    function setSnipet(config) {
      return html`
        <pre class="language-html">
<code>
<span class="snipet__tag">&lt;</span><span class="snipet__tag">html</span> <span class="snipet__attribute">class</span><span class="snipet__aux">="</span><span class="snipet__value">${config.scheme} ${config.theme}</span><span class="snipet__aux">"</span><span class="snipet__aux">&gt;&lt;/html&gt</span>
</code>
</pre>
      `;
    }
  }, 100);

  return html`
    <div class="snipet"></div>

    <form id="scheme-switcher" class="switcher">
      <ul class="switcher__list">
        <li class="switcher__item">
          <h2>Schemes:</h2>
        </li>
        <li class="switcher__item">
          <input id="light" class="switcher__input" type="radio" name="scheme" value="light" />
          <label class="switcher__label" for="light">Light</label>
        </li>
        <li class="switcher__item">
          <input id="dark" class="switcher__input" type="radio" name="scheme" value="dark" />
          <label class="switcher__label" for="dark">Dark</label>
        </li>
      </ul>
    </form>
    ${Object.values(ColorsFeedback).map((color) => html`<med-base .color=${color}>${color}</med-base>`)}
  `;
};

export const Product01 = Template.bind({});

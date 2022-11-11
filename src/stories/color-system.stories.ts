import { html, render } from 'lit-html';
import { Colors } from '../global/enums/color.enum';

export default {
  title: 'Base',
};

interface Config {
  scheme: string;
  cssCustomProperties: string;
}

const Template = ({ color }) => {
  setTimeout(() => {
    // variable declarations
    let config: Config = { scheme: '', cssCustomProperties: '' };

    const colorHueFactor = '--med-color-hue-factor';
    const neutralHueFactor = '--med-color-neutral-hue-factor';
    const colorSaturationFactor = '--med-color-saturation-factor';
    const neutralSaturationFactor = '--med-color-neutral-saturation-factor';
    const deviceDefaultScheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}`;
    const htmlEl = document.documentElement;
    const snipetEl: HTMLElement = document.querySelector('.snipet');
    const schemeRadioFormEl = document.querySelector('#scheme-switcher');
    const hueRangeEl = document.querySelector('#hue');
    const saturationRangeEl = document.querySelector('#saturation');
    const luminosityRangeEl = document.querySelector('#luminosity');

    // function calls
    config.scheme = 'dark'; // color system default scheme
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

    hueRangeEl.addEventListener('input', (event) => {
      htmlEl.style.setProperty(`${colorHueFactor}`, `${(event.target as HTMLInputElement).value}`);
      htmlEl.style.setProperty(`${neutralHueFactor}`, `${(event.target as HTMLInputElement).value}`);
      config.cssCustomProperties = htmlEl.getAttribute('style').toString();
      render(setSnipet(config), snipetEl);
    });

    saturationRangeEl.addEventListener('input', (event) => {
      htmlEl.style.setProperty(`${colorSaturationFactor}`, `${(event.target as HTMLInputElement).value}%`);
      htmlEl.style.setProperty(`${neutralSaturationFactor}`, `${(event.target as HTMLInputElement).value}%`);

      config.cssCustomProperties = htmlEl.getAttribute('style').toString();
      render(setSnipet(config), snipetEl);
    });

    luminosityRangeEl.addEventListener('input', (event) => {
      htmlEl.style.setProperty(`--med-color-neutral-luminosity-factor-1`, `${Number((event.target as HTMLInputElement).value) * -1}%`);
      htmlEl.style.setProperty(`--med-color-neutral-luminosity-factor-2`, `${(event.target as HTMLInputElement).value}%`);
      htmlEl.style.setProperty(`--med-color-neutral-luminosity-factor-3`, `${(event.target as HTMLInputElement).value}%`);

      config.cssCustomProperties = htmlEl.getAttribute('style').toString();
      render(setSnipet(config), snipetEl);
    });

    // functions
    function toggleScheme(scheme) {
      const radioEl: HTMLInputElement = schemeRadioFormEl.querySelector(`#${scheme}`);

      config.scheme = scheme;
      radioEl.checked = true;
      htmlEl.setAttribute('color-scheme', `${scheme}`);
      render(setSnipet(config), snipetEl);
    }

    function setSnipet(config) {
      return html`
        <pre class="language-html">
<code>
<span class="snipet__tag">&lt;</span><span class="snipet__tag">html</span>
  <span class="snipet__attribute">color-scheme</span><span class="snipet__aux">="</span><span class="snipet__value">${config.scheme}</span><span class="snipet__aux">"</span>
  <span class="snipet__attribute">style</span><span class="snipet__aux">="</span><span class="snipet__value">${config.cssCustomProperties}</span><span class="snipet__aux">"</span><span class="snipet__tag">&gt;
&lt;/html&gt</span>
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

    <ul class="switcher__list">
      <li class="switcher__item">
        <h2>Theme Config:</h2>
      </li>
      <li class="switcher__item">
        <input class="hue" id="hue" type="range" name="hue" min="0" max="360" value="0" />
        <label class="switcher__label" for="hue">hue</label>
      </li>
      <li class="switcher__item">
        <input class="saturation" id="saturation" type="range" name="saturation" min="0" max="100" value="0" />
        <label class="switcher__label" for="saturation">saturation</label>
      </li>
      <li class="switcher__item">
        <input class="luminosity" id="luminosity" type="range" name="luminosity" min="0" max="50" value="0" />
        <label class="switcher__label" for="luminosity">contrast</label>
      </li>
    </ul>

    <med-base .color=${color}>teste</med-base>
  `;
};

export const ColorSystem = Template.bind({});
ColorSystem.argTypes = {
  color: {
    options: Object.values(Colors),
    control: { type: 'select' },
    description: 'Defines the component color.',
    table: {
      type: { summary: Object.values(Colors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};

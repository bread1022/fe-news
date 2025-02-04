import createEl from '../utils/util.js';

class RollingBar {
  LEFT = 'left';
  RIGHT = 'right';
  rollingBar;
  movePanel;
  constructor(rollingBarInfo) {
    this.ROLLING_LINK_PRESS = rollingBarInfo.newsTitle;
    this.classNames = rollingBarInfo.postionClassName;
    this.TRANSLATE_TIME = rollingBarInfo.autoAnimationInfo.transitionDuration;
    this.LEFT_DELAY_TIME = rollingBarInfo.autoAnimationInfo.leftDelayTime;
    this.TIME_DIFF = rollingBarInfo.autoAnimationInfo.timeDiff;
    this.rafState = true;
  }

  init(rollingData) {
    this.setTemplate(rollingData);
    this.autoMovePanel();
    this.addEventRollingBar();
    return this;
  }

  setTemplate(rollingData) {
    this.rollingBar = createEl('section', 'rolling-container');
    this.rollingBar.innerHTML = this.classNames.reduce((template, className) => {
      const titleData = className === this.LEFT ?
      rollingData.titleLeft : rollingData.titleRight;
      template += `<div class="rolling-box">
      <a class="link-press">${this.ROLLING_LINK_PRESS}</a>
      <div class="flick-container">
        <ul class="flick-panels ${className}">
        ${titleData.reduce((panelTemplate, title) => {
          panelTemplate += `<li class="flick-panel">${title}</li>`;
          return panelTemplate;
        }, '')}
        </ul>
      </div>
    </div>`;
      return template;
    }, '');
  }

  autoMovePanel() {
    let leftTime = null;
    let rightTime = null;
    this.movePanel = (currentTime) => {
      if (!leftTime) leftTime = currentTime;
      const leftTimeDiff = currentTime - leftTime;
      const rightTimeDiff = !rightTime ? 0 : currentTime - rightTime;

      if (leftTimeDiff >= this.LEFT_DELAY_TIME) {
        this.translatePanel.bind(this)(this.LEFT);
        leftTime = null;
        rightTime = currentTime;
      }
      if (rightTimeDiff >= this.TIME_DIFF) {
        this.translatePanel.bind(this)(this.RIGHT);
        rightTime = null;
      }
      if (this.rafState) requestAnimationFrame(this.movePanel);
    };
    requestAnimationFrame(this.movePanel);
  }

  translatePanel(className) {
    const panel =
      className === this.LEFT
        ? this.rollingBar.querySelector('.left')
        : this.rollingBar.querySelector('.right');
    panel.style.transitionDuration = this.TRANSLATE_TIME;
    panel.style.transform = `translateY(-100%)`;
    panel.ontransitionend = () => this.appendPanel(panel);
  }

  appendPanel(panel) {
    panel.removeAttribute('style');
    panel.appendChild(panel.firstElementChild);
  }

  addEventRollingBar() {
    this.rollingBar.addEventListener('mouseover', this.mouseInOutRollingBar.bind(this));
    this.rollingBar.addEventListener('mouseout', this.mouseInOutRollingBar.bind(this));
  }

  mouseInOutRollingBar({ target, type }) {
    if(target.tagName !== 'LI') return;
    if(type === 'mouseover') {
      this.rafState = false;
    } else {
      this.rafState = true;
      requestAnimationFrame(() => this.movePanel());
    }
  }

  getAutoRollingBar() {
    return this.rollingBar;
  }
}

export default RollingBar;
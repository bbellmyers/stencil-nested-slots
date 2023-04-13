import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hp5-faq-accordion',
  styleUrl: 'hp-faq-accordion.css',
  shadow: true,
})
export class HpFaqAccordion {
  render() {
    return (
      <Host>
        <p>hp5-faq-accordion</p>
        <slot />
      </Host>
    );
  }
}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hp5-faq-accordion-container',
  styleUrl: 'hp-faq-accordion-container.css',
  shadow: true,
})
export class HpFaqAccordionContainer {
  render() {
    return (
      <Host>
        hp5-faq-accordion-container
        <slot />
      </Host>
    );
  }
}

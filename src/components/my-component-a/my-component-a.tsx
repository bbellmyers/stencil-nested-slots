import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-a',
  styleUrl: 'my-component-a.css',
  shadow: true,
})
export class MyComponentA {
  render() {
    return (
      <Host>
        my-component-a
        <slot />
      </Host>
    );
  }
}

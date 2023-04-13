import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-b',
  styleUrl: 'my-component-b.css',
  shadow: true,
})
export class MyComponentB {
  render() {
    return (
      <Host>
        Component B
        <slot />
      </Host>
    );
  }
}

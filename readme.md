# Demonstrate hydration nested slot bug

## Issue description
Given two components which render a simple slot one nested inside the other, a
hydrated version of the page fails to render correctly when the live component
library is also loaded on that page.

```
my-component-a
 (a rendered content)
 => slotted my-component-b
   (b rendered content)
    ==> slotted HTML content
```

## Expected behavior
Pure client-side rendering should look exactly the same as the hydrated + client-side page.

## Actual behavior
If the tag name contains non-alphnumeric characters, or possibly fails to follow
some other rules (in a regex maybe?), the nested component fails to render correctly,
duplicating the rendered content inside its own slot.

## To run the example:
1. `npm install`
2. `npm run hydrate`
3. visit localhost:3000 in your browser.
4. click "client-side only" link.  Note the two columns are the same height
5. click "hydrated + client-side" link.  Note the duplicated content on the right
   hand side.

The only significant difference between my-component- comonents and hp5-faq-accordion- components
are the tag names  strings inside them.  This suggests the tag name is somehow causing the issue.

hp5-faq-accordion is a valid custom-element name as I read https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name

Bruce Bell-Myers
Healthpartners
https://github.com/bbellmyers

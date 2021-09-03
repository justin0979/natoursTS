# Natours Project from Udemy course

My `react-ts` configuration is used for development.

Below is from that repositories `README.md`.

## Base Development Envrionment with React

Natours project from Udemy course:
[Advanced CSS and Sass](https://www.udemy.com/course/advanced-css-and-sass/)

Development environment is from my repo: [devconfig](https://github.com/justin0979/devconfig/tree/react-ts)

## Adding Font Awesome

Follow docs for [React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react).

Install packages:

```sh
npm i --save @fortawesome/fontawesome-svg-core \
npm install --save @fortawesome/free-solid-svg-icons \
npm install --save @fortawesome/react-fontawesome
```

Using locally, setup in `SectionFeatures.tsx`:

```typescript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SectionFeatures: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};
```

Using globally, setup in `App.tsx`:

```typescript
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faMap,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { App } from './App';

library.add(fab, faCheckSquare, faCoffee);

ReactDOM.render(<App />, document.getElementById('root'));
```

then use in `SectionFeatures.tsx` with size prop:

```typescript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionFeatures: React.FC = () => {
  return (
    <section id="features">
      <h1>Features</h1>
      <FontAwesomeIcon size="4x" icon="map" />
      <FontAwesomeIcon size="lg" icon="coffee" />
    </section>
  );
};
```

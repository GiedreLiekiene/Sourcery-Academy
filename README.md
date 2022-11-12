# Front End Toolkit

## Starter Template

This project is a set of best practices brought to you by the team at Devbridge, which will allow you to start project quickly, non depending from any javascript framework.
Features, that are already here:

- Webpack dev server with Hot Module Reload feature.
- Linting integration and configuration.
- Pre-commit hooks, to keep project "clean".
- Component based development approach, which will help to transfer code on whatever front-end framework you want or just use it as a plain HTML site generator.
- Prepared code hygiene tools, like editor config, nvmrc, npmrc files, and small things, like npm scripts.

## Installation

Switch to right node version using [nvm](https://github.com/creationix/nvm). (Which node version is required defined in [.nvmrc](https://github.com/devbridge/Front-End-Toolkit/blob/v2-dev/.nvmrc) file):

    $ nvm use [version number from .nvmrc file]

Inside project folder install dependencies from package.json:

    $ npm i

To start developing run npm script command:

    $ npm start

    $ npm run dev

    $ npm run build

    $ npm run stylelint:lint

    $ npm run stylelint:fix

    $ npm run prettier:check

    $ npm run prettier:fix

    $ npm run ts:lint

    $ npm run ts:fix

## Git Guidelines

New features should be developed in separate branches starting with the `feat/` or `fix/` prefix, for example: `feat/SR22AS-80_some-new-feature`.
The `SR22AS-XX` part is an issue number from JIRA, if there's no issue for this feature, feature key can be omitted.

Start commit messages with `JIRA issue number` + `Fix`, `Add`, `Remove`, `Change`, etc. instead of `Fixed`, `Added`, `Removed`, `Changed`.

Commit messages should describe what will be done with this commit. Some examples:

- SR22AS-80 Add lodash to devDependencies
- SR22AS-80 Change the layout of the feed page

You may specify multiple issue number if commit is relevant for them or if using subtasks:

- SR22AS-80, SR22AS-81 Change the layout of the feed page

This enables to easily locate a branch or related commits directly from JIRA story or lookup story when looking at commit history.

```

```

## HTML/CSS Guidelines

### General

1. Indentation

Indent by 2 spaces at a time.
Don’t use tabs or mix tabs and spaces for indentation.

```css
.example {
  color: blue;
}
```

2. Capitalization

Use only lowercase.
All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).

```html
<!-- Not recommended -->
<a href="/">Home</a>
```

```html
<!-- Recommended -->
<img src="google.png" alt="Google" />
```

### HTML

1. Semantics

Use HTML according to its purpose.

Use elements (sometimes incorrectly called “tags”) for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>
```

```html
<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

2. Multimedia Fallback

Provide alternative contents for multimedia.

For multimedia, such as images, videos, animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without @alt, and other users may have no way of understanding what video or audio contents are about either.

(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".)

```html
<!-- Not recommended -->
<img src="spreadsheet.png" />
```

```html
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot." />
```

### CSS

1. Class naming

Use meaningful or generic class names.

Instead of presentational or cryptic names, always use class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.

```css
/* Not recommended: meaningless */
.yee-1901 {
}

/* Not recommended: presentational */
.button-green {
}
.clear {
}
```

```css
/* Recommended: specific */
.gallery {
}
.login {
}
.video {
}

/* Recommended: generic */
.aux {
}
.alt {
}
```

2. Class name style

Use class names that are as short as possible but as long as necessary.

Try to convey what a class is about while being as brief as possible.

Using class names this way contributes to acceptable levels of understandability and code efficiency.

```css
/* Not recommended */
.navigation {
}
.atr {
}
```

```css
/* Recommended */
.nav {
}
.author {
}
```

3. Shorthand Properties

Use shorthand properties where possible.

CSS offers a variety of shorthand properties (like font) that should be used whenever possible. **Except** in cases where only one value is needed.

Using shorthand properties is useful for code efficiency and understandability.

```css
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

```css
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

4. 0 and Units

Omit unit specification after “0” values, unless required.

Do not use units after 0 values unless they are required.

```css
flex: 0px; /* This flex-basis component requires a unit. */
flex: 1 1 0px; /* Not ambiguous without the unit, but needed in IE11. */
margin: 0;
padding: 0;
```

5. Leading 0s
   Always include leading “0”s in values.

Put 0s in front of values or lengths between -1 and 1.

```css
font-size: 0.8em;
```

6. Follow BEM naming standards

```csss
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {}
.btn--big {}
```

7. Use `rem` units

Use relative `rem` units for spacing, padding, margin and so on. You can use `px` for small things that does not affect UI/UX if they are scaled, like `border`.

8. Media Queries

When working with media queries place them as close to their relevant rule set whenever possible. Don’t bundle them all in a separate stylesheet or at the end of the document. Doing so only makes it easier for folks to miss them in the future.

Use `em` units for setting breakpoints. (`rem` units are not supported in media queries).

## License

The MIT License (MIT).

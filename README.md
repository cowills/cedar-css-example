Cedar CSS Example
------
This project is an example of how to use Cedar to compile a custom stylesheet for your application.

## Setup

- `npm install`

## Development

- Edit the `index.scss` to create any classes you need.
- - This file is set up to make use of both the  [@rei/cdr-tokens](https://rei.github.io/rei-cedar-docs/tokens/all-tokens/) and [@rei/cdr-component-variables](https://rei.github.io/rei-cedar-docs/components/component-variables/) packages.
- Run `npm run build`.
- - Note that the output file only includes the classes and styles you create in the `index.scss` file. Any tokens or mixins that are not used will not be compiled.

## Usage

After editing the index file and running the build script, the compiled output can be found inside the `compiled.css` file. This file can then be copied into another project, or it's contents can be copy pasted into a CMS, or etc.

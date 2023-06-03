# Styles

This directory contains the SCSS files that define the styling for the project.


| Folder/File               | Description                                                                                                                                                          | Usage                                                                                                                                                         |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/styles/components`  | Contains SCSS files for individual components.                                                                                                                        | Save each component's SCSS styles in separate files within this directory.                                                                                     |
| `/styles`                  | Contains common SCSS files that are used to build the styles for the entire project.                                                                                 | Place common SCSS files in this directory, which may include global styles, variables, mixins, or other shared styles.                                       |
| `/components/_componentA.scss` | Represents the SCSS file for a specific component, such as `ComponentA`.                                                                                              | Write the component-specific SCSS styles in this file, following the BEM (Block, Element, Modifier) naming convention or any other preferred naming convention. |
| `/styles/globals.scss`            | Defines global styles and variables that apply across the entire application.                                                                                        | Add global styles and variables in this file, such as colors, typography, or utility classes.                                                                   |
| `/styles/_main.scss`              | Imports the component-specific SCSS files and compiles them into a single CSS file.                                                                                  | Import the component SCSS files in this file using relative paths.                                                                                              |
| `/styles/_normalize.scss`         | Contains the CSS reset or normalization styles to ensure consistent rendering across different browsers.                                                             | Include CSS reset or normalization styles to establish a consistent baseline for your project's styles.                                                       |
| `/styles/_font.scss`              | Imports and defines font-related styles, such as `@font-face` rules or font variables.                                                                              | Use this file to import and define font styles for your project, including custom fonts.                                                                      |

## Usage

To use the component-specific SCSS files in your project, follow these steps:

1. Save each component's SCSS styles in separate files within the `assets/scss/components` directory. For example, you can create a `_componentA.scss` file for `ComponentA`. In the component-specific SCSS file, define a variable at the top of the file to use as the root classname. For example, `$ns: '.content';`. Use this variable as the root classname for the component styles within the file.

2. In your JSX file, define a variable to store the root classname, such as rootClassnames. Assign the classname to `content`. This value represents the root classname defined in the component's SCSS file.

3. Import the `_componentA.scss` in `_main.scss` file. This file will import and compile all the component-specific SCSS files into a single CSS file.

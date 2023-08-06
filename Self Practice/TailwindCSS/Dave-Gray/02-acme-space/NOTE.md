## TAILWINDCSS by Dave Gray

## SETUP & USAGE
### Files and folders
On the project folder's terminal, 
Enter: 

  `npx tailwindcss init`

To initialize and create the tailwind config file.
In the tailwind.config.js file created, enter:

  `'./build/*.html'` into the content property.

It should be:

  `content: ['./build/*.html']`.

Create a **'build'** folder, which will contain the **'index.html**' file
Create a **'src'** folder which will contain the **'input.css'** file
and the **input.css** file would contain the following line of code.

  `@tailwind base;`
  `@tailwind components;`
  `@tailwind utilities;`

The **input.css** file can also contain custom css codes too.

Still on the project folder's terminal, 
Enter: 

  `npx tailwindcss -i ./src/input.css -o ./build/css/style.css`

To locate the input (-i) css file (./src/input.css) and to create an output (-o) css file in (./build/css/style.css).
The output file (**style.css**) contains the tailwindcss files.

Then you can continue typing your codes in index.html file. Once you want to review your changes, you go to the terminal and type the following:

`npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch`

To avoid stating the input and output directory, create the package.json file using:

  `npm init -y`

In the package.json file, change the 'test' property to **'tailwindcss'** and change the script to 
  `npx tailwindcss -i ./src/input.css -o ./build/style.css --watch`

Then install tailwindcss prettier developer's dependency:

  `npm i -D prettier-plugin-tailwindcss`

A node-modules folder will be created.

Then create a **'.gitignore'** file so as to prevent git from pushing **'node-modules'** file to the repository.

In the **'.gitignore'** file, type:

  `node-modules`

in the package.json file, type the following script:

  `"prettier": "npx prettier --write **/*.html"`

The package.json should look like:
  `...`
  `"scripts": {`
  `"tailwindcss": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",`
  `"prettier": "npx prettier --write **/*.html"`
  `},`
  `...`

Still on the project folder's terminal, 
Enter: 

  `npm run tailwindcss`  

+ #### Custom Mediaquery
Then create a custom mediaquery, go to the 'tailwindcss.config.js' file, in the 'extend'
Type:

  `...`
  `extend: {`
  `    screens: {`
  `      'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},`
  `      'tallscreen': {'raw': '(max-aspect-ratio: 1/2)'}`
  `    }`
  `  },`
  `...`
Depending on the use case.

+ #### Custom Animation
You can also add animation to the **'tailwindcss.config.js'** file, in the **'extend'**

**See The Config File**

+ #### Indicating Files for Tailwindcss:
To include the javascript to be executed alongside the html, you add the js file into the **'content'** property of the **'tailwind.config.js'** file.

**Example:**

  `content: ["./build/*.html", "./build/js/*.js"]`

**Alternatively,**

  `content: ["./build/**/*.{html,js}"],`

+ #### Custom Properties:
To add, a custom property to your project which will be compiled by Tailwindcss, you add it to the **tailwind.config.js**. It is best to add it in the **'extend'** object (in the **'theme'** object) so as to prevent it from overriding already existing tailwindcss properties. That is, when you place the custom properties directly into the **'theme'** object, it will override tailwindcss properties.

**Example: Adding custom colors**
`...`
`extend: {`
  `colors: {`
    `papayawhip: {`
      `light: '#fef4e4',`
      `DEFAULT: '#ffefd5',`
      `dark: '#fee5bc',`
    `}`
  `},`
  `...`

**See the tailwind.config.js file**

+ #### Arbitrary Value:
Outside using custom properties, you can also use arbitrary values (if the value will only be used once or twice, else it is adviceable to use custom properties).

+ #### Exiting / Closing Tailwindcss Execution
  To end tailwindcss compilation,
  In the terminal press:
  `ctrl + c`
  
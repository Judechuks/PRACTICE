## TailwindCSS
On the project folder's terminal, 
Enter: 

  `npx tailwindcss init`

To initialize and create the tailwind config file.
In the tailwind.config.js file created, enter:

  `'./build/*.html'` into the content property.

It should be:

  `content: ['./build/*.html']`.

Create a 'build' folder, which will contain the 'index.html file'
Create a 'src' folder which will contain the 'input.css file'
and the input.css file would contain the following line of code.

  `@tailwind base;`
  `@tailwind components;`
  `@tailwind utilities;`

The input.css file can also contain custom css codes too.

Still on the project folder's terminal, 
Enter: 

  `npx tailwindcss -i ./src/input.css -o ./build/css/style.css`

To locate the input (-i) css file (./src/input.css) and to create an output (-o) css file in (./build/css/style.css).
The output file (style.css) contains the tailwindcss files.

Then you can continue typing your codes in index.html file. Once you want to review your changes, you go to the terminal and type the following:

`npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch`
# Setting Up React and Tailwind CSS Project with Vite
## Step 1 – Create Your Project Folder

Open your terminal, and navigate to the folder where you want to build your project – for example Desktop. Input the command below in the terminal and click enter:‌

`
  npm create vite@latest your-project-name -- --template react
`

"your-project-name" shoud be replaced with your project name. food-app for example

The command above will create your project folder.‌


  **PS C:\Users\User\Desktop\Programming> `npm create vite@latest food-app -- --template react`**

My project name is "food-app", the food-app folder will be created in the Programming folder on my Desktop

**‌Note:** that we have used `-- --template react` to specify that we are building a React app with Vite.

## Step 2 – Navigate to Your Project Folder

Input the command below in your terminal and click enter:
`
  cd food-app
`

‌This command will navigate to your project folder. You should have this:

**PS C:\Users\User\Desktop\Programming> `cd food-app`**
**PS C:\Users\User\Desktop\Programming\food-app**
Inputing `cd food-app` in terminal to navigate to the "food-app" folder

## Step 3 – Install Tailwind CSS and Other Dependencies
Input the command below in your terminal and click enter:

`
  npm install -D tailwindcss postcss autoprefixer
`

Input this command to install the tailwindcss, postcss and autoprefixer dependencies

This command will install the following:

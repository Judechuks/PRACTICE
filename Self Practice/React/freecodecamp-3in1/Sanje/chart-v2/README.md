# STOCK CHART
A web app where different stocks are fetched from an API.
Users can search for their stock, see the details (Name, Change, High, Low, Open, Close, etc) 
And also get to see the chart for the stock on different timestamp (day, week and year)

## LINK
**[Stock](https://c4xkws.csb.app/)**

## TECHNOLOGIES USED
### 1. HTML
### 2. CSS (Bootsrap and TailwindCSS)
### 3. JS (Reactjs)

## COMPONENTS/PAGES/APIS
- ### App (parent component)
- ### Axios API (request)
- ### FinnHub API (finnhub.io)
- ### WatchListContext 
- ### StockList component
- ### StockDetails component
- ### StockOverview component
- ### AutoComplete component
- ### StockChart component
- ### StockData component
- ### Loading component
- ### NotFound component
- ### ApexChart Library (apexcharts.com)
  ```npm install apexcharts --save```
- ###  React-ApexCharts component
  Integration with react:
  ```npm install --save react-apexcharts apexcharts```

### CONCEPT LEARNT/USED
+ #### Component
+ #### Props
+ #### Form
+ #### UseState Hook
+ #### UseEffect Hook
+ #### UseContext Hook
+ #### useNavigate (React-Router-DOM)
+ #### useParams (React-Router-DOM)
+ #### React-Icon

#### CREDIT
* Sanje, whose lessons and tutorials I followed and learned a lot from.
* Freecodecamp

#### ADDITIONAL FEATURES
I went further to add more features:
#### 1. Loading component:
 to indicate that the page is loading
#### 2. NotFound component:
 error for an invalid nav link (route)
#### 3. Navbar component:
 to go back to the homepage
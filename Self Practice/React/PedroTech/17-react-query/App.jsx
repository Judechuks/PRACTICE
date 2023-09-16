import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
  const client = new QueryClient()
  
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App 
/*
The react query is used alongside the fetch() method or axios library to get data 
To use react query, you have to install it.
open your terminal, in your project path, type:
npm install @tanstack/react-query

When using the useQuery, you can set you own configurations
as shown below:
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

check the Home file for other info
*/ 
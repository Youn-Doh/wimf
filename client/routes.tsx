import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<App />} />
    <Route path="/:list" element={<App />} />
  </Route>
)

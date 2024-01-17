import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root') as Element; // as + type은 타입을 단언하는 문법이다.(단언을 사용할 때는 해당 값이 실제로 예상한 형식일 것이라 확신할 수 있을 때만 사용해야 한다.)
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
}


// [기존 코드] 에서 에러가 난 이유 : 타입 불일치
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )
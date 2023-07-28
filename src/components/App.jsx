import { useState } from 'react'
import { fakeDatabase } from '../faceDatabase'
import RenderCards from './renderCards'
import Header from './Header'
// import Cart from './Cart'
// import style from '../styles/App.module.css'
import { Routes, Route, Link } from "react-router-dom"
import Purchase from './purchase'

function App() {
  const [data, setData] = useState(fakeDatabase)
  const [text, setText] = useState('');
  const [seeCart, setSeeCart] = useState(false);

  const showDetails = (id) => {
    setData(data.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          isShowingDetails: !elem.isShowingDetails
        }
      }
      return elem
    }))
  }

  const hideDetails = (id) => {
    setData(data.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          isShowingDetails: false
        }
      }
      return elem
    }))
  }

  const addToCart = (id) => {
    setData(data.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          isInCart: true,
          // inStock: true
        }
      }
      return elem
    }))
  }

  const removeFromCart = (id) => {
    setData(data.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          isInCart: false,
          inStock: false
        }
      }
      return elem
    }))
  }

  return (
    <>
      <Header
        data={data}
        setData={setData}
        text={text}
        setText={setText}
        seeCart={seeCart}
        setSeeCart={setSeeCart}
      />

      <Routes>
        <Route path="/" element={<RenderCards
          data={data}
          setData={setData}
          showDetails={showDetails}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          text={text}
          hideDetails={hideDetails}
          seeCart={seeCart}
        />} />
        <Route path="/Purchase" element={<Purchase />}/>
      </Routes>
    </>
  )
}

export default App
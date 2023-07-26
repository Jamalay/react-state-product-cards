import { useState } from 'react'
import { fakeDatabase } from '../faceDatabase'
import RenderCards from './renderCards'
import Form from './Form'

function App() {
  const [data, setData] = useState(fakeDatabase)

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

  const addToCart = (id) => {
    setData(data.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          isInCart: true
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
          isInCart: false
        }
      }
      return elem
    }))
  }

  return (
    <>
      <Form data={data} setData={setData}/>
      <RenderCards data={data} setData={setData} showDetails={showDetails} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </>
  )
}

export default App

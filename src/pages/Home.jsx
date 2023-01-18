import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBLock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton';


export default function Home() {

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
    fetch('https://63bfa9f8a177ed68abb5468d.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false)
    }
    )}, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/* {items.map((t) => isLoading ? <Skeleton/> : (<PizzaBLock {...t} key={t.id}/>))} */}
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((t) => <PizzaBLock {...t} key={t.id} />)
                }
            </div>
        </>
    )
}

import React from 'react'

export default function Categories() {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегатерианские',
    'Гриль',
    'Острые',
    'Закрытые'
  ]



  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={i === activeIndex ? 'active' : ''}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

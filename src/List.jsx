import React from 'react'


// class List extends React.Component {

//     state = {
//         numbers: [1, 2, 3]
//     }

//     addRandomNumber = () => {
//         const rendNumber = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, rendNumber]
//         });
//     }

//     componentDidMount() {
//         console.log('Отображен')
//     }

//     componentDidUpdate(prewProps, prewState) {
//         console.log('prewProps:', prewProps, 'prewState', prewState, this.props, this.state)
//     }

//     componentWillUnmount() {
//         console.log('Компонент был удален')
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.state.numbers.map((number, index) => (
//                         <li key={index}>{number}</li>)
//                     )}
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Новое число</button>
//             </div>
//         )
//     }

// }

export default function List() {

    const [numbers, setNumbers] = React.useState([1, 2, 3]);
    const [count, setCount] = React.useState(0);

    const addNumber = () => {
        // setNumbers(numbers.push(numbers.at(-1) + 1));
        const rendNumber = Math.round(Math.random() * 10);
        // const oneNumber = numbers.at(-1) + 1
        const newArr = [...numbers, rendNumber];
        // console.log(newArr);
        setNumbers(newArr);
    };

    React.useEffect(() => {
        console.log('count обновился');
    }, [count]);

    React.useEffect(() => {
        console.log('Компoнент обновился');
    });

    React.useEffect(() => {
        console.log('Компoнент render');
        return () => {
            console.log('WILL UNMOUNT');
        };
    },[]);

    const onClickSetCount = (i) => {
        setCount(count)
        console.log(count)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={(() => setCount(count + 1))}>+</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>)
                )}
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </div>
    )
}

// export default List;
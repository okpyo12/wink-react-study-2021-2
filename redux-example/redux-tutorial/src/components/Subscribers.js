import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber } from '../redux/index'

const Subscribers = ({ count, addSubscriber }) => {
    return (
        <div className="items">
            <h3>구독자 수 : {count}</h3>
            <button onClick={() => addSubscriber()}>구독하기!</button>
        </div>
    )
}

const mapStateToProps = ({subscribers}) => {
    return {
        count: subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
    addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)

import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, plusAge } from "../store/userSlice";
import { countUp, deleteItem } from "../store";

const Cart = () => {

    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();
    console.log(state.cartSlice)

    return(
        <div>
            <h1>{state.user.name}의 장바구니</h1>
            <h1>{state.user.name}의 나이 {state.user.age}</h1>
            <button
                onClick={() => {
                    dispatch(plusAge(-5))
                }}
            >버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            state.cartSlice.map((cart, i) => (
                                <tr key={i}>
                                    <td>{cart.id}</td>
                                    <td>{cart.name}</td>
                                    <td>{cart.count}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                dispatch(deleteItem(cart.id))
                                            }}
                                        >삭제</button>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(countUp(cart.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table> 
        </div>
    )
}
export default Cart
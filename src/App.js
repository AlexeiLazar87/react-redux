import './App.css';
import {useEffect} from "react";
import {addToWishList, fetchProducts, removeFromWishList} from "./redux";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const {wishList} = useSelector(({products}) => products )
    const wishListTotalPrice = wishList.reduce((acc, el) => {
        return (acc += el.price)
    }, 0)
    return (
        <>
            <header className={'header'}>
                <h1>My shop</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h3 style={{margin: '20px'}} title={wishListTotalPrice}>Wishlist: {wishList.length}</h3>
                    <h3 style={{margin: '20px'}}>Cart: {0}</h3>
                </div>
            </header>
            <hr/>
        </>
    )
}

const isInWishList = (wishList, id) => !!wishList.find(el => el.id === id);

const Products = () => {
    const {wishList} = useSelector(({products}) => products )
    const {products, isProductsLoading} = useSelector(({products}) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    // useEffect(() => {
    //     dispatch(fetchProducts({
    //         field: 'price',     <==     options for redux-thunk middleware
    //         order: 'ASC'        <==
    //     }));
    // }, [])

    if (isProductsLoading) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id} style={{
                        width: '70%',
                        margin: '20px auto'
                    }}>
                        <button onClick={() => {
                            isInWishList(wishList, product.id)
                                ? dispatch(removeFromWishList(product.id))
                                : dispatch(addToWishList(product.id))
                        }}>
                            {isInWishList(wishList, product.id)
                                ? 'Remove from wish list'
                                : 'add to wish list'}
                        </button>
                        <h4>{product.title} <br/> Price: {product.price}</h4>
                        <p>{product.description}</p>
                        <img style={{width: '100%'}} src={product.image} alt={'shop'}/>
                    </div>
                ))
            }
        </div>
    )
};

function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>
        </div>
    );
}

export default App;

import './App.css';
import {useEffect} from "react";
import {fetchProducts} from "./redux";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    return (
        <>
            <header className={'header'}>
                <h1>My shop</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h3 style={{margin: '20px'}}>Cart: {0}</h3>
                    <h3 style={{margin: '20px'}}>Wishlist: {0}</h3>
                </div>
            </header>
            <hr/>
        </>
    )
}

const Products = () => {
    const {products, isProductsLoading} = useSelector(({products}) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts({
            field: 'price',
            order: 'ASC'
        }));
    }, [])

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
                        <h4>{product.title}</h4>
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

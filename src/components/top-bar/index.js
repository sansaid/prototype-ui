
export default function TopBar() {
    return (
        <div className={props.className}>
            <a href="/">
                <h1>My Store</h1>
            </a>
            <a href="/" className="button fancy-button">
                <i className="material-icons">shopping_cart</i>
                Checkout
            </a>
        </div>
    )
}
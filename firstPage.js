const App = () => {
    return{
        <>
            <Header>
                <Logo/>
                <InputSearch placeholder="Example test">
                    <CartIcon>
                        <ButtonPrimary text="Loggin"/>
                        <ButtonSecondary text="Logout"/>
                    </CartIcon>
                </InputSearch>
            </Header>
            <Banner
                pictures={pictures}
                title="Welcome"
                subtitle="Test"
                />
            <Container>
                <SearchFilter/>
                <SearchResult/>
                <Promotions products={products}/>
            </Container>
    }
}
    export {App};
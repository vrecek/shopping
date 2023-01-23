import HomeHeader from '@/components/Home/Header/HomeHeader'
import HomeProducts from '@/components/Home/HomeProducts/HomeProducts'
import LayoutWrap from '@/components/Layout/LayoutWrap'


const Home = () => {
    return (    
        <LayoutWrap>

            <main>

                <HomeHeader />
                <HomeProducts />

            </main>

        </LayoutWrap>
    )
}


export default Home
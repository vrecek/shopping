import HomeHeader from '@/components/Home/Header/HomeHeader'
import HomeCategory from '@/components/Home/HomeCategory/HomeCategory'
import HomeInformations from '@/components/Home/HomeInformations/HomeInformations'
import HomeProducts from '@/components/Home/HomeProducts/HomeProducts'
import HomeProductsTiles from '@/components/Home/HomeProductsTiles/HomeProductsTiles'
import LayoutWrap from '@/components/Layout/LayoutWrap'


const Home = () => {
    return (    
        <LayoutWrap>

            <main>

                <HomeHeader />

                <HomeProducts />

                <HomeCategory />

                <HomeProducts />

                <HomeInformations />

                <HomeProducts />

                <HomeProductsTiles />

                <HomeCategory />

            </main>

        </LayoutWrap>
    )
}


export default Home
import { RowType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import TileProduct from './TileProduct'
import styles from '@/styles/Home/HomeProductsTiles.module.scss'


const RowContainer = ({cname, products}: RowType) => {
    return (
        <section className={cname}>

            <TileProduct product={products[0]} cname={ styles['big'] } />

            <div>

                <TileProduct product={products[1]} cname={ styles['small'] } />
                <TileProduct product={products[2]} cname={ styles['small'] } />

            </div>

        </section>
    )
}


export default RowContainer
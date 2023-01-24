import Image from '@/components/Common/Image'
import { CategoryItemType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import styles from '@/styles/Home/HomeCategory.module.scss'
import Button from '@/components/Common/Button'


const CategoryItem = ({cname, image, category}: CategoryItemType) => {
    return (
        <article className={cname}>

            <Image source={image} />
            
            <section>

                <p className={ styles['header'] }>{category}</p>
                <p className={ styles['desc'] }>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates distinctio</p>
                <Button text='Explore' />

            </section>

        </article>
    )
}


export default CategoryItem
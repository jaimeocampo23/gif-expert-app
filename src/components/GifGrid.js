import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category)

    // useEffect(() => {
    //     getGifs(category).then(setImages)
    // }, [category])

    // const [images, setImages] = useState([]);


    return (
        <>
        <h3>{ category }</h3>
        {loading && <p>Loading</p>}
        <div className='card-grid'>
            { 
                images.map( img => (
                    <GifCard key={img.id} {...img} />
                ))
            }
        </div>
        </>
    )
}

import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Skeletonn = ({ skeletonData }) => {
    return (
        <div className='skeleton-style container'>
            {
                skeletonData.map((element, key) => {
                    return (
                        <>
                            <Stack spacing={1} className='mb-4'>
                                <Skeleton className='skeleton-ract' animation='wave' startColor='pink.500' endColor='orange.500' variant="rounded" width={320} height={200} />

                                <div className='d-flex justify-content-between skeleton-info'>
                                    <div>
                                        <Skeleton variant="text" animation='wave' width={100} />
                                        <Skeleton variant="text" animation='wave' width={100} />
                                    </div>
                                    <div>
                                        <Skeleton variant="text" animation='wave' width={100} />
                                        <Skeleton variant="text" animation='wave' width={100} />
                                    </div>
                                </div>

                                <div className='d-flex flex-wrap justify-content-between skeleton-info'>
                                    <Skeleton variant="circular" animation='wave' width={25} height={25} />
                                    <span><Skeleton variant="text=" animation='wave' width={'16.5rem'} /></span>
                                </div>
                            </Stack>
                        </>
                    )
                })
            }
        </div>

    )
}

export default Skeletonn;
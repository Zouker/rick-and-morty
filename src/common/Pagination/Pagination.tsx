import React from 'react';
import {Button} from '../Button/Button';
import styles from './Pagination.module.scss'

type PaginationPropsType = {
    currentPage: number | null
    totalCount: number
    prevPage: () => void
    nextPage: () => void
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              currentPage,
                                                              totalCount,
                                                              prevPage,
                                                              nextPage
                                                          }) => {

    return (
        <div className={styles.wrapper}>
            Page {currentPage} of {totalCount}
            <div className={styles.buttonBlock}>
                <div className={styles.button}>
                    <Button disabled={currentPage === 1} onClick={prevPage}
                            title={'Prev'}/>
                </div>
                <div className={styles.button}>
                    <Button disabled={currentPage === totalCount} onClick={nextPage}
                            title={'Next'}/>
                </div>
            </div>
        </div>
    );
};
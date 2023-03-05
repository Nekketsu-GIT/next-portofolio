import { useState } from 'react'
import styles from './pagination.module.scss'

type Props = {
    current: number
    total: number
    onChange: (page: number) => void
}

const Pagination = ({ current, total, onChange }: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(current);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onChange(page);
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < total) {
            handlePageChange(currentPage + 1);
        }
    }

    return (
        <div className={styles.pagination}>
            <button onClick={handlePrevious} disabled={currentPage == 1}>
                Previous
            </button>
            <span>
                {currentPage} of {total}
            </span>
            <button onClick={handleNext} disabled={currentPage == total}>
                Next
            </button>
        </div>
    )
}

export default Pagination
    
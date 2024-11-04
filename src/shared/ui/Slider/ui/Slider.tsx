import React, {useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import styles from './Slider.module.scss';

interface SliderProps {
    slides: React.ReactNode[]; // Указываем, что slides - это массив React-элементов
}

const Slider: React.FC<SliderProps> = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    return (
        <div className={styles.sliderContainer} {...swipeHandlers}>

            <div className={styles.sliderWrapper}>
                <div
                    className={styles.sliderTrack}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div className={styles.slide} key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.arrows}>
                <button onClick={handlePrev} className={`${styles.sliderArrow} ${styles.leftArrow}`}>
                </button>
                <button onClick={handleNext} className={`${styles.sliderArrow} ${styles.rightArrow}`}>
                </button>
            </div>
            <div className={styles.block}>
                {slides.map((slide, index) => (
                    <div className={index===currentIndex ? `${styles.number_active} ${styles.number}` : styles.number} key={index}>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

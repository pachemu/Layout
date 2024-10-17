import React, { useState, useEffect } from 'react';

// Хук useDeviceDetect освободит вас от забот по определению типа устройства
const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Отслеживаем изменение размера экрана здесь, моментально реагируя на любые его изменения
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        // Непременно удаляем обработчик, чтобы предотвратить утечку памяти
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile };

//     вообще вся эта хуйня это юзлесс залупа, но я её сделал так как забыл про изначальное разрешение у свг элементов,
//     чето мозги себе напудрил. 768 реализовал так, а 375пх я реализовал через обычный css
};

export default useDeviceDetect;
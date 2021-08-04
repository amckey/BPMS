import React, {useState} from 'react';
import styles from './BoatDesc.module.scss';
import {readyModels} from "../../fixtures/data";
import {useMediaQuery} from "react-responsive";
import arrow from '../../assets/small_arrow.svg';

const BoatDesc = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [readyModelsState, setReadyModelsState] = useState(readyModels[0]);
    const techDetails = [
        {title: 'Длина', value: readyModelsState.main.length},
        {title: 'Ширина', value: readyModelsState.main.width},
        {title: 'Количество пассажиров', value: readyModelsState.main.passengers},
        {title: 'Двигатель', value: readyModelsState.main.engine},
        {title: 'Водоотвод', value: readyModelsState.main.selfDraining},
        {title: 'Корпус', value: readyModelsState.main.hull},
        {title: 'Удобные сиденья', value: readyModelsState.main.seats},
        {title: 'Поручни', value: readyModelsState.main.raillings},
        {title: 'Палуба', value: readyModelsState.main.deck},
        {title: 'Топливный бак', value: readyModelsState.main.fuelTank},
        {title: 'Транец', value: readyModelsState.main.transom},
        {title: 'Кормовой привод', value: readyModelsState.main.inboard},
        {title: 'Общая длина', value: readyModelsState.main.totalLength},
        {title: 'Вес', value: readyModelsState.main.weight},
        {title: 'Общая грузоподъемность', value: readyModelsState.main.capacity},
        {title: 'Сертификация', value: readyModelsState.main.approval},
        {title: 'Непотопляемая конструкция', value: readyModelsState.main.construction},
        {title: 'Коробки для сидений', value: readyModelsState.main.seatBoxes},
        {title: 'Рулевая консоль', value: readyModelsState.main.steeringConsole},
        {title: 'Плавучесть', value: readyModelsState.main.flotation},
        {title: 'Ветровое стекло', value: readyModelsState.main.windshield},
        {title: 'Дно', value: readyModelsState.main.bottom},
        {title: 'Стенки', value: readyModelsState.main.side},
    ]
    const equipment = [
        {title: 'Запираемые блоки хранения', value: readyModelsState.equipment.storageUnits},
        {title: 'Гидравлическое рулевое управление', value: readyModelsState.equipment.steering},
        {title: 'Ручной трюмный насос или электрический насос', value: readyModelsState.equipment.pump},
        {title: 'Навигационные огни', value: readyModelsState.equipment.lights},
        {title: 'Крюк для прицепа/блокировки', value: readyModelsState.equipment.hook},
        {title: 'Кронштейн датчика', value: readyModelsState.equipment.bracket},
        {title: 'Лестница для плавания', value: readyModelsState.equipment.stairs},
        {title: 'Розетка 12V', value: readyModelsState.equipment.socket},
        {title: 'Огнетушитель', value: readyModelsState.equipment.fireExtinguisher},
        {title: 'Рулевая консоль, закаленное стекло лобового стекла', value: readyModelsState.equipment.temperedGlass},
        {title: 'Плавательная платформа', value: readyModelsState.equipment.platform},
    ]

    const accesories = [
        {title: 'Тарга', value: readyModelsState.accessories.targa},
        {title: '1 поворотное регулируемое сиденье', value: readyModelsState.accessories.comfortSeat},
    ]

    const techDetailsList = techDetails.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.desc_item}>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                </div>
            </li>
        )
    })
    const equipmentDetailsList = equipment.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.desc_item}>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                </div>
            </li>
        )
    })
    const accesoriesDetailsList = accesories.map((item, index) => {
        return (
            <li key={index}>
                <div className={styles.desc_item}>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                </div>
            </li>
        )
    })
    const handleToggleState = (item) => {
        if(item === readyModelsState.main) {
            const newReadyModelsState = {...readyModelsState};
            newReadyModelsState.main.active = !newReadyModelsState.main.active;
            newReadyModelsState.equipment.active = false;
            newReadyModelsState.accessories.active = false;
            setReadyModelsState(newReadyModelsState);
        }
        if(item === readyModelsState.equipment) {
            const newReadyModelsState = {...readyModelsState};
            newReadyModelsState.equipment.active = !newReadyModelsState.equipment.active;
            newReadyModelsState.main.active = false;
            newReadyModelsState.accessories.active = false;
            setReadyModelsState(newReadyModelsState);
        }
        if(item === readyModelsState.accessories) {
            const newReadyModelsState = {...readyModelsState};
            newReadyModelsState.accessories.active = !newReadyModelsState.accessories.active;
            newReadyModelsState.main.active = false;
            newReadyModelsState.equipment.active = false;
            setReadyModelsState(newReadyModelsState);
        }
    }
    return (
        <div className={styles.desc}>
            <div className={styles.desc_container}>
                <div className={styles.desc_heading}>
                    <div className={styles.desc_main}>
                        <h3>{readyModelsState.title}</h3>
                        <p>{readyModelsState.desc}</p>
                    </div>
                    <div className={styles.desc_elements}>
                        <div className={styles.desc_element}>
                            <h4>Длина</h4>
                            <p>{readyModelsState.main.length} М</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>Ширина</h4>
                            <p>{readyModelsState.main.width} М</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>Двигатель</h4>
                            <p>{readyModelsState.main.engine}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.desc_tables}>
                    <div className={styles.desc_technical}>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Технические детали <span>"{readyModelsState.main.title}"</span></h3> :
                            <div className={styles.desc_mobile}>
                                <h3>Технические детали <span>"{readyModelsState.main.title}"</span></h3>
                                <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.main)}>
                                    <img style={readyModelsState.main.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={arrow} alt="arrow"/>
                                </button>
                            </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState.main.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                <ul>
                                    {techDetailsList}
                                </ul>
                            </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {techDetailsList}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles.desc_technical}>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Оборудование <span>"{readyModelsState.main.title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>Оборудование <span>"{readyModelsState.main.title}"</span></h3>
                                    <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.equipment)}>
                                        <img style={readyModelsState.equipment.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={arrow} alt="arrow"/>
                                    </button>
                                </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState.equipment.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                    <ul>
                                        {equipmentDetailsList}
                                    </ul>
                                </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {equipmentDetailsList}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Аксессуары <span>"{readyModelsState.main.title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>Аксессуары <span>"{readyModelsState.main.title}"</span></h3>
                                    <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.accessories)}>
                                        <img style={readyModelsState.accessories.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}}src={arrow} alt="arrow"/>
                                    </button>
                                </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState.accessories.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                    <ul>
                                        {accesoriesDetailsList}
                                    </ul>
                                </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {accesoriesDetailsList}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoatDesc;
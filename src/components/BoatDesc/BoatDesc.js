import React, {useState, useEffect} from 'react';
import styles from './BoatDesc.module.scss';
// import {readyModels} from "../../fixtures/data";
import {useMediaQuery} from "react-responsive";
import arrow from '../../assets/small_arrow.svg';
import {Link} from 'react-router-dom';

const BoatDesc = ({item}) => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const [readyModelsState, setReadyModelsState] = useState(null);
    useEffect(() => {
        if(item) {
            setReadyModelsState(item)
        }
    }, [item])
    const techDetails = readyModelsState && [
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
    const equipment = readyModelsState && [
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
        {title: 'Hull painting', value: readyModelsState.equipment.hullPainting},
        {title: 'Boat rubber fender', value: readyModelsState.equipment.fender},
        {title: '12 V outlet', value: readyModelsState.equipment.outlet},
        {title: 'Swimming ladder', value: readyModelsState.equipment.ladder}
    ]

    const accesories = readyModelsState && [
        {title: 'Тарга', value: readyModelsState.accessories.targa},
        {title: '1 поворотное регулируемое сиденье', value: readyModelsState.accessories.comfortSeat},
    ]

    const techDetailsList = techDetails && techDetails.map((item, index) => {
        if(!item.value) {
            return null
        }else return (
            <li key={index}>
                <div className={styles.desc_item}>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                </div>
            </li>
        )
    })
    const equipmentDetailsList = equipment && equipment.map((item, index) => {
        if(!item.value) {
            return null
        }else return (
            <li key={index}>
                <div className={styles.desc_item}>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                </div>
            </li>
        )
    })
    const accesoriesDetailsList = accesories && accesories.map((item, index) => {
        if(!item.value) {
            return null
        }else return (
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
    if(!readyModelsState) {
        return (<div>Loading</div>)
    }
    return (
        <div className={styles.desc}>
            <div className={styles.desc_container}>
                <div className={styles.desc_heading}>
                    <div className={styles.desc_main}>
                        {readyModelsState && !readyModelsState.main.available &&
                        <div className={styles.desc_banner}>
                            <p>
                                Be informed that this model is still at the certification stage and will be available very soon. For more information, contact us to get details.
                            </p>
                            <Link to='/contacts' replace>Contact us</Link>
                        </div>}
                        <h3>{readyModelsState && readyModelsState.main.title}</h3>
                        <p>{readyModelsState && readyModelsState.additional}</p>
                    </div>
                    <div className={styles.desc_elements}>
                        <div className={styles.desc_element}>
                            <h4>Длина</h4>
                            <p>{item && item.main.length} М</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>Ширина</h4>
                            <p>{readyModelsState && readyModelsState.main.width} М</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>Двигатель</h4>
                            <p>{readyModelsState && readyModelsState.main.engine}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.desc_tables}>
                    <div className={styles.desc_technical}>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Технические детали <span>"{readyModelsState && readyModelsState.main.title}"</span></h3> :
                            <div className={styles.desc_mobile}>
                                <h3>Технические детали <span>"{readyModelsState && readyModelsState.main.title}"</span></h3>
                                <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.main)}>
                                    <img style={readyModelsState && readyModelsState.main.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={arrow} alt="arrow"/>
                                </button>
                            </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState && readyModelsState.main.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                <ul>
                                    {techDetailsList && techDetailsList}
                                </ul>
                            </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {techDetailsList && techDetailsList}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles.desc_technical}>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Оборудование <span>"{readyModelsState && readyModelsState.main.title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>Оборудование <span>"{readyModelsState && readyModelsState.main.title}"</span></h3>
                                    <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.equipment)}>
                                        <img style={readyModelsState && readyModelsState.equipment.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}} src={arrow} alt="arrow"/>
                                    </button>
                                </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState && readyModelsState.equipment.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                    <ul>
                                        {equipmentDetailsList && equipmentDetailsList}
                                    </ul>
                                </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {equipmentDetailsList && equipmentDetailsList}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>Аксессуары <span>"{readyModelsState && readyModelsState.main.title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>Аксессуары <span>"{readyModelsState && readyModelsState.main.title}"</span></h3>
                                    <button className={styles.desc_button} onClick={() => handleToggleState(readyModelsState.accessories)}>
                                        <img style={readyModelsState && readyModelsState.accessories.active ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}}src={arrow} alt="arrow"/>
                                    </button>
                                </div>}
                            {isMobile ?
                                <div className={styles.desc_list} style={isMobile && readyModelsState && readyModelsState.accessories.active ? {opacity: 1, zIndex: 3, top: 0} : {opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px'}}>
                                    <ul>
                                        {accesoriesDetailsList && accesoriesDetailsList}
                                    </ul>
                                </div> :
                                <div className={styles.desc_list}>
                                    <ul>
                                        {accesoriesDetailsList && accesoriesDetailsList}
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
import React, {useState, useEffect} from 'react';
import styles from './BoatDesc.module.scss';
import {useMediaQuery} from "react-responsive";
import arrow from '../../assets/small_arrow.svg';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import i18next from "../../fixtures/i18next";

const BoatDesc = ({item}) => {
    const {t} = useTranslation();
    const isMobile = useMediaQuery({maxWidth: 767});
    const [readyModelsState, setReadyModelsState] = useState(null);
    useEffect(() => {
        if(item) {
            setReadyModelsState(item)
        }
    }, [item])
    const techDetails = readyModelsState && [
        {title: i18next.t('length'), value: `${readyModelsState.main.length} ${i18next.t('m')}`},
        {title: i18next.t('width'), value: `${readyModelsState.main.width} ${i18next.t('m')}`},
        {title: i18next.t('numberOfPassengers'), value: readyModelsState.main.passengers},
        {title: i18next.t('engine'), value: readyModelsState.main.engine},
        {title: i18next.t('selfDraining'), value: readyModelsState.main.selfDraining === "yes" ? i18next.t('yes') : i18next.t('byRequest')},
        {title: i18next.t('hull'), value: readyModelsState.main.hull},
        {title: i18next.t('comfortSeats'), value: readyModelsState.main.seats === "yes" ? i18next.t('yes') : i18next.t('byRequest')},
        {title: i18next.t('railings'), value: readyModelsState.main.raillings && i18next.t('aluminium')},
        {title: i18next.t('deck'), value: readyModelsState.main.deck && i18next.t('aluminium')},
        {title: i18next.t('fuelTank'), value: readyModelsState.main.fuelTank === "yes" ? i18next.t('yes') : i18next.t('byRequest')},
        {title: i18next.t('inboard'), value: `${readyModelsState.main.inboard} ${i18next.t('mm')}`},
        {title: i18next.t('totalLength'), value: `${readyModelsState.main.totalLength} ${i18next.t('m')}`},
        {title: i18next.t('weight'), value: `${readyModelsState.main.weight} ${i18next.t('kg')}`},
        {title: i18next.t('loadCapacity'), value: `${readyModelsState.main.capacity} ${i18next.t('kg')}`},
        {title: i18next.t('approval'), value: readyModelsState.main.approval},
        {title: i18next.t('unsinkableConstruction'), value: readyModelsState.main.construction === "yes" ? i18next.t('yes') : i18next.t('byRequest')},
        {title: i18next.t('seatBoxes'), value: readyModelsState.main.seatBoxes && i18next.t('aluminium')},
        {title: i18next.t('steeringConsole'), value: readyModelsState.main.steeringConsole && i18next.t('aluminium')},
        {title: i18next.t('flotation'), value: readyModelsState.main.flotation},
        {title: i18next.t('windshield'), value: readyModelsState.main.windshield && i18next.t('polycarbonatMonolit')},
        {title: i18next.t('bottom'), value: `${readyModelsState.main.bottom} ${i18next.t('mm')}`},
        {title: i18next.t('side'), value: `${readyModelsState.main.side} ${i18next.t('mm')}`},
    ]
    const equipment = readyModelsState && readyModelsState.equipment && [
        {title: i18next.t('lockableStorageUnits'), value: readyModelsState.equipment.storageUnits},
        {title: i18next.t('hydraulicSteering'), value: readyModelsState.equipment.steering},
        {title: i18next.t('pump'), value: readyModelsState.equipment.pump},
        {title: i18next.t('navigationLights'), value: readyModelsState.equipment.lights},
        {title: i18next.t('hook'), value: readyModelsState.equipment.hook},
        {title: i18next.t('bracket'), value: readyModelsState.equipment.bracket},
        {title: i18next.t('outlet'), value: readyModelsState.equipment.socket},
        {title: i18next.t('fireExtinguisher'), value: readyModelsState.equipment.fireExtinguisher},
        {title: i18next.t('polycarbonateWindshield'), value: readyModelsState.equipment.temperedGlass},
        {title: i18next.t('boatRubberFender'), value: readyModelsState.equipment.platform},
        {title: i18next.t('hullPainting'), value: readyModelsState.equipment.hullPainting},
        {title: i18next.t('ladder'), value: readyModelsState.equipment.ladder}
    ]

    const accesories = readyModelsState && readyModelsState.accessories && [
        {title: i18next.t('targa'), value: readyModelsState.accessories.targa},
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
                    <p>{item.value === "yes" ? i18next.t('yes') : i18next.t('byRequest')}</p>
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
                    <p>{item.value === "yes" ? i18next.t('yes') : i18next.t('byRequest')}</p>
                </div>
            </li>
        )
    })

    const title = readyModelsState?.main.title === 'almarcraft590' ? i18next.t('almarcraft590') :
    readyModelsState?.main.title === 'almarcraft590targa' ? i18next.t('almarcraft590withTarga') :
    readyModelsState?.main.title === 'almarcraft470' ? i18next.t('almarcraft470') : 
    i18next.t('almarcraft590withCabin');

    const additional = readyModelsState?.additional === 'almarcraft590' ? i18next.t('almarcraft590Add') :
    readyModelsState?.additional === 'almarcraft590targa' ? i18next.t('almarcraft590withTargaAdd') :
     i18next.t('almarcraft470Add');
   

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
    if(readyModelsState && !readyModelsState.certification) {
        return <div className={styles.desc}>
            <div className={styles.desc_container}>
                <h3 style={{fontSize: 24, textTransform: 'uppercase'}}>{i18next.t('boatUnderDevelopment')}</h3>
                <p className={styles.notReady}>{i18next.t('boatUnderDevelopmentDesc')}</p>
            </div>
        </div>
    }
    return (
        <div className={styles.desc}>
            <div className={styles.desc_container}>
                <div className={styles.desc_heading}>
                    <div className={styles.desc_main}>
                        {readyModelsState && !readyModelsState.main.available &&
                        <div className={styles.desc_banner}>
                            <p>
                                {i18next.t('orangeBannerText')}
                            </p>
                            <Link to='/contacts' replace>{i18next.t('contactUs')}</Link>
                        </div>}
                        <h3>{title}</h3>
                        <p>{additional}</p>
                    </div>
                    <div className={styles.desc_elements}>
                        <div className={styles.desc_element}>
                            <h4>{i18next.t('length')}</h4>
                            <p>{item && item.main.length} {i18next.t('m')}</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>{i18next.t('width')}</h4>
                            <p>{readyModelsState && readyModelsState.main.width} {i18next.t('m')}</p>
                        </div>
                        <div className={styles.desc_element}>
                            <h4>{i18next.t('engine')}</h4>
                            <p>{readyModelsState && readyModelsState.main.engine}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.desc_tables}>
                    <div className={styles.desc_technical}>
                        <div className={styles.desc_table}>
                            {!isMobile ? <h3>{i18next.t('technicalDetails')} <span>"{title}"</span></h3> :
                            <div className={styles.desc_mobile}>
                                <h3>{i18next.t('technicalDetails')} <span>"{title}"</span></h3>
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
                            {!isMobile ? <h3>{i18next.t('equipment')} <span>"{title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>{i18next.t('equipment')} <span>"{title}"</span></h3>
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
                        {accesories && readyModelsState && readyModelsState.accessories.content && <div className={styles.desc_table}>
                            {!isMobile ? <h3>{i18next.t('accessories')} <span>"{title}"</span></h3> :
                                <div className={styles.desc_mobile}>
                                    <h3>{i18next.t('accessories')} <span>"{title}"</span></h3>
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
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoatDesc;

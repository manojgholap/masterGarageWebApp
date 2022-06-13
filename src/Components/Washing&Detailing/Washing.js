import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import check from '../../Images/check.png';


export const Washing=[
    {
        id:1,
        title:'Basic Service', 
        img:BasicService,
        yearmonth:'Every 5000 Kms or 3 month',
        points:'9 Point Service',
        check:check,
        price:700.00,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:2,
        title:'Standard Service',
        img:StandardService,
        yearmonth:'Every 10000 Kms or 6 month',
        points:'15 Point Service',
        check:check,
        price:700.00,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:3,
        title:'Comprehensive Service',
        img:ComprehensiveService,
        yearmonth:'Every 10000 Kms or 6 month',
        points:'20 Point Service',
        check:check,
        price:700.00,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },

    
];
export const specialservice=[
    {        title:'Engine Scanning',
        img:EngineScanning,
        yearmonth2:'Every 10000 Kms or 6 month',
        pointservice:'Scanner Report Provided',
        price:700.00,
        check:check,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:5,
        title:'Complete Suspension Inspection',
        img:CompleteService,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'Scanner Report Provided',
        price:700.00,
        check:check,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:6,
        title:'Car Inspection & Diagnostics',
        img:CarInspection,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'Scanner Report Provided',
        price:700.00,
        check:check,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:7,
        title:'Car Fluid Check',
        img:CarFluid,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'5 Point Checklist',
        price:700.00,
        check:check,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    },
    {
        id:8,
        title:'Starter Motor Repair',
        img:StarterMotor,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'5 Point Service',
        price:700.00,
        check:check,
        amount:1,
        toggle:false,
        includes: [
            'Engine Oil Replacement',
            'Oil Filter Replacement',
            'Air Filter Cleaning',
            'Coolant Top up',
            'Wiper Fluid Replacement',
            'Battry water Top up',
            'Heater/Spark plugs checking',
            'Car wash'
        ]
    }
]
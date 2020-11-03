import React, { useState } from 'react'
import styled from '@emotion/styled';

const FieldComponent = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const LabelComponent = styled.label`
    flex: 0 0 100px;
`;

const SelectComponent = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
`;

const InputRadioComponent = styled.input`
    margin: 0 1rem;
`;

const ButtonComponent = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Form = () => {

    const [ data, setData] = useState({
        brand: '',
        year: '',
        plan: 'basic'
    })

    const  { brand, year, plan} = data;

    const handleSetData  = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <form>
            <FieldComponent>
                <LabelComponent>Brand</LabelComponent>
                <SelectComponent
                    name='brand'
                    value={brand}
                    onChange={handleSetData}
                >
                    <option value=''>-- Select --</option>
                    <option value='american'>American</option>
                    <option value='european'>European</option>
                    <option value='asian'>Asian</option>
                </SelectComponent>
            </FieldComponent>

            <FieldComponent>
                <LabelComponent>Year</LabelComponent>
                <SelectComponent
                    name='year'
                    value={year}
                    onChange={handleSetData}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </SelectComponent>
            </FieldComponent>

            <FieldComponent>
                <LabelComponent>Plan</LabelComponent>
                <InputRadioComponent 
                    type='radio'
                    name='plan'
                    value='basic'
                    checked={plan === 'basic'}
                    onChange={handleSetData}
                /> Basic

                <InputRadioComponent 
                    type='radio'
                    name='plan'
                    value='full'
                    checked={plan === 'full'}
                    onChange={handleSetData}
                /> Full
            </FieldComponent>

            <ButtonComponent
                type='button'
            >
                Quote
            </ButtonComponent>
        </form>
     );
}
 
export default Form;
import React, {useMemo, useState, useEffect} from 'react';
import MultiSelect from '../MultiSelect'
import {
    Box,
    Chip,
    Divider

} from '@mui/material';


function MultiSelectorForm({values, setValues}){
    const typeOptions = [
        {
            label: 'Indor',
            value: 'indor'
        },
        {
            label: 'Outdor',
            value: 'outdor'
        }
    ];

    const pointOfSaleOptions = [
        {
            label: 'Displays',
            value: 'displays'
        },
        {
            label: 'Windows-sticker',
            value: 'sticker'
        }
    ];

    const locationOptions = [
        {
            label: 'Africa',
            value: 'africa'
        },
        {
            label: 'Asia',
            value: 'asia'
        },
        {
            label: 'Europe',
            value: 'europe'
        },
        {
            label: 'North America',
            value: 'northAmerica'
        },
        {
            label: 'South America',
            value: 'southAmerica'
        }
    ];

    const eventOptions = [
        {
            label: 'Dance',
            value: 'dance'
        },
        {
            label: 'Singing',
            value: 'singing'
        },
        {
            label: 'Concert',
            value: 'concert'
        }
    ];


    const [items, setItems] = useState([]);


    const typeValues = useMemo(() => items
        .filter((items) => items.field === 'Type')
        .map((items) => items.value), [items]);

    //console.log("typeValues", typeValues)


    const pointOfSaleValues = useMemo(() => items
        .filter((items) => items.field === 'POS')
        .map((items) => items.value), [items]);

    const locationValues = useMemo(() => items
        .filter((items) => items.field === 'location')
        .map((items) => items.value), [items]);

    const eventValues = useMemo(() => items
        .filter((items) => items.field === 'Event')
        .map((items) => items.value), [items]);

    useEffect(() => {
        setValues({...values, type:typeValues})
    },[typeValues]);

    console.log("typeValues", values)

//console.log("eventValues", eventValues)
    const removeItem = (itemCol) => {
        let newItems = items.filter((item) => item.value !== itemCol.value);
        setItems(newItems)
    }

    return (
        <React.Fragment>
            {items?.length > 0 &&

            <Box>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 2
                    }}
                >
                    {items.map((filterItem, i) => (
                        <Chip
                            key={i}
                            label={(
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        '& span': {
                                            fontWeight: 600
                                        }
                                    }}
                                >
                  <span>
                    {filterItem.label}
                  </span>
                                    :
                                    {' '}
                                    {filterItem.displayValue || filterItem.value}
                                </Box>
                            )}
                            onDelete={() => removeItem(filterItem)}
                            sx={{ m: 1 }}
                            variant="outlined"
                        />
                    ))}
                </Box>
                <Divider />
            </Box>
            }

            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1
                }}
            >
                <MultiSelect
                    label="Type"
                    options={typeOptions}
                    value={typeValues}
                    setItems={setItems}
                    items={items}
                />
                <MultiSelect
                    label="POS"
                    options={pointOfSaleOptions}
                    value={pointOfSaleValues}
                    setItems={setItems}
                    items={items}
                />
                <MultiSelect
                    label="Event"
                    options={eventOptions}
                    value={eventValues}
                    setItems={setItems}
                    items={items}
                />
                <Box sx={{ flexGrow: 1 }} />
            </Box>
        </React.Fragment>
    )
}
export default MultiSelectorForm;
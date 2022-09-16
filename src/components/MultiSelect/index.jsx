import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MultiSelect = (props) => {
    const { label, onChange, options, items, setItems, value = [], ...other } = props;
    const anchorRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    const handleChange = (event) => {
        let actualValue = JSON.parse(event.target.value);
        if (event.target.checked) {
            setItems([...items, {
                label: label,
                field: label,
                value: actualValue?.value,
                displayValue: actualValue?.label
            }])
        } else {
                let newItems = items.filter((item) => item.value !== actualValue.value);
            setItems(newItems)
        }
    };

    return (
        <>
            <Button
                color="inherit"
                endIcon={<ExpandMoreIcon fontSize="small" />}
                onClick={handleOpenMenu}
                ref={anchorRef}
                {...other}>
                {label}
            </Button>
            <Menu
                anchorEl={anchorRef.current}
                onClose={handleCloseMenu}
                open={openMenu}
                PaperProps={{ style: { width: 250 } }}
            >
                {options.map((option) => (
                    <MenuItem key={option.label}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={value.includes(option.value)}
                                    onChange={handleChange}
                                    value={JSON.stringify(option)}
                                />
                            )}
                            label={option.label}
                            sx={{
                                flexGrow: 1,
                                mr: 0
                            }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

MultiSelect.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    value: PropTypes.array.isRequired
};

export default MultiSelect;

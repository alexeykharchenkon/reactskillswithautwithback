import { Container, Typography, TableHead, Table, TableBody, Checkbox, IconButton, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Item } from '@models/types';
import { useState } from 'react';
import { FormComponent } from '@components/FormComponent/FormComponent';
import { DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from '@actions/index';
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableRow from "@material-ui/core/TableRow";
import { observer } from 'mobx-react-lite';
import { useStore } from '@stores/rootStore';


const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
})(MuiTableCell);
  
const TableRow = withStyles({
      root: {
          borderRadius: 40,
          border: "2px solid #ff7960",
      }
})(MuiTableRow);

interface TableProps {
    classes: any;
}

export const TableComponent = observer(({ classes }: TableProps) => {
    const {tableStore} = useStore();

    const data = tableStore.data;
    const operationFunc= tableStore.operationFunc;
    const activeItem= tableStore.activeItem;

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {setAnchorEl(e.currentTarget)}
    const handleClose = () => { setAnchorEl(null) }

    return (
        <Container className={classes.table_component}>
            <FormComponent 
                open={Boolean(anchorEl)}
                handleClose={handleClose}
                anchorEl={anchorEl}   
                operationFunc={operationFunc} 
                activeItem={activeItem}
                classes={classes}
            />
            <Container className={classes.table_component_container}>
                <Typography variant="h4" align="center">
                    Table
                </Typography>
                <div className={classes.table_component_buttons}>
                    <IconButton onClick={handleClick} color="secondary">
                    Add Item <AddIcon/>
                    </IconButton>
                </div>
                <Table className={classes.table_component_table}>
                    <TableHead className={classes.table_component_table_head}>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Text</TableCell>
                            <TableCell>Done</TableCell>
                            <TableCell>Ations</TableCell>
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.text}</TableCell>
                                <TableCell>
                                    <Checkbox
                                        checked={item.isChecked}
                                        onClick={() => operationFunc(UPDATE_ITEM, {...item, isChecked: !item.isChecked})}
                                    />
                                </TableCell>
                                <TableCell>
                                    <IconButton 
                                        onClick={(e) => {
                                            operationFunc(EDIT_ITEM, item);
                                            handleClick(e);
                                        }}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => operationFunc(DELETE_ITEM, item)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </Container>
    );
});


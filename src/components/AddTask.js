import React, { useState } from 'react'


/////MATERIAL UI //////////////////////////////////////////////////////////////////////////////////////
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        table: {
            minWidth: 400,
            maxWidth: 600

        },
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


////////////////////////////////////////////////////////////////////////////////////////////////////


const AddTask = (props) => {
    const classes = useStyles();
    const [input, SetInput] = useState("")
    const [status, SetStatus] = useState(false)

    // const [tasks, SetTasks] = useState([])


    const handleChange = (e) => {
        // console.log("Event:", e.target.value)
        let value = e.target.value
        SetStatus(value)
    }


    const addTaskFunc = () => {
        console.log("Text:", input)
        console.log("Status:", status)


        props.SetTasks(prev => prev.length !== 0 ? [
            ...prev,
            {
                input: input,
                status: status
            }
        ] : [{
            input: input,
            status: status
        }])
        // console.log("Tasks array:", tasks)
        // return (tasks)
    }

    const toggleStatus = (i) => {
        console.log("Index", i, "is clicked")

        props.SetTasks(props.tasks.map((item, ind) => {
            if (i === ind) {
                return {
                    ...item,
                    status: (!item.status),
                }
            }
            else return item;
        }
        ))

    }

    return (
        <div>
            <h1>AddTask</h1>

            <TextField id="outlined-basic" label="Enter Task" variant="outlined"
                onChange={e => SetInput(e.target.value)} />
            <br></br>
            <br></br>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                <Select
                    native
                    value={status}
                    onChange={e => handleChange(e)}
                    label="Status"
                    inputProps={{
                        name: 'status',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </Select>
            </FormControl>


            <br></br>
            <br></br>

            <Button variant="contained" color="primary" onClick={() => addTaskFunc()}>
                Add Task
            </Button>
            <br></br> <br></br>
           
{/* //////////////// DISPLAY TASK //////////////////////////////////////////////////////////// */}
            <hr ></hr>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="customized table" style={{ width: 1000, margin: 'auto' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="justify">Task</StyledTableCell>
                            <StyledTableCell align="justify">Status</StyledTableCell>
                            <StyledTableCell align="justify">Toggle Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tasks.map((task, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="justify" component="th" scope="row"> {"" + task.input} </StyledTableCell>
                                <StyledTableCell align="justify">{"" + task.status === "true" ? "Done" : "Not Completed"}</StyledTableCell>
                                <StyledTableCell align="justify"><button onClick={() => toggleStatus(index)}> Click to toggle</button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AddTask

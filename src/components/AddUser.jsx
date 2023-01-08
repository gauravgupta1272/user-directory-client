import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";

import { useState } from "react";
import { addUser } from "../service/api"
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;

    & > div{
        margin-top: 20px; 
    }
`;

const defaultValue ={
    name: " ",
    username: " ",
    email: " ",
    phone: " "
};


const AddUser = () => {
    
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    
    const onValueChange = (e) => {
     
        setUser({...user, [e.target.name] : e.target.value});           //...user is call spreading & it is done so that there is no over writting
      
    }

    const addUserDetails = async () =>{
        await addUser(user);
        navigate('/all');       //for redirecting to all user page

    }
  return (
  <Container>
  <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name="name" />
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
    </FormControl>
    <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>ADD USER</Button>
    </FormControl>
  </Container>
  );
};

export default AddUser;

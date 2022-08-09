
import React, { Component } from "react";
import {toast} from 'react-toastify'
import { Card, Button } from "semantic-ui-react";
import UserService from "../Sevices/UserService";




export default class UserPhoto extends Component {
  
    

  state = {
    selectedFile: null,  
  };


  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => { 
    const fd = new FormData();
    fd.append(
      "multipartFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    
    let userService = new UserService();
  
 
  


    try {
   
     
      userService.postPhoto(1, fd).then((res) => {
    
        toast.success(res.data.message);
        console.log(res.data.message);
        
      });
    } catch (error) {
      toast.error("Yeniden deneyiniz");
    }

   


 

    
  };


  render() {
    return (
      <div>
        <Card fluid color={"black"}>
          <Card.Content header="Resim Yükle" />
          
        
          <Card.Content style={{}}>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={this.fileSelectedHandler}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
            <button
              className="ui button"
              onClick={() => this.fileInput.click()}
            >
              Resim Seç
            </button>
            <Button
              color={"green"}
              onClick={this.fileUploadHandler}
              disabled={this.state.selectedFile == null}
            >
              Yükle
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}